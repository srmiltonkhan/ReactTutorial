import Header from "./Header/Header"
import { Outlet } from "react-router-dom";

function WebsiteLayout() {
  return (
    <>
        <Header/>
        <Outlet/>  {/* The <Outlet> renders the current route selected. */}
    </>
  )
}

export default WebsiteLayout