"use client";

import { Copy, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import type { CardWithList } from "@/types";

type ActionsProps = {
  data: CardWithList;
};

export const Actions = ({ data }: ActionsProps) => {
  return (
    <div className="space-y-2 mt-2">
      <p className="text-xs font-semibold">Actions</p>

      <Button variant="gray" className="w-full justify-start" size="inline">
        <Copy className="h-4 w-4 mr-2" />
        Copy
      </Button>

      <Button
        variant="destructive"
        className="w-full justify-start"
        size="inline"
      >
        <Trash className="h-4 w-4 mr-2" />
        Delete
      </Button>
    </div>
  );
};

Actions.Skeleton = function ActionSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="w-20 h-4 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
    </div>
  );
};
