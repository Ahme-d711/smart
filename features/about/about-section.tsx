import AnimatedReveal from "../../components/shared/animated-reveal";

export default function AboutSection({ copy }: { copy: { eyebrow: string; title: string; body: string } }) {
  return <section className="section container about-section"><AnimatedReveal className="about-copy"><div className="eyebrow">{copy.eyebrow}</div><h2>{copy.title}</h2><p>{copy.body}</p></AnimatedReveal></section>;
}
