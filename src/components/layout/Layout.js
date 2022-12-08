/* eslint-disable */

import NavHeader from "./NavHeader";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={classes.layout}>
      <div>
        <NavHeader />
      </div>
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default Layout;
