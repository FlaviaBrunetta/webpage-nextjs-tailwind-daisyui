import { CaretDown } from 'phosphor-react';
import Login from './login';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">HOME</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <span className="sr-only">Item um</span>
            <a>Item 1</a>
          </li>
          <li tabindex="0">
            <span className="sr-only">Menu com submenu</span>

            <a>
              Item 2
              <CaretDown size={16} />
            </a>
            <ul className="p-2 bg-base-100 ">
              <li>
                <span className="sr-only">submenu um</span>

                <a>Submenu 1</a>
              </li>
              <li>
                <span className="sr-only">submenu dois</span>

                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <Login />
          </li>
        </ul>
      </div>
    </div>
  );
}
