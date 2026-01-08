import { Linkedin, Mail, Users } from "lucide-react";

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
           backgroundImage: "url('/s3.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">PDG & Équipe</h1>
          <p className="text-xl max-w-3xl">
            Une équipe passionnée et visionnaire au service de votre réussite
          </p>
        </div>
      </section>

      {/* PDG Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo du PDG */}
            <div className="relative">
              <div className="aspect-square rounded-2xl shadow-2xl overflow-hidden">
                <img src="/pdg.jpeg" alt="PDG Styve Zoalang" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Description du PDG */}
            <div>
              <div className="mb-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  STYVE ZOALANG
                </h2>
                <p className="text-xl text-[#B91C2E] font-semibold">
                  Président Directeur Général
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Styve Zoalang</strong> est un passionné de sport dont
                  la vision a donné naissance à ACOMZÉN SPORTS MANAGEMENT.
                  Entrepreneur visionnaire et stratège accompli, il place le
                  sport au cœur du développement économique et social de
                  l'Afrique.
                </p>
                <p>
                  Son ambition est claire :{" "}
                  <strong>
                    créer un écosystème sportif professionnel et rentable en
                    Afrique
                  </strong>
                  , où les talents peuvent s'épanouir et atteindre leur plein
                  potentiel tout en bénéficiant d'un accompagnement de classe
                  mondiale.
                </p>
                <p>
                  Avec une connaissance approfondie du marché sportif
                  camerounais et africain, Styve Zoalang s'engage à transformer
                  l'industrie du sport sur le continent en apportant innovation,
                  professionnalisme et intégrité à chaque projet.
                </p>
                <p className="font-semibold text-[#B91C2E]">
                  "Concentrez-vous sur le jeu, nous nous occupons du reste" -
                  c'est plus qu'un slogan, c'est notre engagement envers chaque
                  sportif que nous accompagnons.
                </p>
              </div>

              <div className="mt-8 flex space-x-4">
                <a
                  href="mailto:acomzen.sm@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-[#B91C2E] text-white font-semibold rounded-full hover:bg-[#9a1726] transition-all hover:shadow-lg"
                >
                  <Mail size={18} className="mr-2" />
                  Contacter
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-all"
                >
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              La Vision du <span className="text-[#FFA500]">Fondateur</span>
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#B91C2E]">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Notre vision est de bâtir un écosystème sportif où excellence et
                professionnalisme se conjuguent pour créer des opportunités
                durables pour les sportifs africains.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous croyons fermement que le sport africain possède un
                potentiel immense qui ne demande qu'à être révélé grâce à un
                accompagnement adapté, des infrastructures modernes et une
                gestion professionnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre <span className="text-[#B91C2E]">Équipe</span>
            </h2>
            <p className="text-lg text-gray-600">
              Des professionnels dévoués à votre service
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white p-12 rounded-2xl text-center">
            <Users size={64} className="mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">
              Notre équipe est en cours de constitution
            </h3>
            <p className="text-lg max-w-2xl mx-auto mb-6">
              Nous recrutons actuellement des professionnels talentueux et
              passionnés pour rejoindre notre équipe et contribuer à notre
              mission de transformer le sport africain.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-[#B91C2E] font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl"
            >
              Nous rejoindre
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
