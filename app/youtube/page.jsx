import { ContactBand, YouTubeBlock } from "../../components/Sections";
import { youtube } from "../../data/site";
export const metadata = { title: "YouTube", description: youtube.description };
export default function Page() {
  return (<><section className="section contact-page"><div className="container"><YouTubeBlock as="h1" /></div></section><ContactBand /></>);
}
