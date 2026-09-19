import FadeIn from '../components/FadeIn';
import { services } from '../data';

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="relative rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <h2
        className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#0C0C0C' }}
      >
        Services
      </h2>

      <div className="mx-auto max-w-5xl pb-10 sm:pb-12 md:pb-14">
        {services.map((s, i) => (
          <FadeIn key={s.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-4 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
              style={{
                borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                borderBottom:
                  i === services.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
                color: '#0C0C0C',
              }}
            >
              <span
                className="shrink-0 font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0C0C0C' }}
              >
                {s.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {s.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
