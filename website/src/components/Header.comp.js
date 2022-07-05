import React from "react";

function Header() {
  return (
    <div className="text-center py-4">
      <h1 className="text-4xl font-black bg-gradient-to-tr from-blue-200 to-blue-900 bg-clip-text text-transparent">
        Cat / Dog Detector
      </h1>
      <p className="text-sm text-gray-500 mt-2">
        Check if your pet is a Dog or Cat
      </p>
    </div>
  );
}

export default Header;
