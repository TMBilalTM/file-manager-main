import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="relative z-10 border-b py-4 bg-gray-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex gap-2 items-center text-xl text-black">
          <Image src="/logo.png" width="50" height="50" alt="file drive logo" className="hidden md:block" />
          <span className="hidden md:inline">FileBox</span>
        </Link>

        <div className="flex items-center gap-4">
          <SignedIn>
            <Button variant={"outline"} className="">
              <Link href="/dashboard/files">Your Files</Link>
            </Button>
          </SignedIn>

          <div className="flex items-center gap-2">
            <OrganizationSwitcher />
            <UserButton />
            <SignedOut>
              <SignInButton>
                <Button className="hidden md:inline">Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
}
