import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar,
  Phone,
  MapPin,
  Sparkles,
  Scissors,
  Smile,
  Wind,
  Droplets,
  Ear,
  Heart,
  Plus,
  Minus,
  Instagram,
  Star,
} from "lucide-react";

import logo from "@/assets/logo.png";
import heroPoodle from "@/assets/hero-poodle.jpg";
import howWeWork from "@/assets/how-we-work.jpg";
import pet1 from "@/assets/pet-1.jpg";
import pet2 from "@/assets/pet-2.jpg";
import pet3 from "@/assets/pet-3.jpg";
import pet4 from "@/assets/pet-4.jpg";
import pet5 from "@/assets/pet-5.jpg";
import silkBg from "@/assets/silk-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faqs" },
];

const services = [
  { icon: Sparkles, name: "Blueberry Facial", price: "$15", desc: "A gentle cleanse designed to brighten, soothe, and refresh your pet's face, getting rid of tear stains." },
  { icon: Scissors, name: "Pawdicure Plus", price: "$20", desc: "A complete paw treatment with a nail trim, gentle filing, and a soothing paw massage for ultimate comfort." },
  { icon: Smile, name: "Teeth Brushing", price: "$10", desc: "Freshen up your pet's breath and maintain oral health with a thorough minty clean and gentle brushing." },
  { icon: Wind, name: "De-Shedding", price: "$25", desc: "Minimize loose fur and reduce shedding with a deep brush-out and specialized de-shedding tools." },
  { icon: Droplets, name: "Fur Conditioning", price: "$18", desc: "Hydrate, soften, and restore shine to your pet's coat with a nourishing deep-conditioning treatment." },
  { icon: Ear, name: "Ear Cleaning", price: "$12", desc: "Gently and thoroughly remove dirt and wax buildup to keep your pet's ears clean, fresh, and irritation-free." },
];

const transformations = [pet1, pet2, pet3, pet4, pet5];

const testimonials = [
  { text: "Max has been going to The Dog Studio for years, and they always make him feel special. He comes home smelling amazing and looking like a superstar. We wouldn't go anywhere else!", name: "Laura", role: "Max's Owner" },
  { text: "The Dog Studio is amazing! Buddy came out wagging his tail like never before. So much love and patience — thank you!", name: "Megan", role: "Buddy's Owner" },
  { text: "Milo's first grooming was perfect! The team was so sweet, and he came out looking adorable. Highly recommend The Dog Studio!", name: "Sophia", role: "Milo's Owner" },
  { text: "Daisy has arthritis, and the groomers at The Dog Studio are so gentle with her. They even take breaks to let her rest. I'm so grateful for their care.", name: "Chris", role: "Daisy's Owner" },
  { text: "Snowball looked like a fluffy cloud of perfection after her grooming. The team treated her like royalty. I'm so happy I found The Dog Studio!", name: "Daniel", role: "Snowball's Owner" },
  { text: "Whiskers is usually a nightmare at the groomer, but The Dog Studio worked miracles. He came out looking handsome and wasn't stressed at all. Thank you for making my grumpy boy so happy!", name: "Ethan", role: "Whiskers's Owner" },
];

const faqs = [
  { q: "How long does a grooming session take?", a: "Most full grooming sessions take between 1.5 to 3 hours depending on your pet's breed, coat condition, and the services selected. We never rush — your pet's comfort always comes first." },
  { q: "Do you groom cats as well as dogs?", a: "Yes! Our team is trained and experienced in handling both dogs and cats. We use gentle techniques tailored to each species." },
  { q: "What if my pet is nervous or anxious?", a: "We specialize in calm, low-stress grooming. Our team takes the time to build trust, offers frequent breaks, and uses positive reinforcement throughout." },
  { q: "Can I stay with my pet during grooming?", a: "For most pets we ask owners to wait in our lounge, as pets tend to be calmer without their owners present. For especially anxious pets, we can make exceptions." },
  { q: "How often should I groom my pet?", a: "Most breeds benefit from professional grooming every 4 to 8 weeks. We're happy to recommend a schedule based on your pet's coat type and lifestyle." },
];

