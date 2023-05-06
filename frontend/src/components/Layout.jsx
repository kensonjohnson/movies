import { Outlet } from "react-router-dom";

import React from "react";

export function Layout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
