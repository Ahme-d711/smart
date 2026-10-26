import AnimatedReveal from "../../components/shared/animated-reveal";

export default function AboutSection({ copy }: { copy: { eyebrow: string; title: string; body: string } }) {
  return <section className="section container about-section !py-20"><AnimatedReveal className="about-copy !max-w-3xl"><div className="eyebrow">{copy.eyebrow}</div><h2 className="!text-5xl !font-medium max-md:!text-4xl">{copy.title}</h2><p className="!leading-8">{copy.body}</p></AnimatedReveal></section>;
}
