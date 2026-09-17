"use client";

import { useState } from "react";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { Check, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { cn } from "@/lib/utils";
import { defaultImages } from "@/constants/images";
import { fetcher } from "@/lib/fetcher";
import Link from "next/link";
import { FormErrors } from "./form-errors";

type FormPickerProps = {
  id: string;
  errors?: Record<string, string[] | undefined>;
};

const fetchUnsplashImages = async () => {
  try {
    const images = await fetcher("/api/unsplash");

    if (Array.isArray(images) && images.length) {
      return images as Array<Record<string, any>>;
    }

    console.error("Failed to get images from Unsplash.");
  } catch (error) {
    console.error(error);
  }

  return defaultImages;
};

export const FormPicker = ({ id, errors }: FormPickerProps) => {
  const { pending } = useFormStatus();
  const [selectedImageId, setSelectedImageId] = useState(null);

  const { data: images = [], isLoading } = useQuery({
    queryKey: ["unsplash-board-images"],
    queryFn: fetchUnsplashImages,
    staleTime: Infinity,
    gcTime: Infinity,
  });
  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <Loader2 className="h-6 w-6 text-sky-700 animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map((image) => (
          <div
            key={image.id}
            className={cn(
              "relative aspect-video group hover:opacity-75 transition bg-muted",
              pending && "opcity-50 hover:opacity-50 cursor-auto"
            )}
            onClick={() => {
              if (pending) return;
              setSelectedImageId(image.id);
            }}
          >
            <input
              aria-hidden
              type="radio"
              id={id}
              name={id}
              className="hidden"
              checked={selectedImageId === image.id}
              value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
              disabled={pending}
              aria-disabled={pending}
            />
            <Image
              src={image.urls.thumb}
              alt={`Unsplash image_${image.id}`}
              className="object-cover rounded-sm"
              fill
            />

            {selectedImageId === image.id && (
              <div className="absolute inset-y-0 h-full w-full bg-black/30 flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
            )}

            <Link
              href={image.links.html}
              target="_blank"
              className="opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate text-white hover:underline p-1 bg-black/50"
            >
              {image.user.name}
            </Link>
          </div>
        ))}
      </div>
      <FormErrors id="image" errors={errors} />
    </div>
  );
};
