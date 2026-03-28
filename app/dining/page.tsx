import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { restaurants, type DiningCategory } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Fine Dining',
  description:
    'The world\'s most exclusive Michelin-starred restaurants — from Masa in New York to Sublimotion in Ibiza. Private reservations for LUXEury members.',
};

const categoryOrder: DiningCategory[] = [
  'Michelin 3-Star',
  'Michelin 2-Star',
  'Michelin 1-Star',
  'Fine Dining',
];

const categoryDescriptions: Record<DiningCategory, string> = {
  'Michelin 3-Star': 'Exceptional cuisine, worth a special journey.',
  'Michelin 2-Star': 'Excellent cooking, worth a detour.',
  'Michelin 1-Star': 'High quality cooking, worth a stop.',
  'Fine Dining': 'Extraordinary experiences beyond conventional classification.',
};

const michelin3Stars = restaurants.filter((r) => r.category === 'Michelin 3-Star').length;
const totalStars = restaurants.reduce((acc, r) => {
  const n = r.category.startsWith('Michelin') ? parseInt(r.category[8]) : 0;
  return acc + n;
}, 0);

export default function DiningPage() {
  const grouped = categoryOrder.map((cat) => ({
    cat,
    items: restaurants.filter((r) => r.category === cat),
  }));

  return (
    <div className="bg-obsidian min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600&q=85"
            alt="Fine Dining"
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="badge-gold mb-4">Michelin Excellence</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold">
            Fine <span className="gold-text italic">Dining</span>
          </h1>
          <p className="font-cormorant text-xl text-ivory/60 italic mt-4 max-w-2xl">
            From a single table hidden in Shanghai to the Belle Époque grandeur of Monte-Carlo —
            private reservations at the world's most extraordinary tables.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gold-700/20 bg-onyx/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: `${restaurants.length}`, label: 'Restaurants' },
              { value: `${michelin3Stars}`, label: '3-Star Michelin' },
              { value: `${totalStars}+`, label: 'Total Michelin Stars' },
              { value: '12', label: 'Countries' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl gold-text">{s.value}</div>
                <div className="font-inter text-[0.6rem] uppercase tracking-[0.2em] text-ivory/30 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
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
                {cat}
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
                <div>
                  <p className="font-inter text-[0.6rem] tracking-[0.3em] uppercase text-gold-400 mb-1">
                    {categoryDescriptions[cat]}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl">
                    {cat === 'Fine Dining' ? (
                      <>
                        Fine <span className="gold-text italic">Dining</span>
                      </>
                    ) : (
                      <>
                        {cat.replace('Michelin ', '').replace('-Star', '')}{' '}
                        <span className="gold-text italic">Michelin Stars</span>
                      </>
                    )}
                  </h2>
                </div>
                <div className="flex-1 h-px bg-gold-700/20" />
                <span className="font-inter text-xs text-ivory/30 tracking-widest">
                  {items.length} {items.length === 1 ? 'restaurant' : 'restaurants'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((restaurant) => (
                  <article
                    key={restaurant.id}
                    className="group luxury-card border border-gold-700/20 rounded-sm overflow-hidden bg-onyx/30 flex flex-col md:flex-row"
                  >
                    {/* Image */}
                    <div className="relative md:w-2/5 overflow-hidden" style={{ minHeight: '220px' }}>
                      <Image
                        src={restaurant.image}
                        alt={restaurant.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-obsidian/30 md:bg-gradient-to-b md:from-transparent md:to-obsidian/30" />
                      <div className="absolute top-3 left-3">
                        <span className="badge-gold text-[0.55rem]">{restaurant.category}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-7 flex flex-col gap-4">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-display text-xl leading-tight">{restaurant.name}</h3>
                            <p className="font-inter text-xs text-gold-400/70 tracking-wide mt-0.5">
                              Chef {restaurant.chef}
                            </p>
                          </div>
                          <span className="font-display text-lg gold-text whitespace-nowrap">
                            {restaurant.pricePerCover}
                          </span>
                        </div>
                        <p className="font-inter text-[0.6rem] tracking-widest uppercase text-ivory/30 mt-1">
                          {restaurant.cuisine} · {restaurant.location}, {restaurant.country}
                        </p>
                      </div>

                      <p className="font-cormorant text-sm text-ivory/60 italic leading-relaxed flex-1">
                        {restaurant.tagline}
                      </p>

                      <div className="h-px bg-gold-700/15" />

                      <ul className="space-y-1">
                        {restaurant.highlights.slice(0, 3).map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <span className="text-gold-400 mt-0.5 text-[0.6rem]">◆</span>
                            <span className="font-inter text-[0.7rem] text-ivory/50">{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 text-center">
                          <div>
                            <div className="font-inter text-[0.55rem] uppercase tracking-widest text-ivory/25">Seats</div>
                            <div className="font-display text-sm gold-text">{restaurant.seats}</div>
                          </div>
                          <div>
                            <div className="font-inter text-[0.55rem] uppercase tracking-widest text-ivory/25">Dress Code</div>
                            <div className="font-inter text-[0.65rem] text-ivory/50">{restaurant.dresscode}</div>
                          </div>
                        </div>
                        <Link href="/membership" className="btn-outline-gold px-4 py-2 rounded-sm text-[0.6rem]">
                          Reserve
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

      {/* Concierge note */}
      <section className="border-t border-gold-700/15 bg-onyx/30 py-16 text-center">
        <p className="font-cormorant text-2xl italic text-ivory/50 mb-2">
          Impossible reservations, secured.
        </p>
        <p className="font-inter text-xs text-ivory/30 tracking-wide mb-8">
          11-month waiting lists, chef's tables, private dining rooms — our culinary concierge delivers.
        </p>
        <Link href="/membership" className="btn-gold px-10 py-4 rounded-sm text-xs inline-block">
          Engage Culinary Concierge
        </Link>
      </section>
    </div>
  );
}
