import { Fragment } from "react";

import "../styles/main.scss";

import sword from "../images/sword.svg";

const App = () => {
  return (
    <Fragment>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi react!!!</h1>
          <img src={sword} alt="sword" />
        </section>
      </main>
    </Fragment>
  );
};

export default App;
