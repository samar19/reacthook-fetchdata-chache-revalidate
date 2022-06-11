import React, { useEffect, useState } from "react";
import Head from "next/head";

import useSWR from "swr";

import axios from "axios";
  // select base url 
axios.defaults.baseURL = "http://localhost:5000";

let initialData = [
  { id: 1, title: "todo one" },
  { id: 2, title: "todo two" },
];

const Todos = ({ initialData }) => {
  // const [data, setData] = useState([]);

  const { data, error } = useSWR("/todos", { initialData });

  // useEffect(() => {
  //   getTodos();
  // }, []);

  // const getTodos = async () => {
  //   const res = await axios.get("/todos");
  //   setData(res.data);
  // };

  const handleDelete = async (id) => {};

  return (
    <div className="container mx-auto">
      <Head>
        <title>TODOS | SWR HOOK </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl pt-10 text-blue-500 font-bold text-center">
        TODOS
      </h1>

      <div className="flex justify-center mt-6">
        <div className="w-full px-6">
          {data && data.length > 0 ? (
            <table className="table text-gray-400 border-separate space-y-6  border-gray-600 border-1 border w-full rounded">
              <thead className="bg-gray-800 text-gray-500">
                <tr>
                  <th className="p-3 text-left">Id</th>
                  <th className="p-3 text-left">Todo</th>

                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="text-lg font-bold">
                {data.map((todo, ix) => (
                  <tr
                    className={`${
                      ix % 2 == 0 ? "bg-gray-700" : "bg-gray-800"
                    } hover:opacity-60 `}
                    key={todo.id ? todo.id : ix}
                  >
                    <td className="p-3 ">{todo.id ? todo.id : "-"}</td>
                    <td className="p-3 w-full">
                      {todo.title ? todo.title : "No Title"}
                    </td>

                    <td className="p-3 ">
                      <button
                        className=" text-red-400 hover:text-red-500  ml-2"
                        onClick={() => handleDelete(todo.id)}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="css-i6dzq1"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="block text-lg text-center w-full  py-6 border-gray-600 border-1 border rounded">
              loading ...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const { data } = await axios.get("/todos");
  return {
    props: { initialData: data },
  };
}

export default Todos;
