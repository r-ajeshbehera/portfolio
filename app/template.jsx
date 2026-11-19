// Re-mounts on every navigation, giving each page a smooth enter transition.
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
