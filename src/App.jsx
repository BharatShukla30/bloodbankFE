import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { fetchCitiesList, loadUser } from "./redux/actions/authActions";
import ProtectedRoute from "./components/ProtectedRoute";
import Error404Boundary from "./pages/404ErrorBoundary";
import Profile from "./pages/Profile";
import Location from "./pages/Location";
import Signup from './pages/Signup'
import Login from './pages/Login'
import Feed from "./pages/Feed";


function App() {
  React.useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(fetchCitiesList());
  }, []);

  return (
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feed" element={<Feed />}/>
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="location" element={<Location />} />
          <Route path="*" element={<Error404Boundary />} />
          <Route path='/Signup' element = {<Signup/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
