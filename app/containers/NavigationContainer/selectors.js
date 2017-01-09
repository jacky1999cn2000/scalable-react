import { createSelector } from 'reselect';

/**
 * Direct selector to the navigationContainer state domain
 */
 /*
  the only difference from the official documentation (https://github.com/reactjs/reselect),
  is here it returned a function, not a value, but essense is the same
 */
const selectNavigationContainerDomain = () => state => state.get('navigationContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavigationContainer
 */

const selectNavigationContainer = () => createSelector(
  selectNavigationContainerDomain(),
  (substate) => substate.toJS()
);

export default selectNavigationContainer;
export {
  selectNavigationContainerDomain,
};
