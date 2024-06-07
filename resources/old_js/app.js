import React from "react";
import ReactDOM from "react-dom";
import history from "./utils/history";
import { store } from './store/store';
import Root from "./routes";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <Root history={history} store={store} />,
  document.getElementById("app")
);  

serviceWorker.unregister();
