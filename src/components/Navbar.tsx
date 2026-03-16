import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = ["Home", "About", "Services", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container flex items-center justify-between h-16">
        <span className="text-xl font-bold text-foreground">URR034</span>
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              {l}
            </button>
          ))}
        </div>
        <Button className="hidden md:inline-flex" onClick={() => scrollTo("Contact")}>Get Started</Button>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-4 space-y-3">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2">
              {l}
            </button>
          ))}
          <Button className="w-full" onClick={() => scrollTo("Contact")}>Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
