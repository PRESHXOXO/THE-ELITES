import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Membership — Request Your Invitation',
  description:
    'LUXEury membership is by invitation only. Request your invitation and gain private access to the world\'s most extraordinary hotels, residences, restaurants, and shopping.',
};

const tiers = [
  {
    name: 'Obsidian',
    tagline: 'The Foundation of Extraordinary',
    price: '$150,000',
    period: 'per annum',
    color: 'from-smoke to-onyx',
    borderColor: 'border-ivory/10',
    textColor: 'text-ivory/80',
    features: [
      'Full platform access — hotels, dining, shopping',
      'Dedicated personal concierge (24/7)',
      'Priority reservations across all venues',
      'Global chauffeur coordination',
      'Member events & private previews',
      'Curated lifestyle editorial monthly',
    ],
    cta: 'Request Obsidian',
    highlight: false,
  },
  {
    name: 'Black Diamond',
    tagline: 'The Pinnacle of Exclusivity',
    price: '$500,000',
    period: 'per annum',
    color: 'from-gold-800/30 to-gold-900/20',
    borderColor: 'border-gold-600/40',
    textColor: 'text-gold-300',
    features: [
      'Everything in Obsidian, plus:',
      'Private jet coordination & NetJets partnership',
      'Hermès & Patek allocation guarantees',
      'Exclusive property sourcing — off-market',
      'Art advisory & auction house access',
      'Private invitation to global UHNWI events',
      'Dedicated Chief Concierge Officer',
      'Quarterly bespoke luxury gift curation',
      'Necker Island, Monaco Grand Prix, Wimbledon',
    ],
    cta: 'Request Black Diamond',
    highlight: true,
  },
];

const benefits = [
  {
    icon: '◆',
    title: 'Private Concierge',
    description: 'Your dedicated concierge is available 24 hours a day, every day of the year, across every time zone.',
  },
  {
    icon: '◇',
    title: 'Priority Access',
    description: 'Skip every waitlist. Every reservation, allocation, and appointment goes to LUXEury members first.',
  },
  {
    icon: '○',
    title: 'Global Network',
    description: 'Introductions to fellow UHNWI members across 62 countries through curated, intimate private events.',
  },
  {
    icon: '◈',
    title: 'Bespoke Sourcing',
    description: 'From off-market penthouses to one-of-one Graff diamonds — if it exists, we will source it for you.',
  },
  {
    icon: '◆',
    title: 'Privacy Guaranteed',
    description: 'Your membership, preferences, and movements are held in absolute confidence. No data is ever shared.',
  },
  {
    icon: '◇',
    title: 'Lifestyle Advisory',
    description: 'Wealth, art, fashion, travel, wine — our team of specialists advises on every facet of the luxury life.',
  },
];

const events = [
  {
    title: 'Monaco Grand Prix — Private Hospitality',
    date: 'May 2026',
    location: 'Monaco',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80',
  },
  {
    title: 'Art Basel — VIP Private Collector Preview',
    date: 'June 2026',
    location: 'Basel, Switzerland',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80',
  },
  {
    title: 'Necker Island — Annual Member Retreat',
    date: 'September 2026',
    location: 'British Virgin Islands',
    image: 'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?w=600&q=80',
  },
];

