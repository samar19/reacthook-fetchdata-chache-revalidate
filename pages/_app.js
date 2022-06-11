import "tailwindcss/tailwind.css";

import NavBar from "../components/NavBar";
import AddTodo from "../components/AddTodo";

import { SWRConfig } from "swr";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axios.get(url).then((r) => r.data),
      }}
    >
      <div className="bg-gray-800 w-full  text-gray-400 min-h-screen pb-6">
        <NavBar />
        <AddTodo />
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
