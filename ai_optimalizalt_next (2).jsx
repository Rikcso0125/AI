/* Teljes oldal egyben – AI startup stílus, árazás frissítve, fekete szövegű űrlap fehér háttéren */

'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Rocket,
  Zap,
  LineChart,
  Code2,
  Wrench,
  Github,
  Server,
  Search,
  Shield,
  Star,
  PhoneCall,
  Mail,
  Timer,
  Globe,
  Database,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BRAND = {
  name: "AI Weboldal Studio",
  tagline: "AI-optimalizált weboldalak Next.js alapon",
  phone: "+36 70 381 9284 (Németh Richárd)",
  email: "info@aiweboldal.studio",
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbonpaj";

const NAV = [
  { label: "Miért mi?", href: "#why" },
  { label: "Referencia", href: "#work" },
  { label: "Árak", href: "#pricing" },
  { label: "Kapcsolat", href: "#contact" },
];

export default function AgencyLandingHU() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-50 selection:bg-yellow-300/20 selection:text-white overflow-x-clip">
      <TechGrid />
      <GlowOrbs />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-yellow-300/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-white no-underline">
            <div className="p-2 rounded-2xl bg-yellow-300/10 shadow-[0_0_40px_-12px_rgba(250,204,21,0.5)]">
              <Rocket className="h-5 w-5 text-yellow-300" />
            </div>
            <span className="font-semibold tracking-tight">{BRAND.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="group relative text-white/80 hover:text-white transition">
                <span>{n.label}</span>
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="bg-yellow-300 text-black hover:bg-yellow-200 shadow-[0_8px_40px_-12px_rgba(250,204,21,0.6)] hover:translate-y-0.5 transition">
              <a href="#contact" className="no-underline">Ingyenes konzultáció</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <HeroGlow />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                AI-optimalizált, <span className="text-yellow-300">villámgyors</span> weboldalak
                <br className="hidden md:block" /> Next.js + Vercel + GitHub CI/CD
              </motion.h1>
              <p className="mt-5 text-white/80 max-w-xl">
                Olyan weboldalakat készítünk, amelyeket az új AI-keresők és a Google is szeret: tiszta kód, kiváló Core Web Vitals, strukturált adatok és beépített SEO.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-yellow-300 text-black hover:bg-yellow-200 shadow-[0_10px_50px_-12px_rgba(250,204,21,0.7)] hover:translate-y-0.5 transition">
                  <a href="#contact" className="no-underline">Kérek ajánlatot</a>
                </Button>
                <Button asChild size="lg" className="bg-yellow-300 text-black hover:bg-yellow-200 shadow-[0_10px_50px_-12px_rgba(250,204,21,0.7)] hover:translate-y-0.5 transition">
                  <a href="#why" className="no-underline">Miért minket válassz</a>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-xs">
                <Badge>Core Web Vitals 90+%</Badge>
                <Badge>AI-kereső barát felépítés</Badge>
                <Badge>GitHub → Vercel auto-deploy</Badge>
              </div>
            </div>
            <div><ShowcaseCard /></div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={Code2} title="Next.js 15 + App Router">Modern, SEO-barát architektúra, SSR/SSG/ISR – gyors betöltés, jobb helyezések és stabil alap.</Feature>
          <Feature icon={LineChart} title="AI- és SEO-optimalizálás">Strukturált adatok, AI-kivonatokra kész tartalom, logikus információ-architektúra.</Feature>
          <Feature icon={Server} title="Vercel hostolás">Globális edge hálózat, image-optimalizálás és hibátlan CI/CD – minden push után friss site.</Feature>
          <Feature icon={Shield} title="Biztonság & minőség">Auditált dependencyk, 0-downtime deploy, monitorozás és biztonsági alapbeállítások.</Feature>
          <Feature icon={Wrench} title="Karbantartás egyszerűen">Gyors módosítások, havi support csomagok – nincs felesleges bonyolítás.</Feature>
          <Feature icon={Cpu} title="AI-ready komponensek">Könnyen bővíthető AI-funkciókkal – alapból erre készítjük.</Feature>
        </div>
      </section>

      {/* WORK / REFERENCIA */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-yellow-300">Referenciák</h2>
        <p className="text-white/80 mt-2">Néhány friss projektünk (kattints, és új lapon nyílik meg).</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ReferenceTile href="https://www.palyazatiszoftver.hu" title="Pályázati Szoftver" subtitle="Next.js + Vercel" />
          <ReferenceTile href="https://www.palyazatiszoftver.hu" title="— Hamarosan —" subtitle="Screenshot helye" />
          <ReferenceTile href="https://www.palyazatiszoftver.hu" title="— Hamarosan —" subtitle="Screenshot helye" />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-yellow-300">Árak – egyszerű csomagok</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <PriceCard title="Starter" subtitle="1 oldalas landing / linktree helyett" priceFrom="300 000 Ft+ÁFA"
            points={["Next.js single-page", "Hero + szolgáltatás + kapcsolat", "Alap SEO és analitika", "1 kör módosítás"]} />
          <PriceCard highlight title="Business" subtitle="Teljes bemutatkozó oldal (5–6 aloldal)" priceFrom="510 000 Ft+ÁFA"
            points={["Stratégia + IA workshop", "Blog/Case modul", "SEO-s séma + OpenGraph", "GitHub → Vercel CI/CD"]} />
          <PriceCard title="Scale" subtitle="Egyedi komponensek, AI-ready" priceFrom="960 000 Ft+ÁFA"
            points={["Egyedi UI komponensek", "Integrációk (CRM, űrlapok)", "AI-modulok előkészítve", "Prioritásos support"]} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative bg-black/60 border-y border-yellow-300/10">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-yellow-300">Kezdjük el az ingyenes konzultációt</h2>
              <ul className="mt-6 space-y-3 text-white/80">
                <li className="flex items-center gap-3"><PhoneCall className="h-4 w-4 text-yellow-300" /> {BRAND.phone}</li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-yellow-300" /> {BRAND.email}</li>
              </ul>
            </div>
            <Card className="border-yellow-300/10 bg-black/40 backdrop-blur-xl">
              <CardHeader><CardTitle className="text-white">Projekt űrlap</CardTitle></CardHeader>
              <CardContent>
                {sent ? (
                  <div className="p-6 rounded-xl bg-yellow-300/10 text-white">Köszönjük! Hamarosan jelentkezünk.</div>
                ) : (
                  <form className="space-y-4" onSubmit={async (e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const payload = Object.fromEntries(data.entries());
                    const res = await fetch(FORMSPREE_ENDPOINT, {
                      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload)
                    });
                    if (res.ok) setSent(true);
                  }}>
                    <Input id="name" name="name" required placeholder="Név" className="text-black bg-white placeholder:text-black/60" />
                    <Input id="email" name="email" required type="email" placeholder="E-mail cím" className="text-black bg-white placeholder:text-black/60" />
                    <Input id="phone" name="phone" placeholder="Telefonszám" className="text-black bg-white placeholder:text-black/60" />
                    <Input id="company" name="company" placeholder="Cégnév (opcionális)" className="text-black bg-white placeholder:text-black/60" />
                    <Input id="website" name="website" placeholder="Weboldal / domain (ha van)" className="text-black bg-white placeholder:text-black/60" />
                    <Textarea id="message" name="message" required rows={5} placeholder="Üzenet / projekt leírás" className="text-black bg-white placeholder:text-black/60" />
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span className="flex items-center gap-2"><Shield className="h-3 w-3 text-yellow-300" /> Adatokat bizalmasan kezeljük</span>
                      <span className="flex items-center gap-2"><Timer className="h-3 w-3 text-yellow-300" /> Válasz 24 órán belül</span>
                    </div>
                    <Button type="submit" className="w-full bg-yellow-300 text-black hover:bg-yellow-200 hover:translate-y-0.5 transition">Küldés</Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Components
function TechGrid() {
  return <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
  </div>;
}

function GlowOrbs() {
  return (
    <div aria-hidden>
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-yellow-200/10 blur-3xl" />
    </div>
  );
}

function HeroGlow() {
  return (
    <motion.div aria-hidden initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
      className="pointer-events-none absolute inset-x-0 -top-24 h-72">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-full rounded-full bg-gradient-to-r from-yellow-300/0 via-yellow-300/15 to-yellow-200/0 blur-2xl" />
      </div>
    </motion.div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/5 px-3 py-1 text-xs text-yellow-300 shadow-[0_0_30px_-12px_rgba(250,204,21,0.6)]">
      {children}
    </span>
  );
}

function ShowcaseCard() {
  return (
    <Card className="border-yellow-300/20 bg-gradient-to-br from-yellow-300/5 to-transparent hover:border-yellow-300/30 transition shadow-[0_8px_40px_-16px_rgba(0,0,0,0.6)]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-yellow-300">
          <Zap className="h-5 w-5" /> Mit jelent az AI-optimalizált site?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-white/80">
        <p className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-yellow-300" /> Strukturált adatok (Schema.org), AI-barát szövegstruktúra.</p>
        <p className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-yellow-300" /> Tiszta HTML, heading-hierarchia, gyors LCP/CLS/INP.</p>
        <p className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-yellow-300" /> CDN-optimalizált képek, reszponzív meta, OpenGraph/Twitter kártyák.</p>
        <p className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-yellow-300" /> GitHub → Vercel preview minden commit után.</p>
      </CardContent>
    </Card>
  );
}

function Feature({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <Card className="border-yellow-300/15 bg-black/40 hover:border-yellow-300/30 transition shadow-[0_8px_40px_-20px_rgba(250,204,21,0.3)]">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-white">
          <Icon className="h-5 w-5 text-yellow-300" /> <span className="text-yellow-300/90">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-white/80">{children}</CardContent>
    </Card>
  );
}

function PriceCard({ title, subtitle, priceFrom, points, highlight }: { title: string; subtitle: string; priceFrom: string; points: string[]; highlight?: boolean }) {
  return (
    <Card className={`border ${highlight ? "border-yellow-300/40 bg-yellow-300/5" : "border-yellow-300/15 bg-black/40"} hover:border-yellow-300/40 transition shadow-[0_8px_40px_-20px_rgba(250,204,21,0.3)]`}>
      <CardHeader>
        <CardTitle className="space-y-1">
          <div className="text-sm text-white/70">{subtitle}</div>
          <div className="text-xl font-bold text-yellow-300">{title}</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-extrabold text-white">{priceFrom}</div>
        <ul className="mt-4 space-y-2 text-sm text-white/80">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-yellow-300" /> {p}</li>
          ))}
        </ul>
        <Button asChild className="w-full mt-6 bg-yellow-300 text-black hover:bg-yellow-200 hover:translate-y-0.5 transition">
          <a href="#contact" className="no-underline">Érdekel</a>
        </Button>
      </CardContent>
    </Card>
  );
}

function ReferenceTile({ href, title, subtitle, img }: { href: string; title: string; subtitle: string; img?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block no-underline">
      <div className="relative overflow-hidden rounded-2xl border border-yellow-300/15 bg-black/40 hover:border-yellow-300/30 transition">
        <div className="aspect-[4/3] w-full bg-gradient-to-br from-yellow-300/10 to-transparent grid place-items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {img ? (
            <img src={img} alt={title} className="h-full w-full object-cover" />
          ) : (
            <span className="text-white/60 text-sm">Screenshot helye</span>
          )}
        </div>
        <div className="p-4 flex items-center justify-between">
          <div>
            <div className="font-semibold text-yellow-300">{title}</div>
            <div className="text-xs text-white/60">{subtitle}</div>
          </div>
          <span className="text-yellow-300 text-sm opacity-80 group-hover:opacity-100 transition">Megnyitás →</span>
        </div>
      </div>
    </a>
  );
}
