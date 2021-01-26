import React from "react";

let urlTemplate = "http://openweathermap.org/img/wn/$$code.png";
const Icon = ({ icon, description }) => {
  let getIcon = urlTemplate.replace("$$code", icon);
  return <img src={getIcon} alt={`Icon of ${description}`} />;
};

export default Icon;
