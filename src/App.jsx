import React from "react";
import styles from "./App.module.scss";

import BaseRouter from "./pages/BaseRouter";
import Footer from "components/footer/Footer";
import Navigation from "components/navigation/Navigation";
// import { doc } from "prettier";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.AppContent}>
        <Navigation />
        <BaseRouter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
