/* eslint-disable react/prop-types */
import NavbarContainer from "../../container/navbarContainer";
const Main = ({ children }) => {
  return (
    <div>
      <NavbarContainer />
      <main>{children}</main>
    </div>
  );
};

export default Main;
