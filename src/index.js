import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider, OrderProvider } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
