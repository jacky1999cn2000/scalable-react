import { createSelector } from 'reselect';
import selectNavigationContainer from '../NavigationContainer/selectors';

/**
 * Direct selector to the linkListContainer state domain
 */
const selectLinkListContainerDomain = () => state => state.get('linkListContainer');

/**
 * Other specific selectors
 */
 // path parameters were retrieved via props
const selectRouteTopic = () => (state, props) => props.params.topicName;

// to filter out bad route parameters
const selectTopic = () => createSelector(
  selectNavigationContainer(),
  selectRouteTopic(),
  (navigationState, routeTopicName) => {
    const selectedTopic = navigationState.topics.find(t => t.name === routeTopicName);
    return selectedTopic || { name: '' };
  }
);
/**
 * Default selector used by LinkListContainer
 */
/*
  everything returned from this selector will be made available in LinkListContainer, which will
  then be passed as props to LinkList, so we can access links (substate.toJS()) and routeTopicName there
*/
const selectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain(),
  selectTopic(),
  (substate, topic) => Object.assign(substate.toJS(), { topicName: topic.name })
);

export default selectLinkListContainer;
export {
  selectLinkListContainerDomain,
};
