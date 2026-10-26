import { getTranslations } from "next-intl/server";
import PortfolioSection from "../../../features/portfolio/portfolio-section";
import SiteHeader from "../../../components/layout/site-header";

export default async function PortfolioPage() {
  const t = await getTranslations("landing");
  const copy = t.raw("content") as { workEyebrow: string; workTitle: string; viewWork: string; work: readonly (readonly string[])[] };
  return <main className="site-shell min-h-screen"><SiteHeader /><div className="pt-[88px]"><PortfolioSection copy={{ eyebrow: copy.workEyebrow, title: copy.workTitle, viewWork: copy.viewWork, items: copy.work }} /></div></main>;
}
