import {
  ClerkLoaded,
  ClerkLoading,
  OrganizationSwitcher,
  UserButton,
} from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { Logo } from "@/components/logo";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-full px-4 h-14 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>

        <Button
          size="sm"
          className="rounded-sm md:flex md:gap-x-1 h-auto py-1.5 px-2"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden md:block">Create</span>
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-x-2">
        <ClerkLoading>
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </ClerkLoading>
        <ClerkLoaded>
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
                loaderIcon: {
                  display: "block",
                },
              },
            }}
          />
        </ClerkLoaded>
      </div>
    </nav>
  );
};
