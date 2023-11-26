import { PropsWithChildren } from "react";

const ClerkLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};

export default ClerkLayout;
