import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "../../../containers/pages/Dashboard";

class UsefulLinks extends React.Component {

  render(){
    const {links } = this.props;
    return (
      <div>
        <hr />
        {links.map((link)=>this.renderLinks(link))}
      </div>
  );
}

renderLinks(link)
{
    return(
        <Link to={link.to}>{link.label}</Link>
    );
}
}

export default UsefulLinks;