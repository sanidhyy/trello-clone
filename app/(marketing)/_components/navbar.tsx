import Link from "next/link";
import { Github } from "lucide-react";

import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />

        <div className="space-x-4 md:w-auto flex items-center justify-between w-full">
          <Link
            href="/sign-in"
            className={buttonVariants({ size: "sm", variant: "outline" })}
          >
            Login
          </Link>

          <Link href="/sign-up" className={buttonVariants({ size: "sm" })}>
            Get Taskify for free
          </Link>

          <Link
            href="https://github.com/sanidhyy/trello-clone"
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ size: "sm" })}
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
