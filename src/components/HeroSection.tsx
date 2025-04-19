
export default function HeroSection() {
  return (
    <section id="home" className="section pt-20 md:pt-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 animate-fade-in">
            Hi, I'm <span className="text-primary">Muhammed Aslam</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Full Stack Web Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <a href="#projects" className="button">
              View My Work
            </a>
            <a href="#contact" className="button bg-transparent border border-primary text-primary hover:bg-primary/10">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
