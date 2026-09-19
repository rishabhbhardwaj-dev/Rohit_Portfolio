import { useRef } from 'react';
import type { CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue, UseScrollOptions } from 'framer-motion';

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'] as UseScrollOptions['offset'],
  });

  const words = text.split(' ');
  const total = text.length;
  let index = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const chars = word.split('').map((char) => {
          const start = index / total;
          const end = (index + 1) / total;
          const key = index;
          index += 1;
          return <Char key={key} char={char} progress={scrollYProgress} range={[start, end]} />;
        });
        const hasSpace = wi < words.length - 1;
        if (hasSpace) index += 1; // the space between words counts as a character
        return (
          <span key={wi}>
            <span className="inline-block whitespace-nowrap">{chars}</span>
            {hasSpace ? ' ' : null}
          </span>
        );
      })}
    </p>
  );
}
