import { site } from "../data/site";
export default function manifest() {
  return { name: site.brand, short_name: site.short, description: site.description, start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#0A1022", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
