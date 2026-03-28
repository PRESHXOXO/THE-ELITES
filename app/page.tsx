import Link from 'next/link';
import Image from 'next/image';
import { hotels, properties, restaurants, shopVenues } from '@/lib/data';

const stats = [
  { value: '340+', label: 'Curated Properties' },
  { value: '62', label: 'Countries' },
  { value: '180+', label: 'Michelin Stars' },
  { value: '100%', label: 'Private & Invite-Only' },
];

const categories = [
  {
    title: 'Hotels & Resorts',
    subtitle: 'US · International · Michelin Key',
    href: '/hotels',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85',
    count: `${hotels.length} Properties`,
  },
  {
    title: 'Penthouses & Villas',
    subtitle: '5–6 Star Private Residences',
    href: '/properties',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=900&q=85',
    count: `${properties.length} Residences`,
  },
  {
    title: 'Fine Dining',
    subtitle: 'Michelin-Starred Restaurants',
    href: '/dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85',
    count: `${restaurants.length} Restaurants`,
  },
  {
    title: 'Luxury Shopping',
    subtitle: 'Flagship Boutiques · Private Ateliers',
    href: '/shopping',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=85',
    count: `${shopVenues.length} Venues`,
  },
];

const testimonials = [
  {
    quote:
      "LUXEury has redefined what concierge means to me. A Birkin allocated within 48 hours, a table at Masa that same evening. Exceptional.",
    author: 'A.V.',
    title: 'Tech Founder, Silicon Valley',
  },
  {
    quote:
      "The Singita reservation — sunsets in the Serengeti with chilled Cristal — simply cannot be replicated. LUXEury delivered perfection.",
    author: 'S.M.',
    title: 'Family Office, Geneva',
  },
  {
    quote:
      "From Necker Island for my daughter's birthday to Sublimotion the next night in Ibiza — both in one week. Only LUXEury.",
    author: 'R.T.',
    title: 'Private Equity, London',
  },
];

export default function HomePage() {
  return (
    <div className="bg-obsidian">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1800&q=90"
            alt="LUXEury — Ultra Luxury"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/30 to-obsidian" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="h-px w-10 bg-gold-400/60" />
            <span className="badge-gold">By Invitation Only</span>
            <span className="h-px w-10 bg-gold-400/60" />
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-6">
            <span className="gold-shimmer">LUX</span>
            <span className="italic gold-shimmer">E</span>
            <span className="gold-shimmer">ury</span>
          </h1>

          <p className="font-cormorant text-xl md:text-3xl text-ivory/70 italic leading-relaxed mb-4 max-w-3xl mx-auto">
            The world's most exclusive private platform — crafted for those who demand
            nothing less than the extraordinary.
          </p>

          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-400/60 mb-12">
            Ultra High Net Worth · Private Members Only
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/membership" className="btn-gold px-10 py-4 rounded-sm text-xs">
              Request Your Invitation
            </Link>
            <Link href="/hotels" className="btn-outline-gold px-10 py-4 rounded-sm">
              Explore Collection
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-inter text-[0.6rem] tracking-[0.3em] uppercase text-ivory">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-gold-700/20 bg-onyx/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl gold-text font-semibold mb-1">
                  {s.value}
                </div>
                <div className="font-inter text-[0.65rem] tracking-[0.2em] uppercase text-ivory/40">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="badge-gold inline-block mb-6">The LUXEury Standard</div>
        <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
          Access Reserved for the{' '}
          <span className="gold-text italic">Ultra Elite</span>
        </h2>
        <div className="divider-gold mb-8" />
        <p className="font-cormorant text-xl text-ivory/60 leading-relaxed italic">
          LUXEury curates the world's finest hotels, penthouses, villas, restaurants, and boutiques
          for ultra high net worth individuals who require more than luxury — they require exclusivity,
          privacy, and perfection. Every property, every table, every acquisition is personally verified.
        </p>
      </section>

      {/* ── CATEGORY GRID ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="text-center mb-14">
          <span className="badge-gold">Curated Collections</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            The <span className="gold-text">World's Finest</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="group">
              <div className="relative overflow-hidden rounded-sm aspect-[4/3] luxury-card">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />

                {/* Count badge */}
                <div className="absolute top-5 right-5">
                  <span className="badge-gold">{cat.count}</span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400 mb-2">
                    {cat.subtitle}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-ivory mb-3">
                    {cat.title}
                  </h3>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-inter text-xs tracking-[0.2em] uppercase text-gold-400">
                      Explore
                    </span>
                    <span className="text-gold-400">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED HOTEL ── */}
      <section className="bg-onyx/40 border-y border-gold-700/10 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=85"
                alt="Burj Al Arab"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="badge-gold">Featured Property</span>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-inter text-[0.6rem] tracking-[0.3em] uppercase text-gold-400 mb-3">
                  Featured · Dubai, UAE
                </p>
                <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">
                  Burj Al Arab<br />
                  <span className="gold-text italic">Jumeirah</span>
                </h2>
                <div className="divider-gold" style={{ margin: '0 0 1.5rem' }} />
              </div>
              <p className="font-cormorant text-lg text-ivory/60 italic leading-relaxed">
                Standing alone on its own private island, the sail-shaped Burj Al Arab is the world's
                most iconic hotel. Six stars. Two-hundred-and-two duplex suites. A gold-leaf interior
                that redefines opulence. Private butler. Private helicopter transfers.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { label: 'Stars', value: '6★' },
                  { label: 'Suites', value: '202' },
                  { label: 'From', value: '$4,500' },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 border border-gold-700/20 rounded-sm">
                    <div className="font-display text-xl gold-text">{s.value}</div>
                    <div className="font-inter text-[0.6rem] tracking-widest uppercase text-ivory/30 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/hotels" className="btn-outline-gold inline-block px-8 py-3 rounded-sm mt-2">
                View All Hotels
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge-gold">Member Experiences</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Voices of the <span className="gold-text">Elite</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-gold-700/20 rounded-sm p-8 bg-onyx/30 flex flex-col gap-6"
            >
              <div className="text-gold-400 text-3xl font-serif leading-none">&ldquo;</div>
              <p className="font-cormorant text-lg text-ivory/70 italic leading-relaxed flex-1">
                {t.quote}
              </p>
              <div>
                <div className="h-px bg-gold-700/30 mb-4" />
                <p className="font-inter text-xs text-gold-400 tracking-widest uppercase">
                  {t.author}
                </p>
                <p className="font-inter text-[0.65rem] text-ivory/30 tracking-wide mt-1">
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MEMBERSHIP CTA ── */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=1600&q=80"
            alt="LUXEury Membership"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="badge-gold">Exclusive Membership</span>
          <h2 className="font-display text-5xl md:text-6xl mt-6 mb-6 leading-tight">
            Your Invitation<br />
            <span className="gold-text italic">Awaits</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="font-cormorant text-xl text-ivory/60 italic mb-10">
            LUXEury is not purchased — it is granted. Submit your request and our membership
            committee will reach out within 72 hours.
          </p>
          <Link href="/membership" className="btn-gold px-12 py-5 rounded-sm text-xs inline-block">
            Request Your Invitation
          </Link>
        </div>
      </section>
    </div>
  );
}
