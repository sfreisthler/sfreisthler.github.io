import './Section.css';

export default function Section({
  id,         // optional id for anchor links
  title,      // the section heading text
  children,   // everything inside this section
}) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}