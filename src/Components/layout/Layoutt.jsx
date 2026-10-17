
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layoutt() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <Outlet context={{ search, setSearch }} />

      <Footer />
    </>
  );
}

export default Layoutt;
