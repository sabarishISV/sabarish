export default function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white ${className}`}>
      {children}
    </span>
  );
}
