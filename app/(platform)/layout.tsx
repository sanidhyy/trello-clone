import { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: PropsWithChildren) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
