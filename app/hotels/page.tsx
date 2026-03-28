import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { hotels, type HotelCategory } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Hotels & Resorts',
  description:
    'The world\'s finest hotels — US & international 5–6 star properties, Michelin Key recognised hotels, and ultra-luxury resorts. Exclusively for LUXEury members.',
};

function StarRating({ count }: { count: number }) {
  return (
    <span className="text-gold-400 text-xs tracking-widest">
      {'★'.repeat(count)}
    </span>
  );
}

function MichelinKeys({ count }: { count: number }) {
  return (
    <span className="badge-gold text-[0.6rem]">
      {'🔑'.repeat(count)} Michelin {count === 1 ? 'Key' : 'Keys'}
    </span>
  );
}

const categoryOrder: HotelCategory[] = ['US', 'International', 'Michelin Key'];
const categoryLabels: Record<HotelCategory, string> = {
  US: 'United States',
  International: 'International',
  'Michelin Key': 'Michelin Key',
};

export default function HotelsPage() {
  const grouped = categoryOrder.map((cat) => ({
    cat,
    items: hotels.filter((h) => h.category === cat),
  }));

  return (
    <div className="bg-obsidian min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=85"
            alt="Luxury Hotels"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="badge-gold mb-4">Curated Hospitality</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold">
            Hotels &amp; <span className="gold-text italic">Resorts</span>
          </h1>
          <p className="font-cormorant text-xl text-ivory/60 italic mt-4 max-w-2xl">
            From Michelin Key sanctuaries in Virginia to six-star palaces on private islands —
            the world's most extraordinary hotels, exclusively accessible to LUXEury members.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="border-b border-gold-700/20 bg-onyx/40 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0">
            {[{ label: 'All Properties', id: 'all' }, ...categoryOrder.map((c) => ({ label: categoryLabels[c], id: c }))].map(
              (tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className="font-inter text-xs tracking-[0.18em] uppercase text-ivory/40 hover:text-gold-400 transition-colors py-4 px-6 border-b-2 border-transparent hover:border-gold-400 whitespace-nowrap"
                >
                  {tab.label}
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* Hotel sections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-20">
        {grouped.map(({ cat, items }) =>
          items.length === 0 ? null : (
            <section key={cat} id={cat}>
              {/* Section header */}
              <div className="flex items-center gap-6 mb-10">
                <div>
                  <p className="font-inter text-[0.6rem] tracking-[0.3em] uppercase text-gold-400 mb-1">
                    Collection
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl">
                    {categoryLabels[cat]}
                    {cat === 'Michelin Key' && (
                      <span className="gold-text italic"> Recognised</span>
                    )}
                  </h2>
                </div>
                <div className="flex-1 h-px bg-gold-700/20" />
                <span className="font-inter text-xs text-ivory/30 tracking-widest">
                  {items.length} {items.length === 1 ? 'property' : 'properties'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((hotel) => (
                  <article
                    key={hotel.id}
                    className="group border border-gold-700/20 rounded-sm overflow-hidden bg-onyx/30 luxury-card"
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {hotel.michelinKeys && <MichelinKeys count={hotel.michelinKeys} />}
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="badge-gold">{hotel.pricePerNight}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <StarRating count={hotel.stars} />
                        <h3 className="font-display text-xl mt-1 leading-tight">{hotel.name}</h3>
                        <p className="font-inter text-xs text-ivory/40 tracking-wide mt-1">
                          {hotel.location} · {hotel.country}
                        </p>
                      </div>

                      <p className="font-cormorant text-base text-ivory/60 italic leading-relaxed">
                        {hotel.tagline}
                      </p>

                      <div className="h-px bg-gold-700/15" />

                      {/* Highlights */}
                      <ul className="space-y-1.5">
                        {hotel.highlights.slice(0, 3).map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <span className="text-gold-400 mt-0.5 text-xs">◆</span>
                            <span className="font-inter text-xs text-ivory/50">{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex gap-4">
                          <div>
                            <div className="font-inter text-[0.6rem] uppercase tracking-widest text-ivory/30">Suites</div>
                            <div className="font-display text-sm gold-text">{hotel.suites}</div>
                          </div>
                          {hotel.acres && (
                            <div>
                              <div className="font-inter text-[0.6rem] uppercase tracking-widest text-ivory/30">Acres</div>
                              <div className="font-display text-sm gold-text">{hotel.acres.toLocaleString()}</div>
                            </div>
                          )}
                        </div>
                        <Link
                          href="/membership"
                          className="btn-outline-gold px-4 py-2 rounded-sm text-[0.65rem]"
                        >
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

      {/* Bottom CTA */}
      <section className="border-t border-gold-700/15 bg-onyx/30 py-16 text-center">
        <p className="font-cormorant text-2xl italic text-ivory/50 mb-6">
          Don't see the property you desire? Our concierge will find it.
        </p>
        <Link href="/membership" className="btn-gold px-10 py-4 rounded-sm text-xs inline-block">
          Contact Our Concierge
        </Link>
      </section>
    </div>
  );
}
