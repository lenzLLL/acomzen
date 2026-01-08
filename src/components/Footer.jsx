import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <img
              src="https://ucarecdn.com/d2b158f4-f471-47b8-b812-2cdba72e0bc7/-/format/auto/"
              alt="ACOMZÉN Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              Management et marketing sportif au Cameroun. Concentrez-vous sur
              le jeu, nous nous occupons du reste.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFA500]">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/qui-sommes-nous"
                  className="text-gray-400 hover:text-[#FFA500] transition-colors"
                >
                  Qui sommes-nous
                </a>
              </li>
              <li>
                <a
                  href="/prestations"
                  className="text-gray-400 hover:text-[#FFA500] transition-colors"
                >
                  Nos Prestations
                </a>
              </li>
              <li>
                <a
                  href="/disciplines"
                  className="text-gray-400 hover:text-[#FFA500] transition-colors"
                >
                  Disciplines
                </a>
              </li>
              <li>
                <a
                  href="/actualites"
                  className="text-gray-400 hover:text-[#FFA500] transition-colors"
                >
                  Actualités
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFA500]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={18} className="text-[#B91C2E] mt-1 flex-shrink-0" />
                <a
                  href="mailto:acomzen.sm@gmail.com"
                  className="text-gray-400 hover:text-[#FFA500] text-sm"
                >
                  acomzen.sm@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone
                  size={18}
                  className="text-[#B91C2E] mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+237694868694"
                  className="text-gray-400 hover:text-[#FFA500] text-sm"
                >
                  +237 694 86 86 94
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin
                  size={18}
                  className="text-[#B91C2E] mt-1 flex-shrink-0"
                />
                <span className="text-gray-400 text-sm">
                  Douala & Yaoundé, Cameroun
                </span>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFA500]">
              Suivez-nous
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B91C2E] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B91C2E] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B91C2E] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4 italic">
              À personnaliser avec vos comptes
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ACOMZÉN SPORTS MANAGEMENT. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
