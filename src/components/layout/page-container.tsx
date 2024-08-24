import { FC } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const PageContainer: FC = () => {
  return (
    <>
      <main className="px-2 py-4">
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default PageContainer;
