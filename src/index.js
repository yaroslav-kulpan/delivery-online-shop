import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./components/App";
import { store, persistor } from "./redux/configure-store";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
