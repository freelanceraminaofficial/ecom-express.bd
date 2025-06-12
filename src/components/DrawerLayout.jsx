import { IoCloseSharp } from "react-icons/io5";

const DrawerLayout = ({ children }) => {
  return (
    <div className="drawer z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        {children} {/* Page content / trigger goes here */}
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="menu text-base-content min-h-full w-80 p-4 relative bg-pink-200">
          {/* ❌ Close button */}
          <label
            htmlFor="my-drawer"
            className="btn btn-sm btn-circle border-none btn-ghost absolute right-4 top-4 text-xl"
          >
            <IoCloseSharp />
          </label>

          {/* Sidebar content */}
          <ul className="mt-12">
            <li className="block px-4 py-2 rounded hover:bg-pink-600 focus:bg-pink-700 cursor-pointer">
              <a>Women Clothing</a>
            </li>
            <li className="block px-4 py-2 rounded hover:bg-pink-600 focus:bg-pink-700 cursor-pointer">
              <a>unstitched party dress</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrawerLayout;
