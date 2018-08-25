import Component from '@ember/component';
import layout from '../templates/components/individual-card';
import { inject as service } from '@ember/service';

const configuration = {
  publicKey: 'sc-ABCDEFGHI123456789',
  fields: {
    // affects all fields
    all: {
      style: {
        // fontFamily: 'Helvetica, sans-serif'
      }
    },
    // affects individual card field types
    number: {
      // Custom target selector
      // selector: '#recurly-number',
      // Format the card number
      format: true
    },
    month: {
      // Display a month select on mobile devices
      inputType: 'mobileSelect',
      style: {
        placeholder: {
          content: 'MM'
        }
      }
    },
    year: {
      style: {
        placeholder: {
          content: 'YYYY'
        }
      }
    },
    cvv: {}
  }
};
export default Component.extend({
  layout,

  recurly: service(),

  tagName: 'form',

  didInsertElement() {
    this._super(...arguments);
    this.recurly.configureRecurly(configuration)
  },

  submit(e) {
    e.preventDefault();
    this.recurly.recurlyToken(e.target)
    .then((response) => {
      console.log(token)
    })
    .catch((error) => {
      console.log(error);
    })
  }
});
