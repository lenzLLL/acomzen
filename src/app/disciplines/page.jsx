import { Trophy, Dumbbell, Zap, Smartphone, Video } from "lucide-react";

export default function DisciplinesPage() {
  const disciplines = [
    {
      name: "Football",
      description:
        "Le sport roi en Afrique. Accompagnement des joueurs, entraîneurs et clubs dans leur développement professionnel.",
      emoji: "⚽",
    },
    {
      name: "Basketball",
      description:
        "Gestion de carrière et développement des talents dans cette discipline en pleine croissance sur le continent.",
      emoji: "🏀",
    },
    {
      name: "Volleyball",
      description:
        "Services dédiés aux volleyeurs et clubs pour optimiser performances et opportunités professionnelles.",
      emoji: "🏐",
    },
    {
      name: "Handball",
      description:
        "Accompagnement spécialisé pour les handballeurs camerounais et africains.",
      emoji: "🤾",
    },
    {
      name: "Athlétisme",
      description:
        "Soutien complet des athlètes : entraînement, compétitions, sponsoring et gestion de carrière. Compétitions d'endurance sur des distances plus longues, 400m, 800m, 1000m, 8000m. Compétitions de sprint sur 100m et 200m.",
      emoji: "🏃",
    },
    {
      name: "Tennis",
      description:
        "Services personnalisés pour les joueurs de tennis : coaching, tournois et développement professionnel.",
      emoji: "🎾",
    },
    {
      name: "Kung-fu",
      description:
        "Art martial chinois qui se concentre sur la discipline et la technique.",
      emoji: "🥋",
    },
    {
      name: "Boxe",
      description:
        "Sport de combat qui met l'accent sur la technique et la stratégie.",
      emoji: "🥊",
    },
    {
      name: "Karaté",
      description:
        "Art martial japonais qui se concentre sur les coups de poing et de pied.",
      emoji: "🥋",
    },
    {
      name: "Nambudo",
      description:
        "Art martial qui combine plusieurs techniques de combat.",
      emoji: "🥋",
    },
    {
      name: "Marche",
      description:
        "Activité physique bénéfique pour la santé et le bien-être.",
      emoji: "🚶",
    },
    {
      name: "Rugby",
      description:
        "Sport d'équipe qui nécessite force et stratégie.",
      emoji: "🏉",
    },
    {
      name: "Taekwondo",
      description:
        "Art martial coréen qui se concentre sur les coups de pied et de poing, discipline olympique.",
      emoji: "🥋",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Disciplines Sportives
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
            ACOMZÉN accompagne les sportifs dans diverses disciplines pratiquées
            au Cameroun
          </p>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Sports{" "}
              <span className="text-[#FFA500]">Collectifs & Individuels</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Nous offrons nos services dans les principales disciplines
              sportives pratiquées au Cameroun, avec une expertise adaptée aux
              spécificités de chaque sport.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {disciplines.map((discipline, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-[#B91C2E]"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 md:mb-4 text-center">
                  {discipline.emoji}
                </div>
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                  {discipline.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-center">
                  {discipline.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Dumbbell size={32} className="text-white sm:w-10 sm:h-10" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                <span className="text-[#FFA500]">Fitness</span> & Préparation
                Physique
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Au-delà des disciplines sportives traditionnelles, ACOMZÉN
                propose également des services dédiés au{" "}
                <strong>fitness et à la préparation physique</strong>.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Nos programmes incluent :
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-6">
                <li className="flex items-start">
                  <span className="text-[#B91C2E] mr-2">•</span>
                  <span>Salles de fitness équipées et modernes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B91C2E] mr-2">•</span>
                  <span>Programmes d'entraînement personnalisés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B91C2E] mr-2">•</span>
                  <span>Coaching professionnel et suivi nutritionnel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B91C2E] mr-2">•</span>
                  <span>Préparation physique pour sportifs de haut niveau</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#FFA500] to-[#B91C2E] rounded-2xl shadow-2xl flex items-center justify-center">
                <Dumbbell size={80} className="text-white opacity-20 sm:w-32 sm:h-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologie Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white rounded-lg shadow-lg p-10">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                <Zap size={36} className="text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-3">Technologie du Sport <span className="text-[#FFA500]">🏋️‍♂️</span></h2>
                <p className="mb-4 text-white/90 leading-relaxed">
                  La technologie du sport regroupe outils, équipements et solutions numériques (capteurs, IA, analyse vidéo, infrastructures connectées, e‑sport) qui améliorent la performance, la sécurité, l’expérience des spectateurs et la gestion des clubs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold mb-2">Équipements & solutions</h3>
                    <ul className="text-white/90 space-y-1">
                      <li>Chaussures, vêtements, terrains intelligents</li>
                      <li>Logiciels, IA, réalité augmentée, big data</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Domaines principaux</h3>
                    <ul className="text-white/90 space-y-1">
                      <li>Performance : capteurs biométriques, analyse vidéo</li>
                      <li>Prévention : suivi en temps réel, matériaux innovants</li>
                      <li>Expérience spectateurs & gestion : AR/VR, billetterie numérique</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Applications</h3>
                    <ul className="text-white/90 space-y-1">
                      <li>Suivi via applications mobiles adaptées aux réalités locales</li>
                      <li>Plateformes e-learning pour former entraîneurs et athlètes</li>
                      <li>Infrastructures intelligentes (terrains avec capteurs, salles connectées)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <a href="/technologie" className="inline-flex items-center justify-center gap-2 bg-white text-[#B91C2E] font-bold py-2 px-4 text-xs sm:text-sm rounded-full hover:shadow-lg transition">
                    <Smartphone size={16} /> Découvrir plus
                  </a>
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold py-2 px-4 text-xs sm:text-sm rounded-full hover:bg-white hover:text-[#B91C2E] transition">
                    <Video size={16} /> Nous contacter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy size={48} className="mx-auto mb-4 sm:mb-6 opacity-90 sm:w-16 sm:h-16" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Votre discipline n'est pas listée ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 lg:text-xl">
            Contactez-nous ! Nous sommes ouverts à accompagner des sportifs dans
            d'autres disciplines sportives.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 sm:px-8 py-2.5 sm:py-4 bg-white text-[#B91C2E] font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl text-sm sm:text-base"
            >
              Nous contacter
            </a>
            <a
              href="/inscription"
              className="px-6 sm:px-8 py-2.5 sm:py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#B91C2E] transition-all text-sm sm:text-base"
            >
              S'inscrire
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
