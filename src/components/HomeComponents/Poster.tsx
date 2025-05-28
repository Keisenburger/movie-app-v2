const Poster = ({
  title,
  description,
  imageLocation,
}: {
  title: string;
  description: string;
  imageLocation: string;
}) => {
  return (
    <div
      className={`w-full h-full bg-no-repeat bg-center my-[24px]  flex  justify-center items-center  shrink-0 relative snap-center`}
    >
      <img
        src={imageLocation}
        alt={title}
        className=" absolute  z-0 w-full h-full"
      />
      <div className="container flex flex-col gap-4 absolute px-5">
        <div className="flex flex-col text-white w-[302px] ">
          <p className=" text-[20px]">Now Playing:</p>
          <p className=" text-4xl font-bold">{title}</p>
          <div className="flex h-[48px] items-center">
            <img
              src="./images/star.png"
              alt="star"
              className="w-[28px] h-[28px]"
            />
            <div className="flex items-center">
              <p className=" text-[18px] font-semibold">6.9</p>
              <p className=" text-[16px]">/10</p>
            </div>
          </div>
        </div>
        <div className="w-[402px] text-white text-[16px]">
          <p>{description}</p>
        </div>
        <button className="bg-white py-2 px-4 rounded-md w-fit flex items-center cursor-pointer gap-0.5">
          <img src="./images/play.png" alt="" />
          <p>Watch Trailer</p>
        </button>
      </div>
    </div>
  );
};

export default Poster;
