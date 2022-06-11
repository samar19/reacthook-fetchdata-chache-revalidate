import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <div>
      <nav className="flex  justify-center shadow-lg mb-6 bg-gray-900">
        <Link href="/">
          <a
            className={` py-4 px-6 block hover:text-blue-500 focus:outline-none  border-b-2 font-medium mx-2  ${
              router.pathname == "/"
                ? "text-blue-500 border-blue-500"
                : "text-gray-600 border-gray-600"
            } `}
          >
            Home
          </a>
        </Link>
        <Link href="/todos">
          <a
            className={` py-4 px-6 block hover:text-blue-500 focus:outline-none  border-b-2 font-medium mx-2  ${
              router.pathname == "/todos"
                ? "text-blue-500 border-blue-500"
                : "text-gray-600 border-gray-600"
            } `}
          >
            Todos
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
