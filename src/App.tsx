import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/in-development"
                    element={
                        <img src="https://www.shutterstock.com/image-illustration/under-development-editable-tech-progress-260nw-2633168207.jpg"></img>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
