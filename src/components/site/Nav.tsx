import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-icon.svg";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#smiles", label: "Smiles" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled || open ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-3xl md:rounded-full px-4 sm:px-5 py-3 transition-all duration-500 ${
            scrolled || open ? "glass shadow-soft" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 min-w-0" onClick={() => setOpen(false)}>
            <img src={logo} alt="Sunnyridge Dental" className="h-9 sm:h-10 w-auto shrink-0" />
            <span className="flex flex-col leading-tight min-w-0">
              <span className="font-display text-sm sm:text-base text-foreground truncate">
                Sunnyridge Dental
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-muted-foreground truncate">
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

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition"
            >
              Book Appointment
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-card/70 text-foreground hover:bg-card transition shrink-0"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[480px] opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass shadow-soft rounded-3xl p-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-sm text-foreground/85 hover:bg-accent/60 transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
