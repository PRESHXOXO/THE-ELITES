import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { properties, type PropertyType } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Penthouses & Villas',
  description:
    'The world\'s most extraordinary private residences — ultra-luxury penthouses, villas, and estates. From Monaco sky suites to private island estates. LUXEury members only.',
};

const typeOrder: PropertyType[] = ['Penthouse', 'Villa', 'Estate'];

const typeDescriptions: Record<PropertyType, string> = {
  Penthouse: 'Sky-high sanctuaries commanding the most coveted views on earth.',
  Villa: 'Private retreats of extraordinary scale, history, and beauty.',
  Estate: 'Island and estate exclusives — entire worlds reserved for you alone.',
};

function formatSqft(n: number) {
  if (n === 0) return 'Island';
  return n.toLocaleString() + ' ft²';
}

export default function PropertiesPage() {
  const grouped = typeOrder.map((type) => ({
    type,
    items: properties.filter((p) => p.type === type),
  }));

  return (
    <div className="bg-obsidian min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85"
            alt="Luxury Penthouses & Villas"
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="badge-gold mb-4">Private Residences</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold">
            Penthouses <span className="gold-text italic">&amp; Villas</span>
          </h1>
          <p className="font-cormorant text-xl text-ivory/60 italic mt-4 max-w-2xl">
            From sky penthouses above Monaco to private Caribbean islands — residences of
            unmatched grandeur, available exclusively through LUXEury.
          </p>
        </div>
      </section>

      {/* Sticky nav */}
      <section className="border-b border-gold-700/20 bg-onyx/40 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0">
            {typeOrder.map((type) => (
              <a
                key={type}
                href={`#${type}`}
                className="font-inter text-xs tracking-[0.18em] uppercase text-ivory/40 hover:text-gold-400 transition-colors py-4 px-6 border-b-2 border-transparent hover:border-gold-400 whitespace-nowrap"
              >
                {type}s
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-24">
        {grouped.map(({ type, items }) =>
          items.length === 0 ? null : (
            <section key={type} id={type}>
              {/* Section header */}
              <div className="mb-12">
                <div className="flex items-center gap-6 mb-3">
                  <h2 className="font-display text-3xl md:text-4xl">
                    <span className="gold-text italic">{type}</span>
                    {type !== 'Estate' ? 's' : 's'}
                  </h2>
                  <div className="flex-1 h-px bg-gold-700/20" />
                  <span className="font-inter text-xs text-ivory/30 tracking-widest">
                    {items.length} {items.length === 1 ? 'residence' : 'residences'}
                  </span>
                </div>
                <p className="font-cormorant text-lg text-ivory/50 italic">
                  {typeDescriptions[type]}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {items.map((property, idx) => (
                  <article
                    key={property.id}
                    className={`group luxury-card border border-gold-700/20 rounded-sm overflow-hidden bg-onyx/30 ${
                      idx === 0 && items.length >= 3 ? 'lg:col-span-2' : ''
                    }`}
                  >
                    <div
                      className={`grid ${idx === 0 && items.length >= 3 ? 'md:grid-cols-2' : 'grid-cols-1'}`}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden" style={{ minHeight: '300px' }}>
                        <Image
                          src={property.image}
                          alt={property.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="badge-gold">{property.type}</span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="font-inter text-[0.6rem] tracking-[0.2em] uppercase text-gold-400/80">
                            {property.view}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col justify-between gap-6">
                        <div>
                          <p className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400 mb-2">
                            {property.location} · {property.country}
                          </p>
                          <h3 className="font-display text-2xl md:text-3xl leading-tight mb-3">
                            {property.name}
                          </h3>
                          <p className="font-cormorant text-base text-ivory/60 italic leading-relaxed">
                            {property.tagline}
                          </p>
                        </div>

                        <div className="h-px bg-gold-700/15" />

                        {/* Specs */}
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { label: 'Bedrooms', value: property.bedrooms === 30 ? '30+' : String(property.bedrooms) },
                            { label: 'Bathrooms', value: property.bathrooms === 30 ? '30+' : String(property.bathrooms) },
                            { label: 'Size', value: formatSqft(property.sqft) },
                          ].map((s) => (
                            <div key={s.label} className="text-center p-3 border border-gold-700/20 rounded-sm">
                              <div className="font-display text-base gold-text">{s.value}</div>
                              <div className="font-inter text-[0.55rem] uppercase tracking-widest text-ivory/30 mt-0.5">
                                {s.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-1.5">
                          {property.highlights.slice(0, 4).map((h) => (
                            <li key={h} className="flex items-start gap-2">
                              <span className="text-gold-400 mt-0.5 text-xs">◆</span>
                              <span className="font-inter text-xs text-ivory/50">{h}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Price + CTA */}
                        <div className="flex items-center justify-between pt-2">
                          <div>
                            <div className="font-inter text-[0.55rem] uppercase tracking-widest text-ivory/30">
                              Starting From
                            </div>
                            <div className="font-display text-xl gold-text">
                              {property.pricePerNight}
                            </div>
                          </div>
                          <Link
                            href="/membership"
                            className="btn-gold px-6 py-2.5 rounded-sm text-[0.65rem]"
                          >
                            Enquire
                          </Link>
                        </div>
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
          Seeking a bespoke private residence beyond our portfolio?
        </p>
        <p className="font-inter text-xs text-ivory/30 tracking-wide mb-8">
          Our estate concierge sources the world's most extraordinary private residences.
        </p>
        <Link href="/membership" className="btn-gold px-10 py-4 rounded-sm text-xs inline-block">
          Contact Estate Concierge
        </Link>
      </section>
    </div>
  );
}