export default function MembershipPage() {
  return (
    <div className="bg-obsidian min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=1600&q=85"
            alt="LUXEury Membership"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-32">
          {/* Crown icon */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gold-600/40" />
            <span className="text-gold-400 text-2xl">♛</span>
            <div className="h-px w-16 bg-gold-600/40" />
          </div>

          <div className="badge-gold mb-6">By Invitation Only</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Membership at<br />
            <span className="gold-shimmer">LUX</span>
            <span className="italic gold-shimmer">E</span>
            <span className="gold-shimmer">ury</span>
          </h1>
          <div className="divider-gold mb-8" />
          <p className="font-cormorant text-xl md:text-2xl text-ivory/60 italic leading-relaxed mb-4">
            LUXEury is not a service you purchase. It is a world you are invited into.
            Membership is granted to ultra high net worth individuals who meet our
            criteria for financial standing, discretion, and shared values.
          </p>
          <p className="font-inter text-xs tracking-[0.25em] uppercase text-gold-400/60">
            Minimum Net Worth Qualification: $30M+
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <span className="badge-gold">Member Privileges</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            What <span className="gold-text italic">Membership</span> Grants
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="border border-gold-700/20 rounded-sm p-8 bg-onyx/30 group hover:border-gold-600/40 transition-colors"
            >
              <div className="text-gold-400 text-2xl mb-4">{b.icon}</div>
              <h3 className="font-display text-xl mb-3">{b.title}</h3>
              <p className="font-cormorant text-base text-ivory/50 italic leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="border-y border-gold-700/15 py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-gold">Membership Tiers</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">
              Choose Your <span className="gold-text italic">Level</span>
            </h2>
            <p className="font-cormorant text-lg text-ivory/50 italic mt-4">
              Both tiers are by invitation only. The committee will confirm eligibility within 72 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-sm border p-8 flex flex-col gap-6 bg-gradient-to-b ${tier.color} ${tier.borderColor} ${
                  tier.highlight ? 'ring-1 ring-gold-500/30' : ''
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge-gold text-[0.6rem] px-4">Most Exclusive</span>
                  </div>
                )}

                <div>
                  <p className={`font-inter text-[0.6rem] tracking-[0.3em] uppercase mb-1 ${tier.textColor}`}>
                    {tier.tagline}
                  </p>
                  <h3 className={`font-display text-3xl ${tier.highlight ? 'gold-text' : 'text-ivory'}`}>
                    {tier.name}
                  </h3>
                </div>

                <div>
                  <div className={`font-display text-4xl ${tier.highlight ? 'gold-text' : 'text-ivory'}`}>
                    {tier.price}
                  </div>
                  <div className="font-inter text-xs text-ivory/30 tracking-widest uppercase mt-1">
                    {tier.period}
                  </div>
                </div>

                <div className="h-px bg-gold-700/20" />

                <ul className="space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`text-xs mt-0.5 ${tier.highlight ? 'text-gold-400' : 'text-ivory/40'}`}>
                        ◆
                      </span>
                      <span className="font-inter text-xs text-ivory/60 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#apply"
                  className={`text-center py-3.5 rounded-sm text-xs tracking-[0.18em] uppercase font-medium transition-all ${
                    tier.highlight
                      ? 'btn-gold'
                      : 'btn-outline-gold'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section id="events" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <span className="badge-gold">Exclusive Events</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Member <span className="gold-text italic">Gatherings</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.title} className="group luxury-card border border-gold-700/20 rounded-sm overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-inter text-[0.6rem] tracking-[0.2em] uppercase text-gold-400 mb-1">
                    {event.date} · {event.location}
                  </p>
                  <h3 className="font-display text-lg text-ivory leading-tight">{event.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Concierge section */}
      <section id="concierge" className="border-y border-gold-700/15 bg-onyx/30 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="badge-gold">24/7 Concierge</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
            Your Personal <span className="gold-text italic">Concierge</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="font-cormorant text-xl text-ivory/60 italic leading-relaxed mb-10">
            Every LUXEury member is assigned a Chief Concierge — a luxury specialist with access
            to the deepest global networks. Hotels, private aviation, yacht charters, art acquisitions,
            security arrangements, medical referrals. There is no request too small, no demand too great.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
            {[
              { metric: '< 4 min', label: 'Average Response Time' },
              { metric: '24/7/365', label: 'Availability' },
              { metric: '62+', label: 'Countries Covered' },
            ].map((s) => (
              <div key={s.label} className="border border-gold-700/20 rounded-sm p-6">
                <div className="font-display text-3xl gold-text">{s.metric}</div>
                <div className="font-inter text-[0.6rem] uppercase tracking-widest text-ivory/30 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="max-w-2xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <span className="badge-gold">Request Your Invitation</span>
          <h2 className="font-display text-4xl mt-4 mb-4">
            Begin Your <span className="gold-text italic">Application</span>
          </h2>
          <p className="font-cormorant text-base text-ivory/50 italic">
            Submissions are reviewed by our membership committee within 72 hours.
            All information is held in the strictest confidence.
          </p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400/70 block mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="First name"
                className="w-full bg-onyx border border-gold-700/30 rounded-sm px-4 py-3 font-inter text-sm text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold-500/60 transition-colors"
              />
            </div>
            <div>
              <label className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400/70 block mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full bg-onyx border border-gold-700/30 rounded-sm px-4 py-3 font-inter text-sm text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold-500/60 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400/70 block mb-2">
              Private Email Address
            </label>
            <input
              type="email"
              placeholder="your@private.com"
              className="w-full bg-onyx border border-gold-700/30 rounded-sm px-4 py-3 font-inter text-sm text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold-500/60 transition-colors"
            />
          </div>

          <div>
            <label className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400/70 block mb-2">
              Country of Residence
            </label>
            <input
              type="text"
              placeholder="Country"
              className="w-full bg-onyx border border-gold-700/30 rounded-sm px-4 py-3 font-inter text-sm text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold-500/60 transition-colors"
            />
          </div>

          <div>
            <label className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400/70 block mb-2">
              Membership Tier Interest
            </label>
            <select className="w-full bg-onyx border border-gold-700/30 rounded-sm px-4 py-3 font-inter text-sm text-ivory/70 focus:outline-none focus:border-gold-500/60 transition-colors appearance-none">
              <option value="">Select a tier</option>
              <option value="obsidian">Obsidian — $150,000 p.a.</option>
              <option value="black-diamond">Black Diamond — $500,000 p.a.</option>
              <option value="unsure">Advise Me</option>
            </select>
          </div>

          <div>
            <label className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400/70 block mb-2">
              How Did You Hear of LUXEury?
            </label>
            <input
              type="text"
              placeholder="Member referral, private event, press..."
              className="w-full bg-onyx border border-gold-700/30 rounded-sm px-4 py-3 font-inter text-sm text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold-500/60 transition-colors"
            />
          </div>

          <div>
            <label className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400/70 block mb-2">
              Member Referral (if applicable)
            </label>
            <input
              type="text"
              placeholder="Referral member name or code"
              className="w-full bg-onyx border border-gold-700/30 rounded-sm px-4 py-3 font-inter text-sm text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold-500/60 transition-colors"
            />
          </div>

          <div>
            <label className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400/70 block mb-2">
              Brief Introduction (optional)
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about yourself and what you seek from LUXEury..."
              className="w-full bg-onyx border border-gold-700/30 rounded-sm px-4 py-3 font-inter text-sm text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold-500/60 transition-colors resize-none"
            />
          </div>

          <p className="font-inter text-[0.6rem] text-ivory/25 leading-relaxed">
            By submitting this form you consent to LUXEury contacting you regarding your application.
            All personal data is held with absolute discretion and never shared with third parties.
            LUXEury membership is at the sole discretion of the membership committee.
          </p>

          <button
            type="submit"
            className="btn-gold w-full py-4 rounded-sm text-xs"
          >
            Submit Your Application
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="font-cormorant text-base text-ivory/30 italic">
            Prefer to speak with our membership director?
          </p>
          <a
            href="mailto:membership@luxeury.com"
            className="font-inter text-xs text-gold-400 hover:text-gold-300 transition-colors tracking-widest uppercase mt-2 inline-block"
          >
            membership@luxeury.com
          </a>
        </div>
      </section>
    </div>
  );
}
