import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";

import Navigation from "./component/Navigation";
import UseStatePage from "./_2021_React_Hooks/useStatePage";
import UseEffectPage from "./_2021_React_Hooks/useEffectPage";
import UseAxios from "./_2021_React_Hooks/_14_useAxios";

function App() {
   return (
        <Router basename={process.env.PUBLIC_URL}>
            <Navigation />
            <Routes>
                <Route path="/" exact={true} element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/movie/:id" element={<Detail/>}></Route>
                <Route path="/useStatePage" element={<UseStatePage/>}></Route>
                <Route path="/useEffectPage" element={<UseEffectPage/>}></Route>
                <Route path="/useAxiosPage" element={<UseAxios/>}></Route>
            </Routes>
       </Router>
   );
}

export default App;