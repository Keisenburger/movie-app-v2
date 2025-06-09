const Pagination = ({ handlePrevious, handleNext, setBottom }) => {
  return (
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
  );
};
