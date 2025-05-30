type MovieCard = { title: string; imageUrl: string; voteAverage: number };

const Card = ({ title, imageUrl, voteAverage }: MovieCard) => {
  return (
    <div className="h-fit  rounded-md">
      <img
        src={`https://image.tmdb.org/t/p/w300${imageUrl}`}
        alt={title}
        className=" rounded-t-md"
      />
      <div className=" px-3 py-2 gap-1 flex flex-col bg-gray-100 h-[96px] rounded-md">
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
  );
};

export default Card;
