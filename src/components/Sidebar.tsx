import { DollarSign, Grid3X3, Home, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Sidebar = ({ sidebarExpanded }: { sidebarExpanded: boolean }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("/"); // Default to home route

  // Update active item when location changes
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <aside
      className={`${
        sidebarExpanded ? "w-64" : "w-20"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-center">
          <span
            className={`text-2xl font-bold ${
              sidebarExpanded ? "" : "hidden"
            }`}
          >
            LOGO
          </span>
          <span
            className={`text-2xl font-bold ${
              sidebarExpanded ? "hidden" : ""
            }`}
          >
            L
          </span>
        </div>
        <nav className="flex-1 space-y-2">
          <NavItem
            icon={<Home className="h-7 w-7" />}
            label="Dashboard"
            to="/"
            isActive={activeItem === "/"}
            sidebarExpanded={sidebarExpanded}
            onClick={() => setActiveItem("/")}
          />
          <NavItem
            icon={<Grid3X3 className="h-7 w-7"  />}
            label="Projects"
            to="/projects"
            isActive={activeItem === "/projects"}
            sidebarExpanded={sidebarExpanded}
            onClick={() => setActiveItem("/projects")}
          />
          <NavItem
            icon={<DollarSign className="h-7 w-7" />}
            label="Estimates"
            to="/estimates"
            isActive={activeItem === "/estimates"}
            sidebarExpanded={sidebarExpanded}
            onClick={() => setActiveItem("/estimates")}
          />
        </nav>
        <div className="p-4">
          <button className="flex w-full items-center rounded-lg px-4 py-2">
            <LogOut className="h-5 w-5" />
            <span
              className={`ml-3 ${sidebarExpanded ? "" : "hidden"}`}
            >
              Logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({
  icon,
  label,
  to,
  isActive,
  sidebarExpanded,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
  sidebarExpanded: boolean;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="flex items-center rounded-lg h-10 pr-2"
    onClick={onClick}
  >
    <div
      className={`h-full w-2 border-r-8 rounded-sm ml-[-5px] mr-3 ${
        isActive ? "border-primary" : "border-transparent"
      }`}
    ></div>
    <div
      className={`flex items-center h-10 w-full rounded-sm ${
        isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"
      } ${
        sidebarExpanded ? "pl-2 justify-start" : "justify-center"
      } transition-all duration-300 ease-in-out`}
    >
      <div>{icon}</div>
      <span
        className={`ml-3 transition-all duration-300 ${
          sidebarExpanded ? "opacity-100 w-auto" : "hidden"
        }`}
      >
        {label}
      </span>
    </div>
  </Link>
);

export default Sidebar;
