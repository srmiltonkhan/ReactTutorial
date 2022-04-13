import {Routes, Route } from "react-router-dom";
import WebsiteLayout from "./WebsiteLayout";
import Home from "./route-pages/Home";
import Contact from "./route-pages/Contact";

function Website() {
  return (
    <Routes>
        <Route path="/" element={<WebsiteLayout />} />
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Website