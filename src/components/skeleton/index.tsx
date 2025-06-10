import { Skeleton } from "../ui/skeleton";

export const DetailLoader = () => {
  return (
    <div className="flex justify-center w-screen">
      <section className="container flex flex-col gap-8 mt-10 self-center">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1">
            <Skeleton className="w-[200px] h-10 rounded-full"></Skeleton>
            <Skeleton className="w-[240px] h-7 rounded-full"></Skeleton>
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton className="h-5 w-21"></Skeleton>
            <Skeleton className="h-5 w-21"></Skeleton>
            <Skeleton className="h-5 w-21"></Skeleton>
          </div>
        </div>
        <div className="flex gap-8">
          <Skeleton className="w-[392px] h-[500px]"></Skeleton>
          <Skeleton className="w-full h-[500px]"></Skeleton>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <Skeleton className="w-20 h-5 rounded-full"></Skeleton>
            <Skeleton className="w-20 h-5 rounded-full"></Skeleton>
            <Skeleton className="w-20 h-5 rounded-full"></Skeleton>
            <Skeleton className="w-20 h-5 rounded-full"></Skeleton>
            <Skeleton className="w-20 h-5 rounded-full"></Skeleton>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-5 rounded-full"></Skeleton>
            <Skeleton className="w-full h-5 rounded-full"></Skeleton>
            <Skeleton className="w-3/4 h-5 rounded-full"></Skeleton>
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex gap-[53px]">
              <Skeleton className="w-16 h-7 rounded-full"></Skeleton>
              <Skeleton className="w-[200px] h-7"></Skeleton>
            </div>
            <div className="flex gap-[53px]">
              <Skeleton className="w-16 h-7 rounded-full"></Skeleton>
              <Skeleton className="w-[360px] h-7"></Skeleton>
            </div>
            <div className="flex gap-[53px]">
              <Skeleton className="w-16 h-7 rounded-full"></Skeleton>
              <Skeleton className="w-[360px] h-7"></Skeleton>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mb-20">
          <div className="w-full justify-between flex">
            <Skeleton className="w-[250px]  h-9"></Skeleton>
            <Skeleton className="w-[165px]  h-9"></Skeleton>
          </div>
          <div className="grid grid-cols-5 gap-8">
            <Skeleton className="h-[480px]"></Skeleton>
            <Skeleton className="h-[480px]"></Skeleton>
            <Skeleton className="h-[480px]"></Skeleton>
            <Skeleton className="h-[480px]"></Skeleton>
            <Skeleton className="h-[480px]"></Skeleton>
          </div>
        </div>
      </section>
    </div>
  );
};

export const GenreLoader = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <Skeleton className="h-7 w-[200px]"></Skeleton>
      <div className="grid grid-cols-4 gap-8">
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
      </div>
    </div>
  );
};
