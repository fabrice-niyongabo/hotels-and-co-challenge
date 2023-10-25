import { ReactNode } from "react";

function HACContainer({ children }: { children: ReactNode }) {
  return <div className="container  mx-auto px-5">{children}</div>;
}

export default HACContainer;
