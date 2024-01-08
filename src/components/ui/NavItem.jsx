/* eslint-disable react/prop-types */
function NavItem(props) {
  const { itemName, to, icon } = props;
  return (
    <li className="text-white/80 ">
      <a href={to} className="flex gap-3">
        <span>{icon}</span>
        {itemName}
      </a>
    </li>
  );
}

export default NavItem;
