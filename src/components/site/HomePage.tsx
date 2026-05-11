import {
  Star,
  Sparkles,
  Shield,
  Baby,
  Stethoscope,
  Crown,
  Smile,
  Syringe,
  Siren,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Quote,
  ArrowRight,
  Instagram,
  Facebook,
} from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import smile1 from "@/assets/smile-1.jpg";
import smile2 from "@/assets/smile-2.jpg";
import smile3 from "@/assets/smile-3.jpg";
import smile4 from "@/assets/smile-4.jpg";
import logo from "@/assets/logo-icon.svg";
import svcGeneral from "@/assets/svc-general.jpg";
import svcCosmetic from "@/assets/svc-cosmetic.jpg";
import svcWhitening from "@/assets/svc-whitening.jpg";
import svcCrowns from "@/assets/svc-crowns.jpg";
import svcKids from "@/assets/svc-kids.jpg";
import svcDentures from "@/assets/svc-dentures.jpg";
import svcEmergency from "@/assets/svc-emergency.jpg";
import { Nav } from "@/components/site/Nav";
import { StickyMobileBar } from "@/components/site/StickyMobileBar";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    desc: "Comprehensive check-ups, cleanings and preventative care for the whole family.",
    image: svcGeneral,
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "Subtle, natural-looking enhancements that bring out your best smile.",
    image: svcCosmetic,
  },
  {
    icon: Smile,
    title: "Teeth Whitening",
    desc: "Safe, professional whitening for a brighter, more confident smile.",
    image: svcWhitening,
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    desc: "Crafted on-site in our dental lab for a perfect, lasting fit.",
    image: svcCrowns,
  },
  {
    icon: Baby,
    title: "Kids Dentistry",
    desc: "Gentle, fun and reassuring visits — building healthy habits for life.",
    image: svcKids,
  },
  {
    icon: Syringe,
    title: "Dentures",
    desc: "Custom-made, comfortable dentures designed in our own lab.",
    image: svcDentures,
  },
  {
    icon: Siren,
    title: "Emergency Care",
    desc: "Same-day appointments when you need us most. We're here to help.",
    image: svcEmergency,
  },
];

const trust = [
  { icon: Star, label: "166+ Google Reviews", sub: "Loved by our community" },
  { icon: Shield, label: "Most Medical Aids", sub: "Accepted & processed" },
  { icon: Crown, label: "Dental Lab On-Site", sub: "Faster, finer results" },
  { icon: Baby, label: "Family Friendly", sub: "Gentle care for all ages" },
  { icon: Siren, label: "Emergency Visits", sub: "Same-day availability" },
];

const testimonials = [
  {
    name: "Nadia M.",
    text: "I've been bringing my kids here for years. The team is genuinely warm and the care is exceptional. My children actually look forward to their visits.",
    role: "Patient since 2018",
  },
  {
    name: "Pieter v.d. Berg",
    text: "Dr Lutchman and his team handled my crown with incredible precision. You can feel the experience and care the moment you walk in.",
    role: "Crown & Bridge patient",
  },
  {
    name: "Thandi K.",
    text: "Honestly the most calming dental experience I've ever had. Modern, clean, and they take the time to explain everything.",
    role: "Cosmetic patient",
  },
];

