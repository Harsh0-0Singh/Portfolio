import { Briefcase, Code, User } from "lucide-react";
import React from "react";
// import cv from "../assets/Harsh_Singh_Resume.pdf"

export const AboutSection = () => {
  return (
    <section id="about" className="py-2 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              “Driven by a strong passion for web development, I specialize in
              building modern, high-performance web applications that not only
              help businesses stand out in a competitive market but also
              streamline and digitize processes to enhance efficiency and reduce
              costs.”
            </p>
            <p className="text-muted-foreground">
              I,m passionate about creating new and elegant solutions to complex
              problems and bringing your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Harsh_Resume.pdf"
                download="Harsh_Singh_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 ">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web development</h4>
                  <p className="text-muted-foreground">
                    Creating elegant websites and web applications with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web development</h4>
                  <p className="text-muted-foreground">
                    Creating elegant websites and web applications with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web development</h4>
                  <p className="text-muted-foreground">
                    Creating elegant websites and web applications with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
