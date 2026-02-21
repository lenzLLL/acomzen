import { Trophy,CheckCircle, Target, Heart, Users } from "lucide-react";

export default function QuiSommesNous() {
  const values = [
    { title: "Passion", description: "Le sport au cœur de notre ADN" },
    { title: "Innovation", description: "Des solutions modernes et efficaces" },
    { title: "Intégrité", description: "Transparence et professionnalisme" },
    { title: "Excellence", description: "Recherche permanente de performance et de qualité" },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white py-8 sm:py-12 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
          
             backgroundImage: "url('/s3.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Qui sommes-nous
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
            ACOMZÉN SPORTS MANAGEMENT : Votre partenaire pour l'excellence
            sportive en Afrique
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Notre <span className="text-[#B91C2E]">Histoire</span>
              </h2>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                <p>
                  Fondée en <strong>2024</strong> au Cameroun, ACOMZÉN SPORTS
                  MANAGEMENT est née d'une vision ambitieuse : créer un
                  écosystème sportif professionnel et rentable en Afrique.
                </p>
                <p>
                  Notre agence de management et marketing sportif s'engage à
                  accompagner les sportifs, les clubs, les fédérations et les
                  partenaires dans leur quête d'excellence et de réussite.
                </p>
                <p>
                  Basés à Douala et Yaoundé, nous combinons expertise locale et
                  vision internationale pour offrir des services de classe
                  mondiale adaptés aux réalités du continent africain.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl shadow-2xl overflow-hidden">
                <img src="/pdg.jpeg" alt="PDG" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              Notre <span className="text-[#FFA500]">Mission & Vision</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg border-t-4 border-[#B91C2E]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Notre Mission
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                Offrir un accompagnement professionnel et personnalisé aux
                acteurs du sport africain, en mettant à leur disposition des
                services de management de carrière, de marketing sportif, et de
                développement d'infrastructures. Nous voulons permettre aux
                sportifs de se concentrer sur leur performance pendant que nous
                gérons le reste.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg border-t-4 border-[#FFA500]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#FFA500] to-[#B91C2E] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Trophy size={24} className="text-white" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Notre Vision
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                Devenir l'agence de référence en management sportif en Afrique
                centrale et au-delà. Nous aspirons à créer un écosystème sportif
                dynamique, rentable et durable qui valorise les talents
                africains et contribue au développement du sport sur le
                continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
       <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              Nos <span className="text-[#FFA500]">Valeurs</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h3 className="value-card-title text-sm sm:text-base lg:text-lg">{value.title}</h3>
                <p className="value-card-desc text-xs sm:text-sm lg:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Rejoignez l'aventure ACOMZÉN
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8">
            Ensemble, construisons le futur du sport africain
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/inscription"
              className="px-6 sm:px-8 py-2 sm:py-4 bg-white text-[#B91C2E] text-sm sm:text-base font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl"
            >
              S'inscrire
            </a>
            <a
              href="/contact"
              className="px-6 sm:px-8 py-2 sm:py-4 bg-transparent border-2 border-white text-white text-sm sm:text-base font-bold rounded-full hover:bg-white hover:text-[#B91C2E] transition-all"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
