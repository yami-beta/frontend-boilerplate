import React from "react";
import ReactDOM from "react-dom";

import styles from "./index.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <h1 className={styles.Heading}>Hello World</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
