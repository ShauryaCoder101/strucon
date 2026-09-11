import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArrowRight } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TbdBlock } from "@/components/shared/Tbd";

import { getPosts, getPost, postSlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return postSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({ title: post.seo.title, description: post.seo.description, path: `/blog/${post.slug}`, keywords: post.seo.keywords });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = getPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={articleSchema({ title: post.title, description: post.seo.description, path: `/blog/${post.slug}`, date: post.date, author: post.author })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }])} />

      {/* Header */}
      <section className="relative overflow-hidden bg-ink pb-14 pt-[calc(var(--nav-h)+2.5rem)] text-white">
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative max-w-3xl">
          <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.category, path: "/blog" }]} />
          <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-label text-steel-200">
            <span className="bg-accent px-2 py-0.5 text-white">{post.category}</span>
            <span>{formatDate(post.date)}</span>
            <span>· {post.readingMinutes} min read</span>
          </div>
          <h1 className="mt-4 text-display-md font-bold text-white">{post.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-white/80">{post.excerpt}</p>
          <p className="mt-6 font-mono text-xs uppercase tracking-label text-white/50">By {post.author}</p>
        </Container>
      </section>

      {/* Body */}
      <Section tone="white">
        {/* Approval notice sits above the article, on the light section background. */}
        <TbdBlock title="Draft article — pending approval" className="mx-auto mb-10 max-w-prose">
            <p>
              This article was drafted by us as seed content. The client has not reviewed or approved
              the text, and no byline has been confirmed &mdash; the author shown is a placeholder.
            </p>
            <p className="mt-3">
              Confirm the technical accuracy, approve the wording, and nominate the author (or ask us
              to remove the article) before go-live.
            </p>
        </TbdBlock>

        <MediaFrame src={undefined} alt={post.title} prompt={post.coverPrompt} className="aspect-[21/9] w-full" priority />
        <article className="mx-auto mt-12 max-w-prose">
          {post.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i} className="mt-10 font-display text-2xl font-bold text-ink">{block.text}</h2>;
            if (block.type === "ul")
              return (
                <ul key={i} className="mt-4 space-y-2">
                  {block.items.map((it) => (
                    <li key={it} className="flex gap-3 text-lg leading-relaxed text-slate">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />{it}
                    </li>
                  ))}
                </ul>
              );
            return <p key={i} className="mt-5 text-lg leading-relaxed text-slate">{block.text}</p>;
          })}
        </article>
      </Section>

      {/* More posts */}
      <Section tone="paper" eyebrow="Keep reading" title="More insights">
        <div className="grid gap-6 md:grid-cols-2">
          {more.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col border border-line bg-white p-6 transition-shadow hover:shadow-xl">
              <span className="font-mono text-[11px] uppercase tracking-label text-steel">{p.category}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-ink transition-colors group-hover:text-accent">Read <ArrowRight /></span>
            </a>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
