import { supabase } from "@/lib/supabase";
import { mockProjects, mockEducation, mockExperiences, mockTools } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EduExp from "@/components/EduExp";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer";
import { Project, Education, Experience, Tool } from "@/types";

async function getData() {
  const [projectsRes, educationRes, experiencesRes, toolsRes] = await Promise.all([
    supabase.from("projects").select("*").order("created_at", { ascending: false }),
    supabase.from("education").select("*").order("start_year", { ascending: false }),
    supabase.from("experiences").select("*").order("start_date", { ascending: false }),
    supabase.from("tools").select("*").order("created_at", { ascending: false }),
  ]);

  if (projectsRes.error) console.error("[projects]", projectsRes.error.message);
  if (educationRes.error) console.error("[education]", educationRes.error.message);
  if (experiencesRes.error) console.error("[experiences]", experiencesRes.error.message);
  if (toolsRes.error) console.error("[tools]", toolsRes.error.message);

  return {
    projects: projectsRes.data?.length ? (projectsRes.data as Project[]) : mockProjects,
    education: educationRes.data?.length ? (educationRes.data as Education[]) : mockEducation,
    experiences: experiencesRes.data?.length ? (experiencesRes.data as Experience[]) : mockExperiences,
    tools: toolsRes.data?.length ? (toolsRes.data as Tool[]) : mockTools,
  };
}

export default async function Home() {
  const { projects, education, experiences, tools } = await getData();

  return (
    <main className="min-h-screen relative" style={{ background: "var(--bg-page)" }}>
      {/* Orbs */}
      <div className="orb-wrap fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: "rgba(124,58,237,0.18)" }} />
        <div className="orb-2 absolute bottom-[20%] left-[-150px] w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: "rgba(109,40,217,0.12)" }} />
      </div>
      {/* Grid */}
      <div className="grid-pattern-wrap fixed inset-0 grid-pattern pointer-events-none" />

      <Navbar />
      <Hero />
      <About />
      <EduExp education={education} experiences={experiences} />
      <Projects data={projects} />
      <Tools data={tools} />
      <Footer />
    </main>
  );
}
