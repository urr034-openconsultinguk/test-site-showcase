import { motion } from "framer-motion";
import { Zap, Layers, Shield } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast", desc: "Quick and efficient performance." },
  { icon: Layers, title: "Simple", desc: "Easy to use and customize." },
  { icon: Shield, title: "Reliable", desc: "Built for stability and security." },
];

const FeaturesSection = () => (
  <section className="section-alt py-20 md:py-28">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14"
      >
        Features
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lift transition-shadow duration-200"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <f.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
