import Service from '@ember/service';
import { readOnly } from '@ember/object/computed';
import { get } from '@ember/object';
import loadRecurlyScript from 'ember-recurly-service/utils/load-recurly-script';

export default Service.extend({
  config: null,

  lazyLoad: readOnly('config.lazyload'),
  publicKey: readOnly('config.publicKey'),

  load() {
    const lazyLoad = get(this, 'lazyLoad');
    const loadScript = lazyLoad ? loadRecurlyScript('https://js.recurly.com/v4/recurly.js') : null;
    return loadScript.then(() => {
      console.log('Script has been loaded')
    })
  }
});
