import React from "react";

// let urlTemplate = "http://openweathermap.org/img/wn/$$code.png";
const Icon = ({ id }) => {
  // let getIcon = urlTemplate.replace("$$code", icon);
  return <i className={`wi wi-owm-${id} icons`}></i>;
};

export default Icon;
