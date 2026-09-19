import { useEffect, useRef, useState } from 'react';
import { marqueeImages } from '../data';

const TILE_W = 420;
const GAP = 12; // gap-3

const row1 = marqueeImages.slice(0, 11);
const row2 = marqueeImages.slice(11);

const tripled = (arr: string[]) => [...arr, ...arr, ...arr];
const setWidth = (n: number) => n * (TILE_W + GAP);

function Row({ images, translate }: { images: string[]; translate: number }) {
  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${translate}px)`,
        willChange: 'transform',
        // start on the middle copy so the row is never empty at either edge
        marginLeft: -setWidth(images.length),
      }}
    >
      {tripled(images).map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const top = ref.current
        ? ref.current.getBoundingClientRect().top + window.scrollY
        : 0;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="flex flex-col gap-3 overflow-hidden pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ background: '#0C0C0C' }}
    >
      <Row images={row1} translate={offset - 200} />
      <Row images={row2} translate={-(offset - 200)} />
    </section>
  );
}
