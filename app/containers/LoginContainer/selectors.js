import { createSelector } from 'reselect';

/**
 * Direct selector to the loginContainer state domain
 */
const selectLoginContainerDomain = () => state => state.get('loginContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginContainer
 */

const selectLoginContainer = () => createSelector(
  selectLoginContainerDomain(),
  /*
    the reason we do this is because in NavigationContainer's selector, we imported this selector
    and the chance is LoginContainer's state was not ready (reducer wasn't got run yet), so we did the following
  */
  (substate) => (substate ? substate.toJS() : {})
);

export default selectLoginContainer;
export {
  selectLoginContainerDomain,
};
