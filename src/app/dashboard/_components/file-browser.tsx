"use client";

import { useOrganization, useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { UploadButton } from "./upload-button";
import { FileCard } from "./file-card";
import Image from "next/image";
import { GridIcon, Loader2, RowsIcon } from "lucide-react";
import { SearchBar } from "./search-bar";
import { useState } from "react";
import { DataTable } from "./file-table";
import { columns } from "./columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Doc } from "../../../../convex/_generated/dataModel";
import { Label } from "@/components/ui/label";

// SkeletonLoader bileşeni burada
const SkeletonLoader = ({ type }: { type: 'card' | 'table' }) => {
  return (
    <div className={`flex flex-col gap-6 items-center mt-24 ${type === 'card' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : ''}`}>
      {Array.from({ length: type === 'card' ? 6 : 3 }).map((_, index) => (
        <div
          key={index}
          className={`w-full ${type === 'card' ? 'h-40' : 'h-40'} bg-gray-300 animate-pulse rounded-lg`}
        ></div>
      ))}
    </div>
  );
};

function Placeholder() {
  return (
    <div className="flex flex-col gap-6 items-center mt-24">
      <Image
        alt="No files"
        width={250}
        height={250}
        src="/empty.svg"
        className="opacity-60"
      />
      <div className="text-xl font-medium text-gray-600">No files found</div>
      <UploadButton />
    </div>
  );
}

export function FileBrowser({
  title,
  favoritesOnly,
  deletedOnly,
}: {
  title: string;
  favoritesOnly?: boolean;
  deletedOnly?: boolean;
}) {
  const organization = useOrganization();
  const user = useUser();
  const [query, setQuery] = useState("");
  const [type, setType] = useState<Doc<"files">["type"] | "all">("all");

  let orgId: string | undefined = undefined;
  if (organization.isLoaded && user.isLoaded) {
    orgId = organization.organization?.id ?? user.user?.id;
  }

  const favorites = useQuery(
    api.files.getAllFavorites,
    orgId ? { orgId } : "skip"
  );

  const files = useQuery(
    api.files.getFiles,
    orgId
      ? {
          orgId,
          type: type === "all" ? undefined : type,
          query,
          favorites: favoritesOnly,
          deletedOnly,
        }
      : "skip"
  );
  const isLoading = files === undefined;

  const modifiedFiles =
    files?.map((file) => ({
      ...file,
      isFavorited: (favorites ?? []).some(
        (favorite) => favorite.fileId === file._id
      ),
      url: file.url ?? null, // Add url field
    })) ?? [];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">{title}</h1>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <SearchBar query={query} setQuery={setQuery} />
          <UploadButton />
        </div>
      </div>

      <Tabs defaultValue="grid" className="bg-white p-6 rounded-lg shadow-lg">
        <TabsList className="flex items-center mb-4 border-b border-gray-200">
          <TabsTrigger
            value="grid"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
          >
            <GridIcon className="w-5 h-5" />
            Grid
          </TabsTrigger>
          <TabsTrigger
            value="table"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
          >
            <RowsIcon className="w-5 h-5" />
            Table
          </TabsTrigger>
        </TabsList>

        <div className="flex items-center gap-4 mb-4">
          <Label htmlFor="type-select" className="text-gray-700">
            Type Filter
          </Label>
          <Select
            value={type}
            onValueChange={(newType) => {
              setType(newType as any);
            }}
          >
            <SelectTrigger id="type-select" className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="image">Image</SelectItem>
              <SelectItem value="csv">CSV</SelectItem>
              <SelectItem value="pdf">PDF</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isLoading && (
          <SkeletonLoader type={type === "all" ? "card" : "table"} />
        )}

        <TabsContent value="grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modifiedFiles.length > 0 ? (
            modifiedFiles.map((file) => <FileCard key={file._id} file={file} />)
          ) : (
            !isLoading && <Placeholder />
          )}
        </TabsContent>

        <TabsContent value="table">
          {isLoading ? (
            <SkeletonLoader type="table" />
          ) : (
            <DataTable columns={columns} data={modifiedFiles} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
