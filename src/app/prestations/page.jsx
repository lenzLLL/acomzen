import {
  Trophy,
  Users,
  Briefcase,
  Brain,
  Scale,
  DollarSign,
  Stethoscope,
  Building,
  CalendarCheck,
  PenTool,
  Zap,
  Heart,
  Video,
} from "lucide-react";

export default function PrestationsPage() {
  const prestations = [
    {
      title: "Gestion de Carrière Sportive",
      description:
        "Accompagnement personnalisé des athlètes professionnels dans tous les aspects de leur carrière : négociations de contrats, stratégie de carrière, développement de marque personnelle et planification de reconversion.",
      icon: Trophy,
      color: "from-[#B91C2E] to-[#FFA500]",
    },
    {
      title: "Accompagnement des Jeunes Talents",
      description:
        "Détection, formation et développement des jeunes sportifs prometteurs. Programme d'encadrement complet incluant coaching sportif, soutien scolaire et préparation mentale.",
      icon: Users,
      color: "from-[#FFA500] to-[#B91C2E]",
    },
    {
      title: "Services pour Clubs & Fédérations",
      description:
        "Conseil stratégique, gestion administrative, recherche de sponsors et partenaires, organisation d'événements sportifs et développement de programmes de formation.",
      icon: Briefcase,
      color: "from-[#B91C2E] to-[#FFA500]",
    },
    {
      title: "Coaching Sportif & Mental",
      description:
        "Programmes de coaching personnalisés combinant préparation physique, technique et mentale. Suivi psychologique pour optimiser les performances et la gestion du stress.",
      icon: Brain,
      color: "from-[#FFA500] to-[#B91C2E]",
    },
    {
      title: "Droit du Sport",
      description:
        "Conseil juridique spécialisé : rédaction et négociation de contrats, gestion des litiges, protection du droit à l'image et conformité réglementaire.",
      icon: Scale,
      color: "from-[#B91C2E] to-[#FFA500]",
    },
    {
      title: "Gestion de Patrimoine",
      description:
        "Conseils financiers adaptés aux sportifs : planification fiscale, investissements, épargne retraite et gestion du patrimoine à long terme.",
      icon: DollarSign,
      color: "from-[#FFA500] to-[#B91C2E]",
    },
    {
      title: "Médecine du Sport",
      description:
        "Accès à un réseau de professionnels de santé spécialisés : médecins du sport, kinésithérapeutes, nutritionnistes et préparateurs physiques.",
      icon: Stethoscope,
      color: "from-[#B91C2E] to-[#FFA500]",
    },
    {
      title: "Infrastructures Sportives",
      description:
        "Conception, construction et entretien d'infrastructures sportives modernes : terrains, salles de sport, centres d'entraînement et équipements.",
      icon: Building,
      color: "from-[#FFA500] to-[#B91C2E]",
    },
    {
      title: "Organisation de Compétitions",
      description:
        "Planification et organisation complète de compétitions sportives : logistique, communication, recherche de sponsors et gestion des événements.",
      icon: CalendarCheck,
      color: "from-[#B91C2E] to-[#FFA500]",
    },
    {
      title: "Traçage d'Aires de Jeux",
      description:
        "Service professionnel de traçage et marquage de terrains de sport selon les normes internationales pour toutes les disciplines.",
      icon: PenTool,
      color: "from-[#FFA500] to-[#B91C2E]",
    },
    {
      title: "Analyse Vidéo & Performance",
      description:
        "Logiciels d'analyse vidéo et capteurs biométriques pour corriger les gestes techniques, mesurer la performance et optimiser l'entraînement.",
      icon: Video,
      color: "from-[#B91C2E] to-[#FFA500]",
    },
    {
      title: "Suivi Biométrique",
      description:
        "Capteurs connectés et outils de suivi en temps réel : rythme cardiaque, fatigue, charge d'entraînement et prévention des blessures.",
      icon: Heart,
      color: "from-[#FFA500] to-[#B91C2E]",
    },
    {
      title: "Infrastructures Intelligentes",
      description:
        "Conception d'infrastructures sportives modernes avec capteurs intégrés : terrains intelligents, salles de fitness connectées et centres d'entraînement équipés.",
      icon: Zap,
      color: "from-[#B91C2E] to-[#FFA500]",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Prestations
          </h1>
          <p className="text-xl max-w-3xl">
            Des services complets et professionnels pour accompagner votre
            réussite sportive
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Une Offre <span className="text-[#FFA500]">360°</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              ACOMZÉN SPORTS MANAGEMENT vous propose une gamme complète de
              services adaptés aux besoins spécifiques des sportifs, clubs,
              fédérations et partenaires. Notre approche globale garantit un
              accompagnement de qualité à chaque étape de votre parcours.
            </p>
          </div>

          {/* Grille des prestations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prestations.map((prestation, index) => {
              const Icon = prestation.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border-t-4 border-[#B91C2E]"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${prestation.color} rounded-lg flex items-center justify-center mb-6`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {prestation.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {prestation.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Intéressé par nos services ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour discuter de vos besoins et découvrir comment
            nous pouvons vous accompagner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-[#B91C2E] font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl"
            >
              Nous contacter
            </a>
            <a
              href="/inscription"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#B91C2E] transition-all"
            >
              S'inscrire
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
