import { Badge } from "@/components/ui/badge";
import { Shield, Award, Truck, RefreshCw, Users, Leaf } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantie 12 mois",
    description: "Tous nos produits sont garantis 12 mois pièces et main-d'œuvre"
  },
  {
    icon: Award,
    title: "50+ tests qualité",
    description: "Chaque produit passe plus de 50 tests de contrôle qualité"
  },
  {
    icon: Truck,
    title: "Livraison gratuite",
    description: "Livraison gratuite dès 50€ d'achat, partout en France"
  },
  {
    icon: RefreshCw,
    title: "Retours 30 jours",
    description: "Satisfait ou remboursé sous 30 jours, sans question"
  },
  {
    icon: Users,
    title: "+12k clients",
    description: "Plus de 12 000 clients nous font confiance chaque jour"
  },
  {
    icon: Leaf,
    title: "Impact CO2 -85%",
    description: "Réduisez votre empreinte carbone de 85% vs l'achat neuf"
  }
];

const certifications = [
  {
    name: "ISO 14001",
    description: "Management environnemental"
  },
  {
    name: "R2 Certified",
    description: "Recyclage responsable"
  },
  {
    name: "EPEAT Gold",
    description: "Certification écologique"
  }
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-secondary-light text-secondary font-medium px-4 py-2 mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Votre confiance, notre priorité
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Pourquoi choisir ReCircle ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous nous engageons à vous offrir une expérience d'achat exceptionnelle 
            avec des produits de qualité et un service client irréprochable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-primary-light p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-white mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Notre processus de reconditionnement
            </h3>
            <p className="text-lg text-muted-foreground">
              Découvrez comment nous transformons des appareils usagés en produits comme neufs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold mb-2">Réception</h4>
              <p className="text-sm text-muted-foreground">
                Collecte et tri des appareils selon des critères stricts
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold mb-2">Test & Diagnostic</h4>
              <p className="text-sm text-muted-foreground">
                50+ points de contrôle pour évaluer l'état réel
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold mb-2">Remise à neuf</h4>
              <p className="text-sm text-muted-foreground">
                Réparation et remplacement des pièces défectueuses
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="font-semibold mb-2">Certification</h4>
              <p className="text-sm text-muted-foreground">
                Validation finale et attribution du grade qualité
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Nos certifications</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-muted rounded-xl p-6 w-24 h-24 flex items-center justify-center mb-2">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <p className="font-medium text-sm">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;