import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mold Removal Blog — Tips for St. Louis Homeowners",
  description:
    "Expert advice on mold identification, remediation costs, insurance claims, and choosing a certified mold removal company in St. Louis, MO.",
  alternates: { canonical: "https://stlmoldremoval.com/blog" },
};

const posts = [
  {
    slug: "black-mold-st-louis-homeowners-guide",
    title: "Black Mold in St. Louis: What Homeowners Need to Know in 2026",
    excerpt: "Black mold is the most dangerous mold type in St. Louis homes — and the most misunderstood. Here's what it actually is, how to identify it, and what to do when you find it.",
    date: "2026-04-15",
    readTime: "7 min",
    tag: "Health & Safety",
  },
  {
    slug: "diy-mold-removal-mistakes",
    title: "Why DIY Mold Removal Makes Things Worse (What to Do Instead)",
    excerpt: "Most homeowners who try to remove mold themselves spread more spores, invalidate their insurance claim, and find the same mold back within weeks. Here's why — and what actually works.",
    date: "2026-04-22",
    readTime: "6 min",
    tag: "Common Mistakes",
  },
  {
    slug: "free-mold-inspection-st-louis",
    title: "How to Get a Free Mold Inspection in St. Louis, MO",
    excerpt: "A step-by-step guide: what to look for before you call, what happens during a professional mold inspection, and how to get yours scheduled at no cost.",
    date: "2026-04-29",
    readTime: "5 min",
    tag: "How-To",
  },
  {
    slug: "local-vs-national-mold-removal-st-louis",
    title: "Local vs. National Mold Removal Companies in St. Louis: Which Is Better?",
    excerpt: "ServiceMaster, PuroClean, and Servpro all operate in St. Louis. Here's how they compare to a local certified specialist — on price, response time, and accountability.",
    date: "2026-05-06",
    readTime: "8 min",
    tag: "Comparison",
  },
  {
    slug: "best-mold-removal-companies-st-louis-2026",
    title: "5 Best Mold Removal Companies in St. Louis, MO (2026)",
    excerpt: "We reviewed the top mold remediation companies in the St. Louis metro on certifications, response time, pricing, and customer reviews. Here's the honest breakdown.",
    date: "2026-05-07",
    readTime: "10 min",
    tag: "Best Of",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#111111] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#2d8a50] text-[13px] font-semibold uppercase tracking-widest mb-3">Blog</p>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Mold Removal Tips for St. Louis Homeowners</h1>
          <p className="text-[#9c9fa5] text-[16px]">
            Expert advice on mold identification, remediation, insurance, and protecting your St. Louis home.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f5f1ec]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white border border-[#d3cec6] rounded-xl p-7 hover:shadow-md hover:border-[#1a6b3c] transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#e8f5ee] text-[#1a6b3c] text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-[#9c9fa5] text-[12px]">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span className="text-[#9c9fa5] text-[12px]">· {post.readTime} read</span>
                </div>
                <h2 className="text-[19px] font-bold text-[#111111] mb-2 group-hover:text-[#1a6b3c] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-[#626260] text-[14px] leading-relaxed">{post.excerpt}</p>
                <p className="text-[#1a6b3c] text-[13px] font-semibold mt-4">Read article →</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-[#1a6b3c] rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Ready for Your Free Mold Inspection?</h2>
            <p className="text-[#a7d9bc] text-[15px] mb-5">Same-day scheduling across greater St. Louis.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+13147790000" className="bg-white text-[#1a6b3c] font-bold px-6 py-3 rounded-lg hover:bg-[#f5f1ec] transition-colors">
                📞 (314) 779-0000
              </a>
              <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Request Online →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
