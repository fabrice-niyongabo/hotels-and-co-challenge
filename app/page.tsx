import HomeProducts from "./components/home-products";
import SubHeader from "./components/sub-header";

export default function Home() {
  return (
    <div className="container mx-auto">
      <SubHeader />
      <HomeProducts />
    </div>
  );
}
