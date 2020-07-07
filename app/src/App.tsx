import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { appRoutes } from "./routes";
import BuildRoute from "./routes/BuildRoute";
function App() {
  return (
    <>
      <Router>
        <Header />
        <BuildRoute routes={appRoutes} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
