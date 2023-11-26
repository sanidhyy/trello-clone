import { PropsWithChildren } from "react";

const MarketingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full bg-slate-100">
      {/* TODO: Navbar */}
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      {/* TODO: Footer */}
    </div>
  );
};

export default MarketingLayout;
