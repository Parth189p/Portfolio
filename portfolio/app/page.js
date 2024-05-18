import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
async function getData() {
  const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@panchalparthppp`)
    .then((response) => response.json());

  if (!res.items) {
    throw new Error('Items not found in response');
  }

  const filtered = res.items.filter((item) => item);

  return filtered;
};
export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  )
};