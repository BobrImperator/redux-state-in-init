import Component from '@ember/component';
import { connect } from 'ember-redux';

const stateToComputed = () => {
  return {
    obj: {
      number: 5
    }
  };
};

const ConnectOnDidReceiveComponent = Component.extend({

  didReceiveAttrs() {
    this.obj.number;
  }
});

export default connect(stateToComputed)(ConnectOnDidReceiveComponent)
