import { Button, Link } from "@learnix/ui";
import { LogIn, UserPlus } from "lucide-react";

export function GuestMenu() {
  return (
    <>
      <Button
        variant="ghost"
        className="rounded-full px-5 text-muted-foreground hover:text-foreground transition-all flex items-center space-x-2"
        asChild
      >
        <Link href="/login">
          <LogIn className="h-4 w-4 mr-1" />
          Log in
        </Link>
      </Button>
      <Button
        className="rounded-full px-6 shadow-md transition-all hover:shadow-lg flex items-center space-x-2"
        asChild
      >
        <Link href="/register">
          <UserPlus className="h-4 w-4 mr-1" />
          Sign up
        </Link>
      </Button>
    </>
  );
}
