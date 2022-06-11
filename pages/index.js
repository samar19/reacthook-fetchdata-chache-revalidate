import Head from "next/head";
import useSWR from "swr";

export default function Home() {
  const { data, error } = useSWR("/todos");
  return (
    <div>
      <Head>
        <title>React SWR HOOK fetch and cache </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl pt-10 text-blue-500 font-bold text-center">
        {data && data.length} TODOS
      </h1>
    </div>
  );
}
