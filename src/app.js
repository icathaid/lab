import React from "react";
import { connect } from "react-redux";
import Header from "./header.js";
import Footer from "./footer.js";
import Main from "./main.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
