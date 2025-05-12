
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { NavLink } from "react-router";

export function Hearder() {
  return (
    <div>
    <Navbar>
      <NavbarBrand>      
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">BUDGET APP</span>
      </NavbarBrand>    
<NavbarCollapse>
     <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-6">

      <NavLink to="/" className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-400"}>
        Home
      </NavLink>
      <NavLink to="/" className={"text-gray-400"}>
      About Us  
      </NavLink>
      <NavLink to="/" className={"text-gray-400"}>
        Community
      </NavLink>
      <NavLink to="/" className={"text-gray-400"}>
       service
      </NavLink>     
      </div>
      </NavbarCollapse>
      <div className="flex">
        <Button>Get started</Button>
      </div> 
    
    </Navbar>
 
    </div>
  );
}
