import { Workflow, Globe, Table2, Palette, Package, Sparkles, BookOpen, CalendarDays } from "lucide-react";

const icons = { Workflow, Globe, Table2, Palette, Package, Sparkles, BookOpen, CalendarDays };

export default function Icon({ name, size = 24 }) {
  const Cmp = icons[name] || Sparkles;
  return <Cmp size={size} strokeWidth={1.75} aria-hidden="true" />;
}
