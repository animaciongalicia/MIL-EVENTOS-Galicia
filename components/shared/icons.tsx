type IconProps = {
  className?: string;
};

// Set mínimo de iconos de línea, dibujados a mano (sin librería externa) —
// mismo grosor de trazo (1.5) y estilo minimalista en todos.
const base = "stroke-current fill-none";
const strokeProps = { strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? "h-4 w-4"}`} {...strokeProps}>
      <path d="M7 3.5c-1.4 0-2.5 1.1-2.5 2.5 0 8.3 6.7 15 15 15 1.4 0 2.5-1.1 2.5-2.5v-2.2l-4.3-1.7-1.5 1.5c-2-1-3.6-2.6-4.6-4.6l1.5-1.5L11.2 5.5H7z" />
    </svg>
  );
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? "h-4 w-4"}`} {...strokeProps}>
      <path d="M12 21c5 0 9-4 9-9s-4-9-9-9-9 4-9 9c0 1.6.4 3.1 1.2 4.4L3 21l4.8-1.2C9 20.6 10.5 21 12 21z" />
      <path d="M8.5 8.7c.2-.5.6-.5.9-.5h.6c.2 0 .5 0 .7.5s.7 1.7.8 1.8c.1.1.1.3 0 .5s-.2.3-.4.5-.4.4-.2.7c.2.4 1 1.6 2.1 2.3 1.4 1 1.9 1 2.2.9.3-.1.9-.6 1.1-.9.2-.3.4-.3.7-.2.3.1 1.6.8 1.9 1 .3.1.4.2.5.3.1.2.1.9-.2 1.6-.4.8-1.9 1.4-2.6 1.5-.7.1-1.3.1-4.2-1.1-3.5-1.5-5.6-5-5.8-5.3-.2-.2-1.3-1.8-1.3-3.4 0-1.6.9-2.4 1.2-2.7z" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? "h-4 w-4"}`} {...strokeProps}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4.5 6.5 12 12.5l7.5-6" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? "h-4 w-4"}`} {...strokeProps}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? "h-4 w-4"}`} {...strokeProps}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? "h-4 w-4"}`} {...strokeProps}>
      <path d="M5 12.5 9.5 17 19 7" />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? "h-3 w-3"}`} {...strokeProps}>
      <path d="M5 8.5 12 15l7-6.5" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? "h-4 w-4"}`} {...strokeProps}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? "h-4 w-4"}`} {...strokeProps}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
