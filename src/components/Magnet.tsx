import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: CSSProperties;
}

export default function Magnet({
  children,
  padding = 100,
  disabled = false,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  className = '',
  style,
}: MagnetProps) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const cx = left + width / 2;
      const cy = top + height / 2;
      const distX = Math.abs(cx - e.clientX);
      const distY = Math.abs(cy - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        setPosition({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [padding, disabled, strength]);

  return (
    <div ref={ref} className={className} style={{ position: 'relative', ...style }}>
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
