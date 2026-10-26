import AnimatedReveal from "../../components/shared/animated-reveal";

export default function BenefitsSection({ copy }: { copy: { items: readonly (readonly string[])[] } }) {
  return <section className="section container benefits-section !py-16"><div className="benefit-grid !grid !grid-cols-3 !gap-4 max-md:!grid-cols-1">{copy.items.map(([title, body], i) => <AnimatedReveal delay={i * 0.1} key={title}><article className="benefit-card"><span>✦</span><h3>{title}</h3><p>{body}</p></article></AnimatedReveal>)}</div></section>;
}
