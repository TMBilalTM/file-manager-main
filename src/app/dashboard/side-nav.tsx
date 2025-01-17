"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideNav() {
  const pathname = usePathname();

  return (
    <div className="w-full md:w-48 flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
      <Link href="/dashboard/files">
        <Button
          variant={"link"}
          className={clsx("flex gap-3 items-center text-gray-700 hover:text-blue-600 transition-colors", {
            "text-blue-600 font-semibold": pathname.includes("/dashboard/files"),
          })}
        >
          <FileIcon className="w-5 h-5" />
          <span className="hidden md:block">All Files</span>
        </Button>
      </Link>

      <Link href="/dashboard/favorites">
        <Button
          variant={"link"}
          className={clsx("flex gap-3 items-center text-gray-700 hover:text-blue-600 transition-colors", {
            "text-blue-600 font-semibold": pathname.includes("/dashboard/favorites"),
          })}
        >
          <StarIcon className="w-5 h-5" />
          <span className="hidden md:block">Favorites</span>
        </Button>
      </Link>

      <Link href="/dashboard/trash">
        <Button
          variant={"link"}
          className={clsx("flex gap-3 items-center text-gray-700 hover:text-blue-600 transition-colors", {
            "text-blue-600 font-semibold": pathname.includes("/dashboard/trash"),
          })}
        >
          <TrashIcon className="w-5 h-5" />
          <span className="hidden md:block">Trash</span>
        </Button>
      </Link>
    </div>
  );
}
