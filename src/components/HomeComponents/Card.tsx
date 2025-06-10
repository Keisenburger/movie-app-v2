import { MovieCard } from "@/type";
import Link from "next/link";

const Card = ({ title, imageUrl, voteAverage, id }: MovieCard) => {
  return (
    <Link
      href={`/movies/${id}`}
      className="hover:transform-border hover:scale-110 transition-all duration-125"
    >
      <div className="h-fit  rounded-md hover:transition-all hover:scale-3d  hover:transform duration-150">
        <img
          src={`https://image.tmdb.org/t/p/w300${imageUrl}`}
          alt={title}
          className=" rounded-t-md"
        />
        <div className=" px-3 py-2 gap-1 flex flex-col bg-gray-100 h-[96px]  rounded-b-md">
          <div className="flex items-center gap-1">
            <img
              src="/images/star.png"
              alt="star"
              className="size-4
            "
            />
            <div className="flex items-center">
              <p>{Math.floor(voteAverage / 0.1) / 10}</p>
              <p className=" leading-[16px]  text-[12px] text-[#71717A]">/10</p>
            </div>
          </div>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
