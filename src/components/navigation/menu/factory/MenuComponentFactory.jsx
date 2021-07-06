import React from "react";
import ComponentIndex from "./MenuComponentDictionary";

const MenuComponentFactory = (props) => {
  const data = props.data;
  const ComponentToRender = ComponentIndex[data.type];

  return <ComponentToRender {...props} />;
};

export default MenuComponentFactory;
