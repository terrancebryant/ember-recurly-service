import EmberError from '@ember/error';
import config from '../config/environment';

export function initialize() {
  const application = arguments[1] || arguments[0];
  let recurlyConfig = config.recurly || {};

  application.register('config:recurly', recurlyConfig, { instantiate: false});
  application.inject('service:recurly', 'config', 'config:recurly');

  if (!recurlyConfig.publicKey) {
    throw new EmberError("RecurlyService: Missing Recurly key, please set `ENV.recurly.publicKey` in config.environment.js");
  }
}

export default {
  name: 'ember-recurly-service',
  initialize: initialize
}