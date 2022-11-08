import Image from "next/image";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("http://localhost:3000/api/hello");
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return <div className="">{JSON.stringify(data)}</div>;
}
