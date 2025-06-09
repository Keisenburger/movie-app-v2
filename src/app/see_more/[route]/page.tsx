"use client";
import Footer from "@/components/HomeComponents/Footer";
import MovieSection from "@/components/HomeComponents/MovieSection";
import Navigation from "@/components/HomeComponents/Navigation";
import Pagination from "@/components/HomeComponents/Pagination";
import { useParams } from "next/navigation";
import { useState } from "react";
const Upcoming = () => {
  const params: { route: string } = useParams();
  const route = params.route;
  const [bottom, setBottom] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <div>
      <div className="flex flex-col items-center">
        <Navigation></Navigation>

        <section className="flex flex-col gap-13 mt-8 ">
          <MovieSection
            title={route}
            bottom={bottom}
            route={route}
            page={page}
            isSeeMoreActive={false}
          ></MovieSection>
        </section>
        <Pagination
          bottom={bottom}
          setBottom={setBottom}
          setPage={setPage}
          page={page}
        ></Pagination>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Upcoming;
