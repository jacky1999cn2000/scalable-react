/*
 *
 * LinkFormContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLinkFormContainer from './selectors';
import styles from './styles.css';
import Linkform from '../../components/LinkForm';

export class LinkFormContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Linkform {...this.props} />
    );
  }
}

const mapStateToProps = selectLinkFormContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkFormContainer);
