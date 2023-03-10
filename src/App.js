import './App.css';

import User from "./pages/user/User.jsx";
import Admin from "./pages/admin/Admin.jsx";
import Error from "./pages/error/Error.jsx";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
