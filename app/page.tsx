import { HorizontalLines } from "@/components/horizontal-lines";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Certifications from "@/components/certification";
import { Skills } from "@/components/skills";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <>
      <Introduction />
      <Experience />
      <Skills />
      <HorizontalLines classname="absolute left-0 right-0" />
      <Education />
      <Certifications />
    </>
  );
}
