import Component from '@ember/component';
import { connect } from 'ember-redux';

const stateToComputed = () => {
  return {
    obj: {
      number: 5
    }
  };
};

const ConnectComponent = Component.extend({

  init() {
    this._super(...arguments);
    this.obj.number;
  }
});

export default connect(stateToComputed)(ConnectComponent)
