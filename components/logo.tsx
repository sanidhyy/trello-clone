import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

type LogoProps = {
  isMobile?: boolean;
};

export const Logo = ({ isMobile }: LogoProps) => {
  return (
    <Link href="/">
      <div
        className={cn(
          !isMobile && "hidden",
          `hover:opacity-75 transition items-center gap-x-2 flex`
        )}
      >
        <Image
          src="/logo.svg"
          alt="taskify logo"
          height={30}
          width={30}
          aria-hidden
        />

        <p
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};
