import { handleNext, handlePrevious } from "@/functions";
import { PaginationType } from "@/type";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ bottom, setBottom, setPage, page }: PaginationType) => {
  return (
    <div className="flex justify-end px-5 container gap-2">
      <button
        className="px-4 py-2 gap-2 cursor-pointer flex items-center"
        onClick={() => {
          handlePrevious({ bottom, setBottom, setPage, page });
        }}
      >
        <ChevronLeft></ChevronLeft>
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
        className="px-4 py-2 gap-2 cursor-pointer flex items-center"
        onClick={() => {
          handleNext({ bottom, setBottom, setPage, page });
        }}
      >
        Next
        <ChevronRight></ChevronRight>
      </button>
    </div>
  );
};

export default Pagination;
