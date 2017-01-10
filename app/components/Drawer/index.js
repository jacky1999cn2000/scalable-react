/**
*
* Drawer
*
*/

import React from 'react';


import styles from './styles.css';
import classNames from 'classnames';

function Drawer({ items, selectItem, itemLabelAttr, itemKeyAttr, isDrawerOpen }) {
  const itemNodes = items.map(item => (
    <div
      className={styles.item}
      key={item[itemKeyAttr]}
      onClick={() => selectItem(item)}
    >
      {item[itemLabelAttr]}
    </div>
  ));
  return (
    /*
      add squre brackets around "styles.drawerOpen" so the linter won't complain
      since "styles.drawerOpen" is not a valid key;
      luckily, modern javascript support the so-called "calculated attribute",
      so it will use the calculated value as the attribute
    */
    <div className={classNames(styles.drawer, { [styles.drawerOpen]: isDrawerOpen })}>
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLabelAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
}

export default Drawer;
