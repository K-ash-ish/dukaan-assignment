import logo from "../assets/logo.svg";
import chevron from "../assets/chevron.svg";
import wallet from "../assets/wallet.svg";
import orders from "../assets/orders.svg";
import product from "../assets/product.svg";
import delivery from "../assets/delivery.svg";
import marketing from "../assets/marketing.svg";
import analytics from "../assets/analytics.svg";
import payments from "../assets/payments.svg";
import tools from "../assets/tools.svg";
import discounts from "../assets/discounts.svg";
import audience from "../assets/audience.svg";
import appearance from "../assets/appearance.svg";
import plugins from "../assets/plugins.svg";
import home from "../assets/home.svg";

import NavItem from "./ui/NavItem";
function Navbar() {
  const navItems = [
    { itemName: "Home", to: "/", icon: <img src={home} alt="home-icon" /> },
    { itemName: "Orders", to: "/", icon: <img src={orders} alt="home-icon" /> },
    {
      itemName: "Products",
      to: "/",
      icon: <img src={product} alt="home-icon" />,
    },
    {
      itemName: "Delivery",
      to: "/",
      icon: <img src={delivery} alt="home-icon" />,
    },
    {
      itemName: "Marketing",
      to: "/",
      icon: <img src={marketing} alt="home-icon" />,
    },
    {
      itemName: "Analytics",
      to: "/",
      icon: <img src={analytics} alt="home-icon" />,
    },
    {
      itemName: "Payments",
      to: "/",
      icon: <img src={payments} alt="home-icon" />,
    },
    { itemName: "Tools", to: "/", icon: <img src={tools} alt="home-icon" /> },
    {
      itemName: "Discounts",
      to: "/",
      icon: <img src={discounts} alt="home-icon" />,
    },
    {
      itemName: "Audience",
      to: "/",
      icon: <img src={audience} alt="home-icon" />,
    },
    {
      itemName: "Appearance",
      to: "/",
      icon: <img src={appearance} alt="home-icon" />,
    },
    {
      itemName: "Plugins",
      to: "/",
      icon: <img src={plugins} alt="home-icon" />,
    },
  ];
  return (
    <nav className=" w-56 bg-[#1E2640] text-white flex flex-col justify-between items-center">
      <div className="w-full">
        <div className="flex justify-around items-center my-3">
          <div className="flex gap-3 ">
            <img src={logo} alt="website-logo" className="rounded-md" />
            <div>
              <h2 className="text-base">Nishyan</h2>
              <a href="/" className="text-xs underline underline-offset-2">
                Visit Store
              </a>
            </div>
          </div>
          <img src={chevron} alt="" />
        </div>
        <ul className="ml-8 mt-2 flex flex-col gap-3">
          {navItems.map((item) => {
            return (
              <NavItem
                key={item.itemName}
                itemName={item.itemName}
                to={item.to}
                icon={item.icon}
              />
            );
          })}
        </ul>
      </div>
      <div className="bg-[#353C53] w-48 h-14 my-4 flex justify-around items-center p-2 rounded-sm">
        <div className="bg-white/20 p-2 rounded-md ">
          <img src={wallet} alt="" />
        </div>
        <div>
          <h4 className="text-sm font-normal">Available Credits</h4>
          <p className="text-base font-medium">222.10</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
