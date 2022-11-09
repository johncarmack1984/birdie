"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("api", {
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch(console.error);
  }, [setUsers]);
  return <div>{JSON.stringify(users)}</div>;
}

// async function getUsers() {
//   // // const res = await fetch("http://localhost:8000/api/", {
//   const res = await fetch("/api/", {
//     mode: "no-cors",
//   });
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//   return res.json();
// }

// export default async function Home() {
//   const users = await getUsers();
//   return <div>Hello</div>;
// }
