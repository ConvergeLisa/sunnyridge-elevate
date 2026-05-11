import { useEffect, useState } from "react";
import logo from "@/assets/logo-transparent.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#smiles", label: "Smiles" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logo} alt="Sunnyridge Dental" className="h-10 w-auto" />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-base text-foreground">Sunnyridge Dental</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Dr S Lutchman & Associates
              </span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/75 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
