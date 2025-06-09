export const handleNext = () => {
  if (bottom === 10) {
    setPage(page + 1);
    setBottom(0);
  } else setBottom(bottom + 10);
};

export const handlePrevious = () => {
  if (page !== 1) {
    if (bottom === 0) {
      setBottom(10);
      setPage(page - 1);
    } else {
      setBottom(bottom - 10);
    }
  } else if (bottom === 10) setBottom(0);
};
