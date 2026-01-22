import {
  ArrowRight,
  Trophy,
  Users,
  Target,
  Sparkles,
  CheckCircle,
  Zap,
  Heart,
  Video,
  Smartphone,
} from "lucide-react";
import ImageSlider from "../components/ImageSlider";
import Faq from "../components/faq";

export default function HomePage() {
  const services = [
    {
      title: "Gestion de Carrière",
      description: "Accompagnement personnalisé des sportifs professionnels",
      icon: Trophy,
    },
    {
      title: "Jeunes Talents",
      description: "Détection et développement des futurs champions",
      icon: Users,
    },
    {
      title: "Management Sportif",
      description: "Services pour clubs, fédérations et sponsors",
      icon: Target,
    },
    {
      title: "Excellence & Innovation",
      description: "Coaching, médecine du sport et infrastructures",
      icon: Sparkles,
    },
  ];

  const values = [
    { title: "Passion ", description: "Le sport au cœur de notre ADN" },
    { title: "Innovation", description: "Des solutions modernes et efficaces" },
    { title: "Intégrité", description: "Transparence et professionnalisme" },
    { title: "Excellence", description: "Recherche permanente de performance et de qualité" },
  ];

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
        "Soutien complet des athlètes : entraînement, compétitions, sponsoring et gestion de carrière.",
      emoji: "🏃",
    },
    {
      name: "Tennis",
      description:
        "Services personnalisés pour les joueurs de tennis : coaching, tournois et développement professionnel.",
      emoji: "🎾",
    },
  ];

  const partners = [
    {
      name: "Reform Sports",
      logo: "https://ucarecdn.com/e9cdc71a-06a4-463f-8bec-c09bed8ee16f/-/format/auto/",
    },
    {
      name: "Ideal Medic Pharma",
      logo: "https://ucarecdn.com/ef2683c9-b728-4051-ad18-ab56de9257c6/-/format/auto/",
    },
    {
      name: "Same Éducation",
      logo: "https://ucarecdn.com/e40eb4ed-3382-47dc-b661-e7ac78ec3090/-/format/auto/",
    },
    {
      name: "Second Harvard Shina",
      logo: "https://ucarecdn.com/b8ea732c-663b-40a9-8293-2ad2696e2d70/-/format/auto/",
    },
    {
      name: "Bantoucao",
      logo: "https://ucarecdn.com/aadec807-249e-405e-b31b-c0263a244100/-/format/auto/",
    },
    {
      name: "PIGA Groupe",
      logo: "https://ucarecdn.com/3a96073d-b7c7-473d-96cf-ee9b7f5021a6/-/format/auto/",
    },
    {
      name: "Terrific Coffee",
      logo: "https://ucarecdn.com/115502b7-e736-4012-8ae3-6e8c20e47818/-/format/auto/",
    },
    {
      name: "Asenia",
      logo: "https://ucarecdn.com/3d258937-2306-4e87-8240-501e51664aac/-/format/auto/",
    },
    {
      name: "Dollars Bijoux",
      logo: "/n1.jpeg",
    },
    {
      name: "MK Industry",
      logo: "/n2.jpeg",
    },
    {
      name: "Ecole Bilingue technique Aurum",
      logo: "/n3.jpeg",
    },
    {
      name: "Mayen",
      logo: "/n4.jpeg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-[#B91C2E] via-[#9a1726] to-[#FFA500] text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600')",
          }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Concentrez-vous sur le jeu,
              <br />
              <span className="text-[#FFA500]">
                nous nous occupons du reste
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Management et marketing sportif professionnel au Cameroun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/inscription"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#B91C2E] font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl text-lg"
              >
                S'inscrire maintenant
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#B91C2E] transition-all text-lg"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bienvenue chez{" "}
              <span className="text-[#B91C2E]">ACOMZÉN SPORTS MANAGEMENT</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fondée en 2024 au Cameroun, ACOMZÉN est une agence de management
              et marketing sportif dédiée à l'excellence. Nous accompagnons les
              sportifs, clubs et fédérations vers le succès grâce à notre
              expertise et notre passion pour le sport africain.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-[#FFA500]">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Des solutions complètes pour votre réussite sportive
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-[#B91C2E]"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="/prestations"
              className="inline-flex items-center px-6 py-3 bg-[#B91C2E] text-white font-semibold rounded-full hover:bg-[#9a1726] transition-all hover:shadow-lg"
            >
              Découvrir toutes nos prestations
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-[#FFA500]">Valeurs</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h3 className="value-card-title">{value.title}</h3>
                <p className="value-card-desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines Grid (copied from /disciplines) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sports <span className="text-[#FFA500]">Collectifs & Individuels</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous offrons nos services dans les principales disciplines sportives pratiquées au Cameroun.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {disciplines.map((discipline, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-[#B91C2E]"
              >
                <div className="text-6xl mb-4 text-center">{discipline.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{discipline.name}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{discipline.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologie du Sport */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologie du <span className="text-[#B91C2E]">Sport</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Innovations numériques et équipements modernes pour améliorer la performance, la sécurité et l'expérience sportive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Video className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Analyse Vidéo & Performance
              </h3>
              <p className="text-gray-700">
                Logiciels d'analyse vidéo pour corriger les gestes techniques et optimiser chaque mouvement
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Suivi Biométrique
              </h3>
              <p className="text-gray-700">
                Capteurs connectés pour mesurer rythme cardiaque, fatigue et prévenir les blessures
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-[#B91C2E] to-[#FFA500] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Infrastructures Intelligentes
              </h3>
              <p className="text-gray-700">
                Terrains avec capteurs, salles de fitness connectées et centres d'entraînement équipés
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white rounded-xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Domaines Couverts</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-[#FFA500] font-bold mr-2">✓</span> Performance des athlètes
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FFA500] font-bold mr-2">✓</span> Prévention des blessures
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FFA500] font-bold mr-2">✓</span> Expérience spectateurs
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FFA500] font-bold mr-2">✓</span> Gestion numérique des clubs
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Nos Solutions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-[#FFA500] font-bold mr-2">✓</span> Applications mobiles adaptées
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FFA500] font-bold mr-2">✓</span> Plateformes e-learning
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FFA500] font-bold mr-2">✓</span> Big data et IA
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#FFA500] font-bold mr-2">✓</span> Réalité augmentée/virtuelle
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/technologie"
              className="inline-flex items-center px-8 py-3 bg-[#B91C2E] text-white font-semibold rounded-full hover:bg-[#9a1726] transition-all hover:shadow-lg"
            >
              Explorer la technologie du sport
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      <ImageSlider />

      <Faq />

      {/* Partenaires Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-[#FFA500]">Partenaires</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ils nous font confiance pour développer le sport africain
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/partenaires"
              className="inline-flex items-center px-6 py-3 bg-[#B91C2E] text-white font-semibold rounded-full hover:bg-[#9a1726] transition-all hover:shadow-lg"
            >
              Découvrir nos partenariats
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à franchir le prochain niveau ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez ACOMZÉN et bénéficiez d'un accompagnement professionnel
            pour votre carrière sportive
          </p>
          <a
            href="/inscription"
            className="inline-flex items-center px-8 py-4 bg-white text-[#B91C2E] font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl text-lg"
          >
            Inscrivez-vous gratuitement
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
