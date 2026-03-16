import { motion } from "framer-motion";
import janeDoe from "@/assets/jane-doe.jpg";
import johnSmith from "@/assets/john-smith.jpg";
import aliceBrown from "@/assets/alice-brown.jpg";

const team = [
  { img: janeDoe, name: "Jane Doe", role: "Project Manager" },
  { img: johnSmith, name: "John Smith", role: "Lead Developer" },
  { img: aliceBrown, name: "Alice Brown", role: "Designer" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6"
      >
        About Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-14"
      >
        TestSite is a demonstration website built for testing and learning purposes. Our team is dedicated to creating clean, functional, and beautiful web experiences.
      </motion.p>
      <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <img src={t.img} alt={t.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-border" />
            <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
            <p className="text-muted-foreground text-sm">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
