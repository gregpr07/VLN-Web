import "../styles/globals.css";
import "node_modules/video-react/dist/video-react.css"; //? import default video-react styles

import { Provider } from "react-redux";
import store, { persistor } from "../services/storage/store";

import { PersistGate } from "redux-persist/integration/react";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
