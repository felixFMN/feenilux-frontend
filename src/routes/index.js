import { BrowserRouter as Router,Route } from "react-router-dom";

import Home from "../view/Home";

export default function Routes(){
    return(
        <Router>
            <Route path="/" element={<Home />} />
        </Router>
    );
}