import { Provider } from "react-redux"; // Importing Provider
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import store from "../redux/store"; // Importing redux store
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
