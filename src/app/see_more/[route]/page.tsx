"use client";
import Footer from "@/components/HomeComponents/Footer";
import MovieSection from "@/components/HomeComponents/MovieSection";
import Navigation from "@/components/HomeComponents/Navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
const Upcoming = () => {
  const params: { route: string } = useParams();
  const route = params.route;
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
            title="Upcoming"
            bottom={bottom}
            route={route}
            page={page}
          ></MovieSection>
        </section>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Upcoming;