function SilkBg({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 -z-10 ${className}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(245,250,242,0.15), rgba(245,250,242,0.25)), url(${silkBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}


function SectionLabel({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-medium text-ink-soft backdrop-blur">
      <Icon className="h-3.5 w-3.5 text-brand" />
      {children}
    </span>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-balance text-4xl font-bold leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
      {children}
    </h2>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="The Dog Studio" className="h-9 w-9 rounded-full object-contain" />
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              The Dog <span className="text-brand">Studio</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-ink-soft transition hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-brand-deep"
          >
            Book Appointment
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] text-ink md:text-6xl lg:text-7xl">
              Treat your pet to a luxurious{" "}
              <span className="text-brand-deep italic">grooming &amp; spa</span> experience
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Premium pet grooming, spa, and academy services tailored to pamper your furry companion with care, style, and comfort.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-brand-deep"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-secondary"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-secondary">
              <img
                src={heroPoodle}
                alt="Fluffy white poodle wearing a sage green collar"
                width={900}
                height={1100}
                className="h-[520px] w-full object-cover md:h-[600px]"
              />
              <a
                href="#"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-ink/85 text-white backdrop-blur transition hover:bg-ink"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <div className="absolute right-5 top-20 flex gap-1.5 opacity-70">
                <span className="h-2 w-2 rounded-full bg-white" />
                <span className="h-3 w-3 rounded-full bg-white" />
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-border bg-white px-4 py-2 shadow-md">
              <div className="flex -space-x-2">
                {[pet1, pet2, pet3, pet4].map((p, i) => (
                  <img key={i} src={p} alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <span className="text-xs font-semibold text-ink">+458 Happy Pets</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden py-24">
        <SilkBg />
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <SectionLabel icon={Heart}>About Us</SectionLabel>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
              <span className="text-brand-deep italic">The Dog Studio</span> pet spa &amp; academy
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              For over 12 years, we've been dedicated to making pets look fabulous and feel loved. Because to us, your pet isn't just a client — they're family.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {[
              { n: "12+", l: "Years experience" },
              { n: "456+", l: "Pampered pets" },
              { n: "100%", l: "Positive reviews" },
              { n: "1899L+", l: "Of shampoo used" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-5xl font-bold text-ink">{s.n}</div>
                <div className="mt-1 text-sm text-ink-soft">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS */}
      <section id="gallery" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel icon={Sparkles}>Transformations</SectionLabel>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
              Smiles, styles,<br />
              and <span className="text-brand-deep italic">happy tails</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Take a peek at some of our recent transformations. From fluffy pups to sleek kitties, every pet leaves looking like a star.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {transformations.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={src}
                  alt={`Pet transformation ${i + 1}`}
                  loading="lazy"
                  width={700}
                  height={800}
                  className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative overflow-hidden py-24">
        <SilkBg />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel icon={Heart}>How We Work</SectionLabel>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
              See the<br />
              <span className="text-brand-deep italic">love</span> in action
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Watch our groomers work their magic! From gentle brushing to precision cuts, every moment is filled with care and expertise. Your pet's happiness is our priority.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
            <img
              src={howWeWork}
              alt="Groomer gently caring for a happy yorkshire terrier"
              loading="lazy"
              width={1400}
              height={900}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative overflow-hidden py-24">
        <SilkBg />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel icon={Sparkles}>À la Carte Services</SectionLabel>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
              <span className="text-brand-deep italic">Customize</span> your<br />
              pet's perfect day
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Need something specific? Pick and choose from our à la carte services to create a grooming experience tailored just for your pet.
            </p>
          </div>
          <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white">
                  <s.icon className="h-5 w-5 text-brand" />
                </div>
                <div className="mt-5 flex items-center justify-center gap-2">
                  <h3 className="text-xl font-bold text-ink">{s.name}</h3>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold text-brand-deep">
                    {s.price}
                  </span>
                </div>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-brand-deep"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden py-24">
        <SilkBg />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel icon={Heart}>Testimonials</SectionLabel>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
              Some of our<br />
              <span className="text-brand-deep italic">customers love</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-border bg-white/90 p-6 shadow-sm backdrop-blur">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-ink">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-brand-soft" />
                  <div className="text-sm">
                    <div className="font-semibold text-ink">— {t.name}</div>
                    <div className="text-xs text-ink-soft">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 md:grid-cols-2">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-secondary">
              <img
                src={heroPoodle}
                alt="Poodle with sage collar"
                loading="lazy"
                width={900}
                height={1100}
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-ink/85 text-white">
                <Phone className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div>
            <SectionLabel icon={Sparkles}>FAQs</SectionLabel>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
              Frequently<br />
              asked <span className="text-brand-deep italic">questions</span>
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={i} className="rounded-2xl border border-border bg-white">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="flex items-center gap-3 text-sm font-medium text-ink">
                        {open ? <Minus className="h-4 w-4 text-brand" /> : <Plus className="h-4 w-4 text-brand" />}
                        {f.q}
                      </span>
                    </button>
                    {open && (
                      <div className="px-5 pb-5 pl-12 text-sm leading-relaxed text-ink-soft">{f.a}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden py-24">
        <SilkBg />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <SectionLabel icon={Heart}>Contact Us</SectionLabel>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink md:text-5xl lg:text-[3.4rem]">
              How to <span className="text-brand-deep italic">get in</span><br />
              touch with us
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Have a question? We're always here to help.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <iframe
                title="The Dog Studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-73.997%2C40.745%2C-73.978%2C40.758&amp;layer=mapnik"
                className="h-[320px] w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="grid content-start gap-4">
            {[
              { icon: Calendar, title: "Book online", desc: "Choose your date and book online now.", cta: "Book Now" },
              { icon: Phone, title: "Call us", desc: "Speak to us over the phone.", cta: "Call Us" },
              { icon: MapPin, title: "Visit us", desc: "Monday to Friday 8am – 5pm", cta: "Get Directions" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                  <c.icon className="h-4 w-4 text-brand" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{c.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{c.desc}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-brand-deep"
                >
                  {c.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="The Dog Studio" className="h-8 w-8 rounded-full object-contain" />
            <span className="font-display text-base font-bold text-ink">
              The Dog <span className="text-brand">Studio</span>
            </span>
          </div>
          <nav className="flex flex-wrap items-center gap-6 text-sm text-ink-soft">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-5 text-xs text-ink-soft md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} The Dog Studio Pet Spa &amp; Academy. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-ink">Privacy Policy</a>
              <a href="#" className="hover:text-ink">Salon Policies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
