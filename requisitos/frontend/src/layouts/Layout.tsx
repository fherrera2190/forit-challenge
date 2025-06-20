import bannerM from "../assets/bg-mobile-dark.jpg";
import bannerD from "../assets/bg-desktop-dark.jpg";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <header>
        <picture>
          <source media="(min-width: 376px)" srcSet={bannerD} />
          <img src={bannerM} alt="banner" style={{ width: "100%" }} />
        </picture>
      </header>

      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
