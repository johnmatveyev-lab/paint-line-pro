import Link from "next/link";
import { Paintbrush, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center">
                <Paintbrush className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl">
                Paint Line <span className="text-teal-400">Pro</span>
              </span>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed">
              Premium painting for apartments, flips, renovations & new construction across the Southeast. Powered by AI visualization and trusted paint partners.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-teal-400">Services</h4>
            <ul className="space-y-2 text-sm text-navy-300">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Commercial</li>
              <li>New Construction</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-teal-400">Company</h4>
            <ul className="space-y-2 text-sm text-navy-300">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/quote" className="hover:text-white transition">Get a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-teal-400">Contact</h4>
            <ul className="space-y-3 text-sm text-navy-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                <span>Serving the entire Southeast US</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <a href="tel:+18005550199" className="hover:text-white">(800) 555-0199</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <a href="mailto:hello@paintlinepro.com" className="hover:text-white">hello@paintlinepro.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-navy-400">
          <p>© 2026 Paint Line Pro. All rights reserved.</p>
          <p>Proud partners of Sherwin-Williams & Benjamin Moore</p>
        </div>
      </div>
    </footer>
  );
}
