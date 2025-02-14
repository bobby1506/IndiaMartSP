/* eslint-disable react/prop-types */
import SideBarContainer from "../../container/SideBarContainer";

const Seller = ({ children }) => {
  return (
    <div>
      <SideBarContainer />
      <main>{children}</main>
    </div>
  );
};

export default Seller;
