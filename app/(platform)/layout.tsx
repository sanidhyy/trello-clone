import { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

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
      <Toaster />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
