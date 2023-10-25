import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

function Loader() {
  return (
    <div>
      <p className="w-1/2">
        <Skeleton />
      </p>
      <p className="w-1/3">
        <Skeleton />
      </p>
      <div className="grid  grid-cols-2 gap-4 mt-2">
        <div>
          <Skeleton className="h-96 rounded-xl" />
          <p className="mt-3 w-1/2">
            <Skeleton />
          </p>
          <p className="w-1/3">
            <Skeleton />
          </p>
        </div>
        <div>
          <div className="grid  grid-cols-2 gap-4">
            <div>
              <Skeleton className="h-44" />
            </div>
            <div>
              <Skeleton className="h-44" />
            </div>
            <div>
              <Skeleton className="h-44" />
            </div>
            <div>
              <Skeleton className="h-44" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