export function HomePage() {
  return (
    <div id="top" className="overflow-x-hidden bg-background text-foreground">
      <Nav />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(60% 50% at 80% 0%, oklch(0.92 0.04 65 / 0.7), transparent 70%), radial-gradient(50% 40% at 0% 100%, oklch(0.9 0.05 55 / 0.55), transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-12 md:gap-12">
          <div className="animate-fade-up md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Caring for Germiston smiles since 2003
            </div>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] text-balance text-foreground sm:text-5xl md:text-[4.2rem]">
              Trusted family dentistry in <em className="not-italic text-primary">Germiston</em> for over 21 years.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Modern, gentle dental care from a team that knows your name — and your kids' names too. From check-ups to cosmetic work, we make every visit feel like home.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90 hover:shadow-elegant"
              >
                <Calendar className="h-4 w-4" /> Book Appointment
              </a>
              <a
                href="https://wa.me/27814561234"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition hover:border-primary/40"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[smile1, smile4, smile2].map((s, i) => (
                  <img
                    key={i}
                    src={s}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">166+</span> Google reviews
                </span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/60 to-cream blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
                <img
                  src={heroFamily}
                  alt="Smiling family"
                  width={1536}
                  height={1280}
                  className="h-[460px] w-full object-cover md:h-[560px]"
                />
              </div>
              <div className="glass absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl p-4 shadow-soft sm:flex">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/20 text-gold-foreground">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">Most medical aids</div>
                  <div className="text-xs text-muted-foreground">Accepted & processed</div>
                </div>
              </div>
              <div className="glass absolute -top-5 -right-5 hidden rounded-2xl px-4 py-3 shadow-soft sm:block">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Established</div>
                <div className="font-display text-2xl text-primary">2003</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-cream/50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {trust.map((t) => (
              <div key={t.label} className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-primary">
                  <t.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm leading-tight font-medium">{t.label}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-gold-foreground/70">Our care</div>
            <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">
              Thoughtful dentistry, every step of the way.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From your first cleaning to a complete smile transformation — everything we do is designed around your comfort.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={800}
                    height={640}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-2xl bg-card/90 text-primary shadow-soft backdrop-blur">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm text-primary opacity-0 transition group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-cream/40 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-12">
          <div className="relative md:col-span-5">
            <div className="overflow-hidden rounded-[2rem] shadow-elegant">
              <img
                src={clinicInterior}
                alt="Sunnyridge Dental practice interior"
                width={1280}
                height={1280}
                loading="lazy"
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 right-6 rounded-2xl px-5 py-4 shadow-soft">
              <div className="font-display text-3xl text-primary">21+ yrs</div>
              <div className="text-xs text-muted-foreground">Serving Germiston</div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.2em] text-gold-foreground/70">About the practice</div>
            <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">
              A family practice built on patience, precision and a personal touch.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              For over two decades, Dr S Lutchman & Associates have been a quiet constant in the Germiston community — a place where parents bring their children, and those children come back as adults with their own families.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We take time. We listen. And with our on-site dental lab, we craft the kind of work that's normally reserved for boutique clinics — without the boutique pretence.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Modern, gentle techniques",
                "On-site dental laboratory",
                "Most medical aids accepted",
                "Caring, multilingual team",
              ].map((p) => (
                <div key={p} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="smiles" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-foreground/70">Smile gallery</div>
              <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">
                Real smiles. Real Germiston families.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Every smile tells a story. Here are a few from our community — patients we've watched grow up, and grown-ups we've helped feel new.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[smile1, smile2, smile3, smile4].map((s, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-3xl ${i % 2 ? "md:translate-y-8" : ""}`}
              >
                <img
                  src={s}
                  alt="Patient smile"
                  width={768}
                  height={960}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold">From our patients</div>
              <h2 className="mt-3 max-w-2xl font-display text-4xl text-balance md:text-5xl">
                Kindness you can feel. Results you can see.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm opacity-80">4.9 · 166+ Google reviews</span>
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-7 backdrop-blur"
              >
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-4 text-base leading-relaxed opacity-95">&quot;{t.text}&quot;</blockquote>
                <figcaption className="mt-6 border-t border-primary-foreground/10 pt-5">
                  <div className="font-medium">{t.name}</div>
                  <div className="mt-0.5 text-xs opacity-70">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-gold-foreground/70">Visit us</div>
            <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">We'd love to meet you.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pop in, give us a call, or message us on WhatsApp — whichever feels easiest.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+27114541234"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition hover:border-primary/40"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Call</div>
                  <div className="font-medium">+27 11 454 1234</div>
                </div>
              </a>
              <a
                href="https://wa.me/27814561234"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition hover:border-primary/40"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366]/10 text-[#1d8a4d]">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="font-medium">+27 81 456 1234</div>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=61+Pitts+Ave,+Sunnyridge,+Germiston,+1420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition hover:border-primary/40"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Find us</div>
                  <div className="font-medium">61 Pitts Ave, Sunnyridge, Germiston, 1420</div>
                </div>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/sunnyridge_dentist/"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:bg-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/DrSLutchman"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:bg-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                aria-label="TikTok"
                href="https://www.tiktok.com/@sunnyridge.dental"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-sm font-semibold transition hover:bg-accent"
              >
                t
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="h-[460px] overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Sunnyridge Dental location"
                src="https://www.google.com/maps?q=61+Pitts+Ave,+Sunnyridge,+Germiston,+1420&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-cream/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-10">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Sunnyridge Dental" className="h-10 w-auto" />
            <div className="leading-tight">
              <div className="text-sm font-display">Sunnyridge Dental</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Dr S Lutchman & Associates
              </div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sunnyridge Dental. Caring for Germiston since 2003.
          </div>
        </div>
      </footer>

      <StickyMobileBar />
      <div className="h-20 md:hidden" />
    </div>
  );
}