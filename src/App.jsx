import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routing/routes";
import { Header, Footer } from "./Components";
import { Home } from "./pages";
import { useApp } from "./hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

const App = () => {
  const { response } = useApp();
  const [fetchUser, setFetchUser] = useState(0);
  const [user, setUser] = useState({});
  const [order, setOrder] = useState({});
  const [fetchItems, setFetchItems] = useState();
  const [isActiveInstall, setIsActiveInstall] = useState(false);
  const [orderID, setOrderID] = useState(0);

  useEffect(() => {
    response?.app?.map((item) => {
      if (item.id === parseInt(fetchUser)) {
        setUser(item);
        if (item.isInstall && item.isActive) {
          setIsActiveInstall(true);
        } else {
          setIsActiveInstall(false);
        }
      }

      return null;
    });

    response?.orderInfo?.map((item) => {
      if (item.id === parseInt(fetchUser)) {
        return setOrder(item);
      }
      return null;
    });

    response?.ordersDetail?.map((item) => {
      if (item.orderID === orderID.toString()) {
        setFetchItems(item);
        console.log("yes");
      } else {
        console.log("no");
      }
      return null;
    });
  }, [fetchUser, isActiveInstall, orderID, response]);

  const userHandler = (e) => {
    setFetchUser(e.target.value);
  };

  const nextHandler = (orderID) => {
    setOrderID(orderID);
  };
  return (
    <div>
      {/* <h3>App Status</h3>
      <select
        onChange={(e) => {
          userHandler(e);
        }}
      >
        <option value={0}>CHOOSE USERID</option>

        {response?.app?.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.id}
            </option>
          );
        })}
      </select>
      <div>
        <p>Install:{user.isInstall ? "Yes" : "No"}</p>
        <p>Active:{user.isActive ? "Yes" : "No"}</p>
      </div>
      {isActiveInstall && (
        <div>
          <h3>Order Status</h3>
          <p>OrderID: {order.orderID}</p>
          <p>MobileNo: {order.mobileNo}</p>
          <p>Valid: {order.isValid ? "Yes" : "No"}</p>
          <button
            disabled={!order.isValid}
            onClick={() => {
              nextHandler(order.orderID);
            }}
          >
            NEXT
          </button>
        </div>
      )}

      {orderID && (
        <div>
          <h3>Product Details</h3>
          {fetchItems?.ItemDetails?.map((item) => {
            console.log(item);
            return (
              <ul>
                <li style={{ listStyleType: "none" }}>
                  <input type="radio" name="item" />
                </li>
                <li>Name:{item.name}</li>
                <li>Type:{item.tags}</li>
                <li>
                  <img src={item.imgUrl} alt={item.name} />
                </li>
                <li>Price:{item.price}</li>
                <li>Currency:{item.currency}</li>
              </ul>
            );
          })}
        </div>
      )} */}
      <Header />
      <Routes>
        {routes.map((route, key) => (
          <Route path={route.path} element={<route.component />} key={key} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
