import React from "react";
import styles from "./App.module.scss";

import BaseRouter from "./pages/BaseRouter";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.AppContent}>
        <BaseRouter />
      </div>
    </div>
  );
}

export default App;
