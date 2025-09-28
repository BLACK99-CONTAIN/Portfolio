import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "dasparantack@gmail.com",
      link: "mailto:dasparantack@gmail.com",
    },
    {
      icon: Phone,
      text: "+91 8768136339",
      link: "tel:+918768136339",
    },
    {
      icon: MapPin,
      text: "DLF I, Newtown, Sector II, Kolkata, India",
      link: null,
    },
    {
      icon: Linkedin,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/parantack-das-087149255/",
    },
    {
      icon: Github,
      text: "GitHub",
      link: "https://github.com/BLACK99-CONTAIN",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-12 font-racing tracking-wider text-racing-red-500 drop-shadow-lg">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-md border border-gray-700 hover:border-racing-red-500 transition"
                >
                  <div className="p-3 rounded-full bg-racing-red-500/20 mr-4">
                    <Icon className="w-6 h-6 text-racing-red-400" />
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-200 hover:text-racing-red-400 transition"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-lg text-gray-200">{item.text}</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-racing-red-500/50 space-y-6"
          >
            <div>
              <label className="block mb-2 text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 text-white focus:ring-2 focus:ring-racing-red-500 outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 text-white focus:ring-2 focus:ring-racing-red-500 outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 text-white focus:ring-2 focus:ring-racing-red-500 outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-racing-red-600 to-neon-blue-600 text-white font-semibold tracking-wide shadow-lg hover:shadow-neon transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
