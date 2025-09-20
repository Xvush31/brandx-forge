import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Clock, Truck, Phone, RotateCcw } from "lucide-react";

const Garanties = () => {
  const garantieFeatures = [
    {
      icon: Shield,
      title: "Garantie 12 mois",
      description: "Tous nos produits sont garantis 12 mois pièces et main d'œuvre",
      details: ["Remplacement gratuit", "Réparation express", "Support technique inclus"]
    },
    {
      icon: CheckCircle,
      title: "Tests rigoureux",
      description: "Chaque produit passe plus de 50 tests de qualité avant certification",
      details: ["Tests fonctionnels", "Tests de performance", "Tests de durabilité"]
    },
    {
      icon: RotateCcw,
      title: "Retours 30 jours",
      description: "Non satisfait ? Retournez votre produit sous 30 jours",
      details: ["Remboursement intégral", "Retour gratuit", "Sans justification"]
    },
    {
      icon: Truck,
      title: "Livraison sécurisée",
      description: "Livraison rapide et sécurisée avec suivi en temps réel",
      details: ["Livraison 24-48h", "Emballage renforcé", "Assurance incluse"]
    },
    {
      icon: Phone,
      title: "Support 7j/7",
      description: "Notre équipe d'experts est disponible pour vous accompagner",
      details: ["Chat en direct", "Support téléphonique", "FAQ détaillée"]
    },
    {
      icon: Clock,
      title: "Réparation express",
      description: "Réparation sous garantie en moins de 5 jours ouvrés",
      details: ["Diagnostic rapide", "Pièces d'origine", "Livraison incluse"]
    }
  ];

  const garantieTypes = [
    {
      name: "Garantie Standard",
      duration: "12 mois",
      price: "Incluse",
      features: [
        "Défauts de fabrication",
        "Dysfonctionnements matériels",
        "Support technique de base",
        "Réparation ou remplacement"
      ],
      badge: "Incluse",
      badgeColor: "bg-success"
    },
    {
      name: "Garantie Extended",
      duration: "24 mois",
      price: "89€",
      features: [
        "Tout ce qui est inclus dans la garantie standard",
        "Casse accidentelle (1 fois)",
        "Dégâts liquides (1 fois)",
        "Support prioritaire",
        "Remplacement express 24h"
      ],
      badge: "Populaire",
      badgeColor: "bg-primary"
    },
    {
      name: "Garantie Premium",
      duration: "36 mois",
      price: "149€",
      features: [
        "Tout ce qui est inclus dans la garantie Extended",
        "Casse accidentelle illimitée",
        "Dégâts liquides illimitées",
        "Batteries incluses",
        "Accessoires de remplacement",
        "Service à domicile"
      ],
      badge: "Meilleur rapport",
      badgeColor: "bg-gradient-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Nos Garanties</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Achetez en toute confiance avec nos garanties complètes et notre service après-vente exceptionnel
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {garantieFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Garantie Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Choisissez votre niveau de protection</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {garantieTypes.map((garantie, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'ring-2 ring-primary' : ''}`}>
                {garantie.badge && (
                  <Badge className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${garantie.badgeColor} text-white`}>
                    {garantie.badge}
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{garantie.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{garantie.price}</div>
                  <p className="text-muted-foreground">{garantie.duration} de protection</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {garantie.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Problème détecté</h3>
              <p className="text-sm text-muted-foreground">
                Contactez notre support via chat, téléphone ou email
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Diagnostic</h3>
              <p className="text-sm text-muted-foreground">
                Notre équipe technique évalue votre demande sous 24h
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Solution</h3>
              <p className="text-sm text-muted-foreground">
                Réparation, remplacement ou remboursement selon le cas
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Livraison</h3>
              <p className="text-sm text-muted-foreground">
                Récupération de votre produit réparé ou nouveau
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Garanties;