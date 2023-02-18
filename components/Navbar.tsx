import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full p-8 flex justify-between items-center text-white">
      <h1 className="text-3xl tracking-widest">Teslo</h1>
      <div className="flex gap-x-4">
        <p>Model A</p>
        <p>Model B</p>
        <p>Model C</p>
      </div>
    </nav>
  );
};

export default Navbar;
