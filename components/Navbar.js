import { CaretDown } from 'phosphor-react';
import Login from './login';

export default function Navbar() {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">HOME</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>
            <span class="sr-only">Item um</span>
            <a>Item 1</a>
          </li>
          <li tabindex="0">
            <span class="sr-only">Menu com submenu</span>

            <a>
              Item 2
              <CaretDown size={16} />
            </a>
            <ul class="p-2 bg-base-100 ">
              <li>
                <span class="sr-only">submenu um</span>

                <a>Submenu 1</a>
              </li>
              <li>
                <span class="sr-only">submenu dois</span>

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
