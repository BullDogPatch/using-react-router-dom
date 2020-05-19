import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";

function Home(props) {
  return <h1>Home Compoment</h1>;
}

function About(props) {
  return <h1>About Compoment</h1>;
}

function Contact(props) {
  return <h1>Contact Compoment</h1>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}
export default App;
