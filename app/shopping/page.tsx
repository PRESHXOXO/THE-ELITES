import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { shopVenues, type ShoppingCategory } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Luxury Shopping',
  description:
    'The world\'s most exclusive luxury shopping experiences — flagship boutiques, private ateliers, and premier shopping destinations. Private access for LUXEury members.',
};

const categoryOrder: ShoppingCategory[] = [
  'Private Atelier',
  'Flagship Boutique',
  'Department Store',
  'Shopping Center',
];

const categoryDescriptions: Record<ShoppingCategory, string> = {
  'Private Atelier': 'Bespoke creations, by appointment only.',
  'Flagship Boutique': 'The definitive address for each maison.',
  'Department Store': 'Entire worlds of luxury under one roof.',
  'Shopping Center': 'The globe\'s most prestigious retail districts.',
};

const categoryIcons: Record<ShoppingCategory, string> = {
  'Private Atelier': '◈',
  'Flagship Boutique': '◆',
  'Department Store': '◇',
  'Shopping Center': '○',
};

export default function ShoppingPage() {
  const grouped = categoryOrder.map((cat) => ({
    cat,
    items: shopVenues.filter((s) => s.category === cat),
  }));

  return (
    <div className="bg-obsidian min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=85"
            alt="Luxury Shopping"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="badge-gold mb-4">Exclusive Retail</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold">
            Luxury <span className="gold-text italic">Shopping</span>
          </h1>
          <p className="font-cormorant text-xl text-ivory/60 italic mt-4 max-w-2xl">
            From Birkins allocated within 48 hours to private diamond viewings on Bond Street —
            the world's finest shopping, unlocked for LUXEury members.
          </p>
        </div>
      </section>

      {/* Private concierge banner */}
      <section className="bg-gradient-to-r from-onyx via-smoke to-onyx border-y border-gold-700/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gold-400 text-xl">◆</span>
              <div>
                <p className="font-inter text-xs tracking-[0.2em] uppercase text-gold-400">
                  Personal Shopping Concierge
                </p>
                <p className="font-cormorant text-base text-ivory/60 italic">
                  Our stylist acquires what cannot be purchased — Hermès waitlists, Patek allocations, haute couture.
                </p>
              </div>
            </div>
            <Link href="/membership" className="btn-gold px-6 py-2.5 rounded-sm text-xs whitespace-nowrap">
              Engage Stylist
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <section className="border-b border-gold-700/10 bg-onyx/30 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0">
            {categoryOrder.map((cat) => (
              <a
                key={cat}
                href={`#${cat.replace(/\s/g, '-')}`}
                className="font-inter text-xs tracking-[0.18em] uppercase text-ivory/40 hover:text-gold-400 transition-colors py-4 px-5 border-b-2 border-transparent hover:border-gold-400 whitespace-nowrap"
              >
                {cat}s
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-20">
        {grouped.map(({ cat, items }) =>
          items.length === 0 ? null : (
            <section key={cat} id={cat.replace(/\s/g, '-')}>
              {/* Section header */}
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <span className="text-gold-400 text-lg">{categoryIcons[cat]}</span>
                  <div>
                    <p className="font-inter text-[0.6rem] tracking-[0.3em] uppercase text-gold-400 mb-0.5">
                      {categoryDescriptions[cat]}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl">
                      {cat.split(' ').map((word, i) =>
                        i === cat.split(' ').length - 1 ? (
                          <span key={i} className="gold-text italic">
                            {word}
                          </span>
                        ) : (
                          <span key={i}>{word} </span>
                        )
                      )}
                    </h2>
                  </div>
                </div>
                <div className="flex-1 h-px bg-gold-700/20" />
                <span className="font-inter text-xs text-ivory/30 tracking-widest">
                  {items.length} {items.length === 1 ? 'venue' : 'venues'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {items.map((venue) => (
                  <article
                    key={venue.id}
                    className="group luxury-card border border-gold-700/20 rounded-sm overflow-hidden bg-onyx/30"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />

                      {/* By appointment badge */}
                      <div className="absolute top-4 left-4">
                        {venue.byAppointment ? (
                          <span className="badge-gold">By Appointment</span>
                        ) : (
                          <span className="font-inter text-[0.6rem] tracking-widest uppercase bg-ivory/10 border border-ivory/20 text-ivory/60 px-3 py-1 rounded-sm">
                            Open to Members
                          </span>
                        )}
                      </div>

                      {/* Category */}
                      <div className="absolute top-4 right-4">
                        <span className="text-gold-400 text-xs">{categoryIcons[cat]}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-display text-xl leading-tight">{venue.name}</h3>
                        <p className="font-inter text-xs text-ivory/40 tracking-wide mt-1">
                          {venue.location} · {venue.country}
                        </p>
                      </div>

                      <p className="font-cormorant text-base text-ivory/60 italic leading-relaxed">
                        {venue.tagline}
                      </p>

                      {/* Brands */}
                      {venue.brands && venue.brands.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {venue.brands.slice(0, 5).map((brand) => (
                            <span
                              key={brand}
                              className="font-inter text-[0.6rem] tracking-widest uppercase text-ivory/30 border border-ivory/10 px-2 py-0.5 rounded-sm"
                            >
                              {brand}
                            </span>
                          ))}
                          {venue.brands.length > 5 && (
                            <span className="font-inter text-[0.6rem] text-ivory/20">
                              +{venue.brands.length - 5} more
                            </span>
                          )}
                        </div>
                      )}

                      <div className="h-px bg-gold-700/15" />

                      <ul className="space-y-1.5">
                        {venue.highlights.slice(0, 3).map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <span className="text-gold-400 mt-0.5 text-xs">◆</span>
                            <span className="font-inter text-xs text-ivory/50">{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2">
                        <Link href="/membership" className="btn-outline-gold w-full text-center block py-2.5 rounded-sm">
                          {venue.byAppointment ? 'Request Appointment' : 'Access Venue'}
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )
        )}
      </div>

      {/* Bottom CTA */}
      <section className="border-t border-gold-700/15 bg-onyx/30 py-16 text-center">
        <p className="font-cormorant text-2xl italic text-ivory/50 mb-2">
          Access the unobtainable. Own the extraordinary.
        </p>
        <p className="font-inter text-xs text-ivory/30 tracking-wide mb-8">
          Hermès Birkins. Patek Phillipe complications. Graff one-of-one diamonds. Our shopping concierge delivers.
        </p>
        <Link href="/membership" className="btn-gold px-10 py-4 rounded-sm text-xs inline-block">
          Engage Shopping Concierge
        </Link>
      </section>
    </div>
  );
}
