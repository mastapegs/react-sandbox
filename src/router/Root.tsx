import { Outlet, Link } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
