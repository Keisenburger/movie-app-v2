"use client";
import Footer from "@/components/HomeComponents/Footer";
import MovieSection from "@/components/HomeComponents/MovieSection";
import Navigation from "@/components/HomeComponents/Navigation";
import { useState } from "react";
const TopRated = () => {
  const [bottom, setBottom] = useState(0);
  const [page, setPage] = useState(1);
  const handlePrevious = () => {
    if (page !== 1) {
      if (bottom === 0) {
        setBottom(10);
        setPage(page - 1);
      } else {
        setBottom(bottom - 10);
      }
    } else if (bottom === 10) setBottom(0);
  };
  const handleNext = () => {
    if (bottom === 10) {
      setPage(page + 1);
      setBottom(0);
    } else setBottom(bottom + 10);
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <Navigation></Navigation>

        <section className="flex flex-col gap-13 mt-8 ">
          <MovieSection
            title="Top Rated"
            bottom={bottom}
            route="top_rated"
            page={page}
          ></MovieSection>
        </section>
        <div className="flex justify-end px-5 container gap-2">
          <button
            className="px-4 py-2 gap-2 cursor-pointer"
            onClick={() => {
              handlePrevious();
            }}
          >
            Previous
          </button>
          <button
            className="p-2.5 cursor-pointer"
            onClick={() => {
              setBottom(0);
            }}
          >
            1
          </button>
          <button
            className="p-2.5 cursor-pointer"
            onClick={() => {
              setBottom(10);
            }}
          >
            2
          </button>
          <button
            className="px-4 py-2 gap-2 cursor-pointer"
            onClick={() => {
              handleNext();
            }}
          >
            Next
          </button>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default TopRated;
