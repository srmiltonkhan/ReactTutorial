import { BrowserRouter, Route, Routes, NavLink,Outlet } from "react-router-dom";
import "./styles.css";

/**
 * https://stackoverflow.com/questions/70359840/how-to-fix-reactjs-admin-and-frontend-routing-with-react-router-dom-v6-browserro
 */

const Dashboard = () => <h1>Dashboard</h1>;
const WebsiteHeader = () =>{
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </nav>
  )
}

const WebsiteFooter = () =>{
  return (
    <>
    <h1>Website Footer</h1>
   </>
  )
}
const WebsiteLayout = () => {
  return (
   <>
    <WebsiteHeader/>
    <Outlet/>  {/* The <Outlet> renders the current route selected. */}
    <WebsiteFooter/>
   </>
  )
}

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;



const AdminPanelLayout = () => {
  return (
   <>
    <AdminHeader/>
    <SideNav/>
    <Outlet/>  {/* The <Outlet> renders the current route selected. */}
    <AdminFooter/>
   </>
  )
}

const AdminHeader = ()=>{
  return(
    <h1>Admin Header</h1>
  )
}
const SideNav = () =>{
  return (
    <nav>
      <NavLink to="/">Go Back Website</NavLink>
      <NavLink to="/admin">Dashboard</NavLink>
      <NavLink to="/admin/role-permission">Role & Permission</NavLink>
      <NavLink to="/admin/create-user-role-assign">User Role Assign</NavLink>
    </nav>
  )
}
const AdminFooter = () =>{
  return (
    <h1>Admin Footer</h1>
  )
}
const AdminPanel = () => {
  return (

          <Routes>
            <Route path="/" element={<AdminPanelLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/role-permission" element={<h1>Role & Permission</h1>} />
              <Route path="/create-user-role-assign" element={<h1>Role Assign</h1>} />
              <Route path="*" element={<h1>No Pages</h1>} />
            </Route>
          </Routes>
  );
};

const Website = () => {
  return (
    <>
     
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>No Pages</h1>} />
      </Route>
    </Routes>
    </>

  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Website />} />
        <Route path="/admin/*" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}
