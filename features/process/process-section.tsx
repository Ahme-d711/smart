import AnimatedReveal from "../../components/shared/animated-reveal";

export default function ProcessSection({ copy }: { copy: { eyebrow: string; title: string; steps: readonly (readonly string[])[] } }) {
  return <section id="approach" className="section container approach !grid !grid-cols-[.8fr_1.2fr] !gap-24 max-md:!grid-cols-1"><AnimatedReveal className="approach-intro"><div className="eyebrow">{copy.eyebrow}</div><h2 className="!text-5xl !font-medium max-md:!text-4xl">{copy.title}</h2><div className="approach-line" /></AnimatedReveal><div className="steps !grid !grid-cols-2 !gap-12 max-md:!grid-cols-1">{copy.steps.map(([num, title, desc], i) => <AnimatedReveal delay={i * 0.1} key={num}><div className="step"><span>{num}</span><h3>{title}</h3><p>{desc}</p></div></AnimatedReveal>)}</div></section>;
}
