import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-gold-700/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-display text-2xl font-bold tracking-widest gold-text">
                LUX<span className="italic">E</span>ury
              </span>
              <p className="font-inter text-[0.6rem] tracking-[0.3em] text-gold-400/50 uppercase mt-1">
                Ultra Exclusive Access
              </p>
            </div>
            <p className="font-inter text-xs text-ivory/40 leading-relaxed mt-4">
              Curated for the world's most discerning individuals. By invitation only.
            </p>
            <div className="divider-gold mt-6" style={{ margin: '1.5rem 0 0' }} />
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400 mb-6">
              Experiences
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Hotels & Resorts', href: '/hotels' },
                { label: 'Penthouses & Villas', href: '/properties' },
                { label: 'Fine Dining', href: '/dining' },
                { label: 'Luxury Shopping', href: '/shopping' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-inter text-xs text-ivory/40 hover:text-gold-400 transition-colors tracking-wide"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h4 className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400 mb-6">
              Membership
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Request Invitation', href: '/membership' },
                { label: 'Member Benefits', href: '/membership#benefits' },
                { label: 'Concierge Services', href: '/membership#concierge' },
                { label: 'Annual Events', href: '/membership#events' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-inter text-xs text-ivory/40 hover:text-gold-400 transition-colors tracking-wide"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-gold-400 mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:access@luxeury.com"
                  className="font-inter text-xs text-ivory/40 hover:text-gold-400 transition-colors tracking-wide"
                >
                  access@luxeury.com
                </a>
              </li>
              <li>
                <span className="font-inter text-xs text-ivory/40 tracking-wide">
                  +1 (800) LUXEURY
                </span>
              </li>
              <li className="pt-2">
                <div className="flex gap-3">
                  {['IG', 'WA', 'TG'].map((s) => (
                    <span
                      key={s}
                      className="badge-gold cursor-pointer hover:bg-gold-400/20 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gold-700/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[0.65rem] text-ivory/20 tracking-widest uppercase">
            © {new Date().getFullYear()} LUXEury. All Rights Reserved. By Invitation Only.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((t) => (
              <a
                key={t}
                href="#"
                className="font-inter text-[0.65rem] text-ivory/20 hover:text-ivory/50 transition-colors tracking-wide uppercase"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
