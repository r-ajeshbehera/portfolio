const paths = {
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" /></>,
  flow: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><path d="M10 6.5h4a3 3 0 0 1 3 3V14" /></>,
  sheet: <><rect x="3.5" y="3.5" width="17" height="17" rx="2" /><path d="M3.5 9h17M3.5 14.5h17M9 3.5v17" /></>,
  design: <><path d="M12 21a9 9 0 1 1 9-9c0 2-1.5 3-3 3h-2a2 2 0 0 0-1.5 3.3c.4.5.5 1 .5 1.4 0 .8-.8 1.3-3 1.3Z" /><circle cx="7.5" cy="11" r="1" /><circle cx="11" cy="7" r="1" /><circle cx="16" cy="8.5" r="1" /></>,
  box: <><path d="m21 8-9-5-9 5 9 5 9-5Z" /><path d="M3 8v8l9 5 9-5V8M12 13v8" /></>,
  check: <path d="m5 12.5 4.2 4.2L19 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></>,
  pin: <><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  chat: <path d="M4 5h16v11H9l-5 4V5Z" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></>,
  github: <path d="M9 19c-4 1.3-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C6.6 3.3 5.6 3.6 5.6 3.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 10c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  youtube: <><rect x="2.5" y="5.5" width="19" height="13" rx="3.5" /><path d="m10 9.5 5 2.5-5 2.5v-5Z" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  shield: <path d="M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6L12 3Z" />,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.5 3.3-5.5 6.5-5.5s5.9 2 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .7 3.2 2.4 3.5 5.2" /></>,
  file: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
  language: <><path d="M4 5h9M8.5 3v2c0 4-2 7-5 8.5M6 9c1 2 3 3.5 5.5 4.5" /><path d="m12.5 21 4-9 4 9M14 18h5" /></>,
  wrench: <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-2.5-2.5 1-1-4-4-1 1L4 12l8-8 1.7 1.7Z" />,
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
};

export default function Icon({ name, size = 22, className = "" }) {
  return (
    <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || paths.code}
    </svg>
  );
}
