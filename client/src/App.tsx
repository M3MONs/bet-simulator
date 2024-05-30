import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "src/components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import Page404 from "./components/pages/Page404";

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    {/* TODO: Add protected routes; Add profile page; Add 404 page; Add coupons page */}
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='*' element={<Page404 />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
