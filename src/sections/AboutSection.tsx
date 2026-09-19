import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const BASE =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7';

const decor = [
  {
    src: `${BASE}/moon_icon.11395d36.png`,
    alt: 'Moon icon',
    size: 'w-[120px] sm:w-[160px] md:w-[210px]',
    pos: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    delay: 0.1,
    x: -80,
  },
  {
    src: `${BASE}/p59_1.4659672e.png`,
    alt: '3D object',
    size: 'w-[100px] sm:w-[140px] md:w-[180px]',
    pos: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    delay: 0.25,
    x: -80,
  },
  {
    src: `${BASE}/lego_icon-1.703bb594.png`,
    alt: 'Lego icon',
    size: 'w-[120px] sm:w-[160px] md:w-[210px]',
    pos: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    delay: 0.15,
    x: 80,
  },
  {
    src: `${BASE}/Group_134-1.2e04f3ce.png`,
    alt: '3D group',
    size: 'w-[130px] sm:w-[170px] md:w-[220px]',
    pos: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    delay: 0.3,
    x: 80,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center gap-16 px-5 py-20 sm:gap-20 sm:px-8 md:gap-24 md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      {decor.map((d) => (
        <div key={d.alt} className={`absolute ${d.pos} ${d.size}`}>
          <FadeIn delay={d.delay} x={d.x} y={0} duration={0.9}>
            <img src={d.src} alt={d.alt} className="block h-auto w-full" draggable={false} />
          </FadeIn>
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
          className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      <div className="relative z-10">
        <ContactButton />
      </div>
    </section>
  );
}
