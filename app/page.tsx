import HACContainer from "./components/hac-container";
import HomeProducts from "./components/home-products";
import SubHeader from "./components/sub-header";

export default function Home() {
  return (
    <HACContainer>
      <SubHeader />
      <HomeProducts />
    </HACContainer>
  );
}
