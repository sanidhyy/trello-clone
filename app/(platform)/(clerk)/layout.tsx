import type { PropsWithChildren } from "react";

const ClerkLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full flex items-center justify-center flex-col gap-y-5 bg-slate-100">
      {children}
    </div>
  );
};

export default ClerkLayout;
