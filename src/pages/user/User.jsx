import style from "./User.module.scss";
import classNames from "classnames/bind";

import Home from "../../components/pageUser/Home/Home";

const cx = classNames.bind(style);

function Users() {
  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default Users;
