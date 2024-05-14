import Link from "next/link";
import { ModeToggle } from "../theme-toggle-button";
import { buttonVariants } from "./button";

function Navbar() {
  return (
    <nav className="flex justify-between">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">NextActionsCRUD </h1>
      <div className="flex gap-x-2 items-center py-5">
        <Link
          href="/new"
          className={buttonVariants({ variant: "secondary" })}
        >
          Create Task
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
