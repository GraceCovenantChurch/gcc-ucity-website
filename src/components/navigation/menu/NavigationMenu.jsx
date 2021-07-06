import React from "react";
import PropTypes from "prop-types";

import MenuComponentFactory from "./factory/MenuComponentFactory";

const NavigationMenu = (props) => {
  let menuData = props.menu;

  return (
    <React.Fragment>
      {menuData.map((menu, index) => {
        return <MenuComponentFactory key={index} data={menu} />;
      })}
    </React.Fragment>
  );
};

NavigationMenu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      children: PropTypes.any,
    })
  ),
};

export default NavigationMenu;
