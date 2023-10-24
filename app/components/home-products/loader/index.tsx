import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

function Loader() {
  const loaderData = new Array(10).fill("Placeholder");
  return (
    <div className="grid  grid-cols-2 lg:grid-cols-4 gap-4">
      {loaderData.map((item, index) => (
        <div key={index}>
          <Skeleton className="h-44" />
          <p className="w-1/2">
            <Skeleton />
          </p>
          <p className="w-1/3">
            <Skeleton />
          </p>
          <p className="w-1/4">
            <Skeleton />
          </p>
        </div>
      ))}
    </div>
  );
}

export default Loader;
