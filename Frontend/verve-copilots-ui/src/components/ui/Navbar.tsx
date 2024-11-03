import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Button } from "./button"
  import { Menu } from "lucide-react"
  
  export function Navbar() {
    return (
      <div className="flex justify-between items-center w-full px-4 py-2">
        <div className="brand text-xl font-bold">
          Verve
        </div>
        <div className="hidden md:block">
          <nav className="flex flex-row space-x-10">
            <a href="#" className="text-md hover:underline text-black hover:text-black">Home</a>
            <a href="#" className="text-md hover:underline text-black hover:text-black">Products</a>
            <a href="#" className="text-md hover:underline text-black hover:text-black">About us</a>
            <a href="#" className="text-md hover:underline text-black hover:text-black">Contact</a>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" aria-label="Open navigation menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm hover:underline text-black hover:text-black">Home</a>
              <a href="#" className="text-sm hover:underline text-black hover:text-black">Products</a>
              <a href="#" className="text-sm hover:underline text-black hover:text-black">About us</a>
              <a href="#" className="text-sm hover:underline text-black hover:text-black">Contact</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    )
  }