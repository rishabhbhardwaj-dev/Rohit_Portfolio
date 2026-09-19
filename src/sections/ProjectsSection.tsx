import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue, UseScrollOptions } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { projects } from '../data';
import type { Project } from '../data';

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

interface CardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ProjectCard({ project, index, total, progress }: CardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="h-[85vh]">
      <div className="sticky top-24 md:top-32">
        <motion.div
          className={`relative border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 ${RADIUS}`}
          style={{
            scale,
            top: index * 28,
            background: '#0C0C0C',
            transformOrigin: 'top center',
          }}
        >
          {/* Top row */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6 md:mb-8">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <span
                className="font-black leading-none text-[#D7E2EA]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.number}
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className="font-light uppercase tracking-wide text-[#D7E2EA] opacity-60"
                  style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.1rem)' }}
                >
                  {project.category}
                </span>
                <h3
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {project.name}
                </h3>
              </div>
            </div>
            <LiveProjectButton />
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-[40fr_60fr] gap-3 sm:gap-4 md:gap-5">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              <img
                src={project.col1[0]}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className={`w-full object-cover ${RADIUS}`}
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={project.col1[1]}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className={`w-full object-cover ${RADIUS}`}
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            <div className="relative">
              <img
                src={project.col2}
                alt={`${project.name} preview 3`}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover ${RADIUS}`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start start', 'end end'] as UseScrollOptions['offset'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-32 md:pt-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={listRef} className="mx-auto max-w-[1400px]">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.number}
            project={p}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
