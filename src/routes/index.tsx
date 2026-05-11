import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sunnyridge Dental — Trusted Family Dentistry in Germiston" },
      {
        name: "description",
        content:
          "Caring, modern family dentistry in Germiston for over 21 years. Dr S Lutchman & Associates — general, cosmetic, kids and emergency dental care.",
      },
      { property: "og:title", content: "Sunnyridge Dental — Germiston" },
      { property: "og:description", content: "Trusted family dentistry for over 21 years." },
    ],
  }),
});

export function Index() {
  return <HomePage />;
}
