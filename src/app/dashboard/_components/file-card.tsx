import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatRelative } from "date-fns";
import { Doc } from "../../../../convex/_generated/dataModel";
import { FileTextIcon, GanttChartIcon, ImageIcon } from "lucide-react";
import { ReactNode } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Image from "next/image";
import { FileCardActions } from "./file-actions";

export function FileCard({
  file,
}: {
  file: Doc<"files"> & { isFavorited: boolean; url: string | null };
}) {
  const userProfile = useQuery(api.users.getUserProfile, {
    userId: file.userId,
  });

  const typeIcons = {
    image: <ImageIcon className="text-gray-500" />,
    pdf: <FileTextIcon className="text-gray-500" />,
    csv: <GanttChartIcon className="text-gray-500" />,
  } as Record<Doc<"files">["type"], ReactNode>;

  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden">
      <CardHeader className="relative p-4 border-b border-gray-200">
        <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-800">
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-100">
            {typeIcons[file.type]}
          </div>{" "}
          {file.name}
        </CardTitle>
        <div className="absolute top-4 right-4">
          <FileCardActions isFavorited={file.isFavorited} file={file} />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex justify-center items-center">
        {file.type === "image" && file.url && (
          <Image alt={file.name} width={200} height={100} src={file.url} className="object-cover rounded-lg" />
        )}
        {file.type === "csv" && <GanttChartIcon className="w-16 h-16 text-gray-500" />}
        {file.type === "pdf" && <FileTextIcon className="w-16 h-16 text-gray-500" />}
      </CardContent>
      <CardFooter className="flex justify-between p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Avatar className="w-8 h-8 border border-gray-300">
            <AvatarImage src={userProfile?.image} className="object-cover" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {userProfile?.name}
        </div>
        <div className="text-sm text-gray-500">
          Uploaded on {formatRelative(new Date(file._creationTime), new Date())}
        </div>
      </CardFooter>
    </Card>
  );
}
