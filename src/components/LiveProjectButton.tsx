interface LiveProjectButtonProps {
  href?: string;
  label?: string;
}

export default function LiveProjectButton({ href = '#', label = 'Live Project' }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      className="inline-block whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      {label}
    </a>
  );
}
