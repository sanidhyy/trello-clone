import { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "/logo.svg",
        },
        variables: {
          colorPrimary: "#171717",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
