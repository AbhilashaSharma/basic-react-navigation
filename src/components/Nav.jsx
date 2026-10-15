import React from "react";
import "../App.css";
function Nav({ menus, selected }) {
  const isActive = (menu) => menu.key === selected;
  const onClick = (menu) => {
    window.location.url = menu.url;
  };
  return (
    <ul id="navigation-bar" className="nav-menu">
      {menus.map((menu) => {
        return (
          <li key={menu.key} className={isActive(menu) ? "active" : ""}>
            <button disabled={menu.disabled} onClick={onClick(menu)}>
              {menu.label}
            </button>
            {menu.subcategories && (
              <ul className="sub-menu">
                {menu.subcategories.map((subMenu) => {
                  return (
                    <li>
                      <a href="/">{subMenu.label}</a>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Nav;
