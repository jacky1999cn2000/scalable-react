/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import { requestTopics, selectTopic, toggleDrawer } from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    requestTopics: React.PropTypes.func.isRequired,
    selectTopic: React.PropTypes.func.isRequired,
    toggleDrawer: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    // the action dispatched from here will be caught be sagas
    this.props.requestTopics();
  }

  render() {
    return (
      <Navigation {...this.props} />
    );
  }
}

// the default selector just return state in json format
const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: (topic) => dispatch(selectTopic(topic)),
    toggleDrawer: () => dispatch(toggleDrawer()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
