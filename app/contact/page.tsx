import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Free Mold Inspection St. Louis | Contact STL Mold Removal",
  description:
    "Request your free mold inspection in St. Louis, MO. We respond within 1 hour. Same-day inspections available. Call (314) 779-0000 or fill out the form.",
  alternates: { canonical: "https://stlmoldremoval.com/contact" },
};

export default function ContactPage() {
  return <ContactForm />;
}
