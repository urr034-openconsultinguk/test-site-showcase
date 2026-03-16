import { motion } from "framer-motion";
import { Palette, Search, Megaphone, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Palette, title: "Web Design", desc: "Creative and responsive designs." },
  { icon: Search, title: "SEO Optimization", desc: "Improve your search rankings." },
  { icon: Megaphone, title: "Marketing", desc: "Boost your online presence." },
  { icon: Headphones, title: "Support", desc: "24/7 customer support." },
];

const ServicesSection = () => (
  <section id="services" className="section-alt py-20 md:py-28">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14"
      >
        Our Services
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-lg p-8 shadow-soft hover:shadow-lift transition-shadow duration-200 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1">{s.desc}</p>
            <Button variant="outline" size="sm">Learn More</Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
