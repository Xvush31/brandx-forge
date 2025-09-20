import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Laptop, Tablet, Headphones, Watch, Camera } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Smartphones",
    icon: Smartphone,
    count: "2,847",
    savings: "Jusqu'à -75%",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    popular: true
  },
  {
    id: 2,
    name: "Laptops",
    icon: Laptop,
    count: "1,532",
    savings: "Jusqu'à -65%",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    popular: false
  },
  {
    id: 3,
    name: "Tablets",
    icon: Tablet,
    count: "924",
    savings: "Jusqu'à -70%",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop",
    popular: false
  },
  {
    id: 4,
    name: "Audio",
    icon: Headphones,
    count: "656",
    savings: "Jusqu'à -60%",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    popular: false
  },
  {
    id: 5,
    name: "Montres",
    icon: Watch,
    count: "389",
    savings: "Jusqu'à -55%",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    popular: false
  },
  {
    id: 6,
    name: "Photo",
    icon: Camera,
    count: "267",
    savings: "Jusqu'à -50%",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    popular: false
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Découvrez nos catégories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des milliers de produits reconditionnés par nos experts, 
            testés sur plus de 50 points de contrôle
          </p>
        </div>

        <div className="grid-auto-fill">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="card-premium group overflow-hidden relative"
              >
                {category.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                    Populaire
                  </Badge>
                )}
                
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary-light p-2 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {category.count} produits
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-secondary-light text-secondary">
                      {category.savings}
                    </Badge>
                  </div>

                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    variant="outline"
                  >
                    Explorer
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border-strong hover:bg-muted">
            Voir toutes les catégories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;