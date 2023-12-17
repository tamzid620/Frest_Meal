import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "./Components/Pages/AdminPanel/AdminPanel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dp" element={<AdminPanel />} />
        {/* Other routes */}
      </Routes>
    </>
  );
}

export default App;
