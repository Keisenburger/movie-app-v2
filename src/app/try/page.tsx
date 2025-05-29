"use client";
import { useEffect, useState } from "react";
const Try = () => {
  const [data, setData] = useState({});
  const url = "https://api.themoviedb.org/3/movie/715287?language=en-US";
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  console.log(data);
  return;
};

export default Try;
