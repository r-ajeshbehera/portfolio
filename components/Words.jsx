export default function Words({ text, as: Tag = "h2", scroll = false, className }) {
  const anim = scroll ? { "data-reveal": "" } : { "data-hero-rise": "" };
  return <Tag className={className} {...anim}>{text}</Tag>;
}
