import { Phone, MessageCircle, Calendar } from "lucide-react";

export function StickyMobileBar() {
  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-40">
      <div className="glass shadow-elegant rounded-2xl grid grid-cols-3 overflow-hidden">
        <a href="tel:+27114541234" className="flex flex-col items-center justify-center gap-1 py-3 text-foreground hover:bg-white/40 transition">
          <Phone className="h-4 w-4" />
          <span className="text-xs font-medium">Call</span>
        </a>
        <a href="https://wa.me/27814561234" className="flex flex-col items-center justify-center gap-1 py-3 border-x border-white/40 text-foreground hover:bg-white/40 transition">
          <MessageCircle className="h-4 w-4" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <a href="#contact" className="flex flex-col items-center justify-center gap-1 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition">
          <Calendar className="h-4 w-4" />
          <span className="text-xs font-medium">Book</span>
        </a>
      </div>
    </div>
  );
}
