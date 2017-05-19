import React    from "react";
import template from "./Nav.jsx";

class Nav extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Nav;
