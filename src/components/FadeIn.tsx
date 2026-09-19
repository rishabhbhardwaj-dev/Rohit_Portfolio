import { motion } from 'framer-motion';
import type { CSSProperties, ElementType, ReactNode } from 'react';

// motion.create() must not be called during render, so cache per element type.
const cache = new Map<string, ReturnType<typeof motion.create>>();
const getMotionComponent = (as: string) => {
  let comp = cache.get(as);
  if (!comp) {
    comp = motion.create(as as ElementType) as ReturnType<typeof motion.create>;
    cache.set(as, comp);
  }
  return comp;
};

interface FadeInProps {
  as?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export default function FadeIn({
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  children,
}: FadeInProps) {
  const Comp = getMotionComponent(as) as ElementType;
  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Comp>
  );
}
