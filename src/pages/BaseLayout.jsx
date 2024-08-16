import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function BaseLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default BaseLayout;
