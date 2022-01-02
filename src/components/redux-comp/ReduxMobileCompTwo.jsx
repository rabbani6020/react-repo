import { useDispatch, useSelector } from "react-redux";
import { buyMobile } from "../../redux/mobile/mobileActions";

const ReduxMobileCompTwo = () => {
  const dispatch = useDispatch();
  const { mobile } = useSelector((state) => state);

  return (
    <>
      <div>
        <h2>Redux Mobile Comp</h2>
        <h3>Total Stock of Mobile = {mobile.totalMobile}</h3>
        <div>
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(buyMobile())}
          >
            Buy Mobile
          </button>
        </div>
      </div>
    </>
  );
};

export default ReduxMobileCompTwo;
