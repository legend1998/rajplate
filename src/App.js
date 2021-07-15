import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Recipies from "./Recipies";
import Book from "./Book";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/recipies">
                    <Recipies />
                </Route>
                <Route path="/book">
                    <Book />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
