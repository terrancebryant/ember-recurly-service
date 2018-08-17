import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  recurly: service('recurly'),

  beforeModel() {
    console.log('before')
    return this.get('recurly').load()
  }
});
