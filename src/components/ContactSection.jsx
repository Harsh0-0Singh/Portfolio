import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleSubmit = async(e) => {
    setLoading(true);
    e.preventDefault();
    try {
     const formData = new FormData(e.target);
    formData.append("access_key", "b387ec63-880e-43ab-8b6f-8fdb8e176e42");
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      console.log("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error");
    }
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className=" ">
                  <h4 className="font-medium">Email </h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="mailto:harshsingh9hrs@gmail.com"
                  >
                    harshsingh9hrs@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Phone </h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="tel:+916307756664"
                  >
                    +91 6307756664
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Location </h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Lucknow, Uttar Pradesh
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4 justify-center ">
                <a href="https://www.linkedin.com/in/harsh-singh-4a263328b/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/harsh0_0singh/" target="_blank">
                  <Instagram />
                </a>
                <a href="https://github.com/Harsh0-0Singh" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg  shadow-sx">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label
                  htmlFor="name"
                  className="block ml-1 text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:ring-2 focus:outline-hidden focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block ml-1 text-sm font-medium mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:ring-2 focus:outline-hidden focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block ml-1 text-sm font-medium mb-2"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:ring-2 focus:outline-hidden focus:ring-primary resize-none"
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {loading ? "Submitting" : "Submit"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
