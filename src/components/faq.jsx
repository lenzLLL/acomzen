"use client";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "Comment puis-je m'inscrire ?",
    a: "Rendez-vous sur la page d'inscription, remplissez le formulaire et notre équipe vous contactera pour la suite.",
  },
  {
    q: "Quels services proposez-vous pour les jeunes talents ?",
    a: "Détection, formation, préparation physique et accompagnement marketing pour aider les jeunes athlètes à démarrer leur carrière.",
  },
  {
    q: "Travaillez-vous avec des clubs et fédérations ?",
    a: "Oui — nous proposons du management, du conseil stratégique et des services de partenariats pour structures sportives.",
  },
  {
    q: "Proposez-vous des services de médecine du sport ?",
    a: "Nous collaborons avec des partenaires médicaux spécialisés pour proposer bilans, prévention et suivi des blessures.",
  },
  {
    q: "Comment puis-je devenir partenaire ?",
    a: "Contactez-nous via la page contact ou envoyez un message direct ; nous serons ravis de discuter d'un partenariat.",
  },
];

export default function Faq() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Foire aux <span className="text-[#FFA500]">Questions</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Toutes les réponses aux questions les plus fréquentes sur nos
            services et partenariats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={i}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-md border border-gray-100"
            >
              <summary className="list-none cursor-pointer flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
                <ChevronDown size={20} className="text-gray-500" />
              </summary>
              <div className="mt-3 text-gray-600 text-base">
                <p className="leading-relaxed">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
