import Link from "next/link";
import { ModeToggle } from "../theme-toggle-button";
import { buttonVariants } from "./button";

function Navbar() {
  return (
    <nav className="flex justify-between">
      <h1>NextActionsCRUD </h1>
      <div className="flex gap-x-2 items-center">
        <Link
          href="/new"
          className={buttonVariants({ variant: "secundary" })}
        >
          Create Task
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
