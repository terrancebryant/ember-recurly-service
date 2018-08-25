import Service from '@ember/service';
import { readOnly } from '@ember/object/computed';
import { get } from '@ember/object';
import loadRecurlyScript from 'ember-recurly-service/utils/load-recurly-script';
import { resolve, reject } from 'rsvp';
import { set } from '@ember/object';

export default Service.extend({
  config: null,

  lazyLoad: readOnly('config.lazyload'),
  
  publicKey: readOnly('config.publicKey'),

  configured: false,

  load() {
    const lazyLoad = get(this, 'lazyLoad');
    const loadScript = lazyLoad ? loadRecurlyScript('https://js.recurly.com/v4/recurly.js') : null;
    return loadScript.then(() => {
      console.log('Script has been loaded')
    })
  },

  configureRecurly(configuration) {
    const publicKey = get(this, 'publicKey');
    if(!configuration) {
      recurly.configure(publicKey);
    } else {
      recurly.configure(configuration);
    }
    set(this, 'configured', recurly.configured)
  },

  recurlyToken(billingData) {
    return new Promise((resolve, reject) => {
      recurly.token(billingData, (error, token) => {
        if(error) {
          reject(error);
        } else {
          resolve(token);
        }
      })
    })
  }
});