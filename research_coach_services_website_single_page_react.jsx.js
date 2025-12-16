import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ClipboardCheck, LineChart, Microscope, Sparkles, ShieldCheck, Clock, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

/**
 * Single-page marketing website for a Research Coach.
 * - Update BRAND, CONTACT, and BOOKING_URL below.
 * - Drop this file into a Next.js + shadcn/ui + Tailwind project (or any React setup that supports the imports).
 */

const BRAND = {
  name: "[Your Name] Research Coaching",
  tagline: "From idea to publication — guided, ethical, and results-driven research support.",
  shortBlurb:
    "I help students, professionals, and academics design strong studies, write winning proposals, and analyze qualitative and quantitative data with confidence.",
  accent: "Evidence. Clarity. Impact.",
};

const CONTACT = {
  email: "you@example.com",
  phone: "+264 00 000 0000",
  location: "Windhoek, Namibia (Remote worldwide)",
};

// Replace with your Calendly / TidyCal / Google Calendar appointment link
const BOOKING_URL = "https://calendly.com/your-link";

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function ResearchCoachWebsite() {
  const [serviceType, setServiceType] = useState<string>("proposal");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Inquiry: ${serviceLabel(serviceType)} | ${BRAND.name}`);
    const body = encodeURIComponent(
      `Name: ${name || ""}\nEmail: ${email || ""}\nService: ${serviceLabel(serviceType)}\n\nMessage:\n${message || ""}`
    );
    return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  }, [serviceType, name, email, message]);

  const services = useMemo(
    () => [
      {
        key: "proposal",
        icon: ClipboardCheck,
        title: "Proposal & Concept Development",
        desc: "Turn your topic into a clear, defensible study plan with a strong problem statement and methodology.",
        bullets: [
          "Topic refinement + research questions",
          "Literature mapping + gap identification",
          "Methodology design (qual/quant/mixed)",
          "Ethics-ready documentation",
        ],
      },
      {
        key: "full",
        icon: Microscope,
        title: "End-to-End Research Project Support",
        desc: "Coaching and hands-on support from proposal to final report/thesis — without compromising academic integrity.",
        bullets: [
          "Chapter-by-chapter planning",
          "Study instruments + pilot guidance",
          "Project timelines + accountability",
          "Editing for clarity and structure",
        ],
      },
      {
        key: "qual",
        icon: Sparkles,
        title: "Qualitative Data Analysis",
        desc: "Make sense of interviews, focus groups, and open-ended surveys using rigorous, transparent methods.",
        bullets: [
          "Thematic / content analysis",
          "Coding frameworks + codebook",
          "Trustworthiness strategies (e.g., triangulation)",
          "Write-up support (findings + discussion)",
        ],
      },
      {
        key: "quant",
        icon: LineChart,
        title: "Quantitative Data Analysis",
        desc: "Clean, analyze, and interpret your data using appropriate statistical techniques and clear reporting.",
        bullets: [
          "Data cleaning + screening",
          "Descriptives, inference, regression (as appropriate)",
          "Assumption checks + interpretation",
          "Tables/figures + results write-up",
        ],
      },
    ],
    []
  );

  const packages = useMemo(
    () => [
      {
        name: "Kickstart Session",
        price: "From $",
        subtitle: "60–90 min 1:1 coaching",
        highlight: false,
        features: [
          "Clarify topic, goals, and scope",
          "Action plan + next steps",
          "Templates/checklists as needed",
          "Follow-up notes",
        ],
        cta: "Book a session",
      },
      {
        name: "Proposal Builder",
        price: "From $$",
        subtitle: "Structured support over 2–4 weeks",
        highlight: true,
        features: [
          "Problem statement + objectives",
          "Literature structure + synthesis plan",
          "Methodology + sampling + instruments",
          "Ethics-ready draft + supervisor-ready polish",
        ],
        cta: "Request a quote",
      },
      {
        name: "Analysis & Results",
        price: "From $$",
        subtitle: "Qualitative or quantitative",
        highlight: false,
        features: [
          "Data cleaning/coding framework",
          "Appropriate analysis + interpretation",
          "Results section write-up",
          "Tables/figures + appendix support",
        ],
        cta: "Start analysis",
      },
    ],
    []
  );

  const trust = useMemo(
    () => [
      {
        icon: ShieldCheck,
        title: "Ethical support",
        desc: "Coaching-first approach aligned with academic integrity and your institution’s guidelines.",
      },
      {
        icon: Clock,
        title: "On-time delivery",
        desc: "Clear milestones, feedback loops, and realistic timelines.",
      },
      {
        icon: Check,
        title: "Methodology fit",
        desc: "No cookie-cutter methods — we choose what matches your question and data.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/40 text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
              <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-sm shadow-sm">
                <Badge variant="secondary" className="rounded-full">Research Coach</Badge>
                <span className="text-muted-foreground">Proposals • Projects • Data Analysis</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl font-semibold tracking-tight md:text-5xl">
                Sell your research ideas confidently —<br />
                <span className="text-muted-foreground">I’ll help you build the proof.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {BRAND.shortBlurb}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                    Book a call <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl">
                  <a href="#services">Explore services</a>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Integrity-first</span>
                <span className="hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-2"><Microscope className="h-4 w-4" /> Qual + Quant</span>
                <span className="hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-2"><ClipboardCheck className="h-4 w-4" /> Proposal-ready</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Quick quote</CardTitle>
                  <CardDescription>
                    Tell me what you need. You’ll get a response with options and a timeline.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" type="email" />
                  </div>

                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="proposal">Proposal / concept</SelectItem>
                      <SelectItem value="full">Full project support</SelectItem>
                      <SelectItem value="qual">Qualitative analysis</SelectItem>
                      <SelectItem value="quant">Quantitative analysis</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your topic, deadline, and what you already have (e.g., data collected)."
                    rows={5}
                  />

                  <div className="flex flex-wrap gap-2">
                    <Button
                      className="rounded-2xl"
                      onClick={() => {
                        setSubmitted(true);
                        window.location.href = mailtoHref;
                      }}
                    >
                      Email request
                    </Button>
                    <Button asChild variant="outline" className="rounded-2xl">
                      <a href={BOOKING_URL} target="_blank" rel="noreferrer">Schedule a call</a>
                    </Button>
                  </div>

                  {submitted && (
                    <p className="text-sm text-muted-foreground">
                      If your email client didn’t open, copy this address: <span className="font-medium">{CONTACT.email}</span>
                    </p>
                  )}
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  {BRAND.accent}
                </CardFooter>
              </Card>

              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-muted/70 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-muted/70 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-6xl px-4 pb-6 md:pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          {trust.map((t) => (
            <Card key={t.title} className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-background">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{t.title}</CardTitle>
                    <CardDescription className="text-sm">{t.desc}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Services</h2>
          <p className="text-muted-foreground">
            Choose coaching-only, hands-on support, or a hybrid — tailored to your level and your deadline.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <Card key={s.key} className="rounded-2xl shadow-sm">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-background">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                    <CardDescription>{s.desc}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Button asChild className="rounded-2xl">
                  <a href="#contact">Get started</a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl">
                  <a href={BOOKING_URL} target="_blank" rel="noreferrer">Book a call</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Packages</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Transparent starting points. Final pricing depends on scope, urgency, and whether data is already collected.
            </p>
          </div>
          <div className="hidden md:block">
            <Badge className="rounded-full" variant="secondary">Custom quotes available</Badge>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {packages.map((p) => (
            <Card
              key={p.name}
              className={cn(
                "rounded-2xl",
                p.highlight && "border-foreground/20 shadow-lg"
              )}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{p.name}</CardTitle>
                  {p.highlight && <Badge className="rounded-full">Most popular</Badge>}
                </div>
                <CardDescription>{p.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-semibold">{p.price}</div>
                  <div className="text-sm text-muted-foreground">(Set your currency + exact rates)</div>
                </div>
                <ul className="space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full rounded-2xl">
                  <a href="#contact">{p.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border bg-background p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-medium">Need something specific?</div>
              <div className="text-sm text-muted-foreground">
                Send your chapter outline, dataset size, and deadline to get an accurate quote.
              </div>
            </div>
            <Button asChild variant="outline" className="rounded-2xl">
              <a href="#contact">Request a custom quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">How it works</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Simple, professional, and built around your deadlines.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            { step: "1", title: "Discovery", desc: "You share your topic, rubric, and deadline." },
            { step: "2", title: "Scope", desc: "We agree on deliverables, timeline, and check-ins." },
            { step: "3", title: "Work & Review", desc: "Iterative drafts + feedback until aligned." },
            { step: "4", title: "Finalize", desc: "Polished submission-ready outputs." },
          ].map((x) => (
            <Card key={x.step} className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-2xl border bg-background text-sm font-semibold">
                    {x.step}
                  </div>
                  <div>
                    <CardTitle className="text-base">{x.title}</CardTitle>
                    <CardDescription className="text-sm">{x.desc}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">What I can work with</CardTitle>
              <CardDescription>Any stage — from idea to analysis to final write-up.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              {[
                "Rubrics and supervisor feedback",
                "Word documents and reference lists",
                "SPSS/Stata/R outputs or raw datasets",
                "Interview transcripts, field notes, codes",
                "Existing chapters that need restructuring",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">What you’ll get</CardTitle>
              <CardDescription>Clarity, confidence, and deliverables you can defend.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              {[
                "Clean structure and logical flow",
                "Methods that match your research questions",
                "Transparent analysis and interpretation",
                "Supervisor-ready presentation",
                "Actionable next steps at every stage",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Client outcomes</h2>
          <p className="text-muted-foreground">Replace these with your real testimonials.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Masters Student",
              quote:
                "My proposal was rejected twice. After one week of restructuring and tightening the methodology, it was approved.",
              meta: "Proposal coaching",
            },
            {
              name: "NGO Research Officer",
              quote:
                "The analysis made sense for the first time. The results section was clear, defensible, and aligned with our indicators.",
              meta: "Quantitative analysis",
            },
            {
              name: "PhD Candidate",
              quote:
                "The coding framework and theme write-up transformed my qualitative chapters — and I could explain every decision.",
              meta: "Qualitative analysis",
            },
          ].map((t) => (
            <Card key={t.name} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">{t.name}</CardTitle>
                <CardDescription>{t.meta}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">“{t.quote}”</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Quick answers about how coaching works and what’s included.
        </p>

        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you write the research for students?</AccordionTrigger>
              <AccordionContent>
                I provide coaching, structured support, and editing to improve clarity and quality. You remain the author and must be able to defend your work.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What software do you use for analysis?</AccordionTrigger>
              <AccordionContent>
                I can work with SPSS, Excel, Jamovi, R outputs, or clearly documented calculations. For qualitative work, I support manual coding and software-based coding (e.g., NVivo/ATLAS.ti) depending on what you have.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How fast can you deliver?</AccordionTrigger>
              <AccordionContent>
                Turnaround depends on scope and your deadline. After a short discovery call, I’ll propose a timeline with milestones so you always know what’s next.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can you help with supervisor feedback and revisions?</AccordionTrigger>
              <AccordionContent>
                Yes. Share the comments/rubric and I’ll help you plan revisions, respond systematically, and improve the structure and argument.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Tell me where you are in the process and what you need next. You can email, call, or book a consultation.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="flex items-center gap-3 rounded-2xl border bg-background p-4">
                <Mail className="h-5 w-5" />
                <div className="text-sm">
                  <div className="font-medium">Email</div>
                  <a className="text-muted-foreground hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border bg-background p-4">
                <Phone className="h-5 w-5" />
                <div className="text-sm">
                  <div className="font-medium">Phone / WhatsApp</div>
                  <a className="text-muted-foreground hover:underline" href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border bg-background p-4">
                <MapPin className="h-5 w-5" />
                <div className="text-sm">
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">{CONTACT.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href={BOOKING_URL} target="_blank" rel="noreferrer">Book a consultation</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <a href="#services">View services</a>
              </Button>
            </div>
          </div>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Send a message</CardTitle>
              <CardDescription>
                This form opens your email app (no backend required). If you want a real form, connect to Formspree/Resend.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
              <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" type="email" />

              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="proposal">Proposal / concept</SelectItem>
                  <SelectItem value="full">Full project support</SelectItem>
                  <SelectItem value="qual">Qualitative analysis</SelectItem>
                  <SelectItem value="quant">Quantitative analysis</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you working on? Include institution level (Honours/Masters/PhD), deadline, and what you already have."
                rows={6}
              />

              <Button
                className="w-full rounded-2xl"
                onClick={() => {
                  setSubmitted(true);
                  window.location.href = mailtoHref;
                }}
              >
                Send via email
              </Button>

              {submitted && (
                <p className="text-sm text-muted-foreground">
                  If nothing happens, email <span className="font-medium">{CONTACT.email}</span> directly.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Packages" },
    { href: "#process", label: "Process" },
    { href: "#testimonials", label: "Outcomes" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-2xl border bg-background shadow-sm">
            <Microscope className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">{BRAND.name}</div>
            <div className="text-xs text-muted-foreground">{BRAND.tagline}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden rounded-2xl sm:inline-flex">
            <a href="#contact">Get a quote</a>
          </Button>
          <Button asChild className="rounded-2xl">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">Book</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-sm font-semibold">{BRAND.name}</div>
            <div className="text-sm text-muted-foreground">
              Research coaching and analysis support — proposals, projects, qualitative and quantitative methods.
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold">Services</div>
            <div className="grid gap-1 text-sm text-muted-foreground">
              <a href="#services" className="hover:underline">Proposal writing support</a>
              <a href="#services" className="hover:underline">Full research project support</a>
              <a href="#services" className="hover:underline">Qualitative analysis</a>
              <a href="#services" className="hover:underline">Quantitative analysis</a>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold">Contact</div>
            <div className="grid gap-1 text-sm text-muted-foreground">
              <a className="hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <a className="hover:underline" href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
              <div>{CONTACT.location}</div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div>
            <span className="font-medium">Integrity note:</span> Coaching and editing support only. You remain the author.
          </div>
        </div>
      </div>
    </footer>
  );
}

function serviceLabel(key: string) {
  switch (key) {
    case "proposal":
      return "Proposal / Concept Development";
    case "full":
      return "Full Project Support";
    case "qual":
      return "Qualitative Data Analysis";
    case "quant":
      return "Quantitative Data Analysis";
    default:
      return "Research Support";
  }
}
