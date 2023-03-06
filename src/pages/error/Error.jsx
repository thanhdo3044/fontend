import style from "./Error.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Error() {
  return (
    <>
      <div className={cx("error")}>1253</div>
    </>
  );
}
export default Error;
