import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Website from "./component/website/Website";
import AdminPanel from "./component/admin-panel/AdminPanel"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Website />} />
        <Route path="/admin/*" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
