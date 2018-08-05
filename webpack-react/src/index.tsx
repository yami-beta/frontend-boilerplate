import * as React from "react";
import * as ReactDOM from "react-dom";

const styles = require("./index.scss");

const App = () => {
  return (
    <div className={styles.App}>
      <h1 className={styles.Heading}>Hello World</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
