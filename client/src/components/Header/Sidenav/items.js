//
//
import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import { RouteLinks } from '../../../utils/routeLinks';

const Items = (props) => {
  const element = (item, i) => (
    <div key={i} className="navItem">
      <Link to={item.link} onClick={props.onHideNav}>
        <FontAwesome name={item.icon} />
        {item.text}
      </Link>
    </div>
  );

  const showLinks = () =>
    RouteLinks.common.map((item, i) => {
      return element(item, i);
    });

  const showAdminLinks = () => {
    return RouteLinks.admin.map((item, i) => {
      return element(item, i);
    });
  };

  // prettier-ignore
  return (
    <div>
      {showLinks()}
      <div>
        <div className="nav_split">
          Admin Options
        </div>
        {showAdminLinks()}
      </div>
    </div>
  )
};

export default Items;
