import OrderFormContainer from "../../container/OrderFormContainer";
import OrderListUserContainer from "../../container/orderListUserContainer";
import SignInContainer from "../../container/signInContainer";
import SignUpContainer from "../../container/signUpContainer";
import SellerDashboard from "../../pages/SellerDashboard";
import UserScreen from "../../pages/UserScreen";
import ProtectedRoute from "../Auth/protectedRoute";
import Main from "../layout/Main";
import Seller from "../layout/Seller";

export const routeConfig = [
  {
    path: "/signUp",
    element: <SignUpContainer />,
    // isPrivate: false,
  },
  { path: "/login", element: <SignInContainer /> },
  // isPrivate: false },
  {
    path: "/",
    element: (
      <ProtectedRoute
        element={
          <Main>
            <UserScreen />
          </Main>
        }
      />
    ),
    // isPrivate: true,
  },
  {
    path: "/sellerDashboard",
    element: (
      <Seller>
        <SellerDashboard />
      </Seller>
    ),
    // isPrivate: true,
  },
  {
    path: "/orderForm/:sellerId",
    element: <OrderFormContainer />,
    // isPrivate: true,
  },
  {
    path: "/orderedProduct",
    element: (
      <Main>
        <OrderListUserContainer />
      </Main>
    ),
    // isPrivate: true,
  },
];
