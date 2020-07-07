import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./src/App";

import "font-awesome/css/font-awesome.min.css";
import GlobalStyle from "./src/theme/GlobalStyle";
import store from "./src/redux/configureStore";

import { Provider as ReduxProvider } from "react-redux";
class Root extends React.Component {
  render() {
    return (
      <div>
        <ReduxProvider store={store}>
          <GlobalStyle />
          <App />
        </ReduxProvider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("app"));
