import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "src/components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
