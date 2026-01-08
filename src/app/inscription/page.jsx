"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function InscriptionPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    pays: "",
    type_inscription: "",
    discipline_ou_fitness: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const pays = [
    "Cameroun",
    "France",
    "Belgique",
    "Suisse",
    "Canada",
    "États-Unis",
    "Royaume-Uni",
    "Allemagne",
    "Espagne",
    "Italie",
    "Nigeria",
    "Sénégal",
    "Côte d'Ivoire",
    "Gabon",
    "Congo",
    "RDC",
    "Maroc",
    "Algérie",
    "Tunisie",
    "Autre",
  ];

  const disciplines = [
    "Football",
    "Basketball",
    "Volleyball",
    "Handball",
    "Athlétisme",
    "Tennis",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/inscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erreur lors de l'inscription");
      }

      setSuccess(true);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        pays: "",
        type_inscription: "",
        discipline_ou_fitness: "",
      });
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Inscription Réussie !
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Merci de votre inscription. Nous avons bien reçu vos informations et
            nous vous contacterons très bientôt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-6 py-3 bg-[#B91C2E] text-white font-semibold rounded-full hover:bg-[#9a1726] transition-all"
            >
              Retour à l'accueil
            </a>
            <button
              onClick={() => setSuccess(false)}
              className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-all"
            >
              Nouvelle inscription
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Inscription</h1>
          <p className="text-xl max-w-3xl">
            Rejoignez ACOMZÉN SPORTS MANAGEMENT et bénéficiez d'un
            accompagnement professionnel
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#B91C2E]">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Formulaire d'inscription
            </h2>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                <AlertCircle size={20} className="text-red-600" />
                <p className="text-red-600">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B91C2E] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B91C2E] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B91C2E] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  placeholder="+237 6XX XX XX XX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B91C2E] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pays *
                </label>
                <select
                  name="pays"
                  value={formData.pays}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B91C2E] focus:border-transparent"
                >
                  <option value="">Sélectionnez votre pays</option>
                  {pays.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type d'inscription *
                </label>
                <select
                  name="type_inscription"
                  value={formData.type_inscription}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B91C2E] focus:border-transparent"
                >
                  <option value="">Sélectionnez le type</option>
                  <option value="discipline">Discipline sportive</option>
                  <option value="fitness">Salle de fitness</option>
                </select>
              </div>

              {formData.type_inscription === "discipline" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discipline sportive
                  </label>
                  <select
                    name="discipline_ou_fitness"
                    value={formData.discipline_ou_fitness}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B91C2E] focus:border-transparent"
                  >
                    <option value="">Sélectionnez une discipline</option>
                    {disciplines.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {formData.type_inscription === "fitness" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Programme fitness souhaité
                  </label>
                  <input
                    type="text"
                    name="discipline_ou_fitness"
                    value={formData.discipline_ou_fitness}
                    onChange={handleChange}
                    placeholder="Ex: Musculation, Cardio, Yoga..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B91C2E] focus:border-transparent"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#B91C2E] to-[#FFA500] text-white font-bold rounded-full hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Envoi en cours..." : "S'inscrire"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
