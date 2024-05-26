import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "src/components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default App;
