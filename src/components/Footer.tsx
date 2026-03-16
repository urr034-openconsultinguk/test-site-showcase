import { Facebook, Twitter, Linkedin, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">URR034</h3>
          <p className="text-primary-foreground/70 text-sm">© 2022 URR034. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2"><Phone size={14} /> +1 (555) 123-4567</div>
            <div className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /> 123 Test Street, Sample City, CA 90001, USA</div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
