import {
  ExperienceSection,
  ExpertSection,
  FAQSection,
  Header,
  HeroSection,
  JobUpdatesSection,
  ServicesSection,
  Footer,
} from "../components";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExpertSection />
        <JobUpdatesSection />
        <ExperienceSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
