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

  // Debug — hapus setelah data confirmed tampil
  console.log("[projects]", projectsRes.data?.length, projectsRes.error?.message);
  console.log("[education]", educationRes.data?.length, educationRes.error?.message);
  console.log("[experiences]", experiencesRes.data?.length, experiencesRes.error?.message);
  console.log("[tools]", toolsRes.data?.length, toolsRes.error?.message);

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
    <main className="min-h-screen bg-[#0B0B0F] relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="orb-2 absolute bottom-[20%] left-[-150px] w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[80px]" />
      </div>
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
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
