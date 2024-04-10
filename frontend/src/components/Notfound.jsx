import React from "react";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <h1 className="text-6xl font-bold mb-4">
        404{" "}
        <span class="before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span class="relative text-white">Not</span>
        </span>{" "}
        Found
      </h1>
      <p className="text-lg">
        Oops! The page you're looking for does not exist.
      </p>
    </div>
  );
};

export default Notfound;
