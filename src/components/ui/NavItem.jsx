/* eslint-disable react/prop-types */
function NavItem(props) {
  const { itemName, to, icon, active } = props;
  return (
    <li className="text-white/80 ">
      <a
        href={to}
        className={`flex items-center gap-3 px-4 py-1 ${
          active ? "bg-white/10 rounded" : ""
        }`}
      >
        <span>{icon}</span>
        {itemName}
      </a>
    </li>
  );
}

export default NavItem;
