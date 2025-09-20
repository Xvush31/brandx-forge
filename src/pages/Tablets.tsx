import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Tablet, Filter, SortAsc } from "lucide-react";

const Tablets = () => {
  const tablets = [
    {
      id: 1,
      name: "iPad Pro 12.9\"",
      grade: "Excellent",
      originalPrice: 1439,
      price: 999,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 203,
      discount: 31,
      co2Saved: 52,
      specs: "Apple M2, 128GB, WiFi + Cellular"
    },
    {
      id: 2,
      name: "Samsung Galaxy Tab S8",
      grade: "Très bon",
      originalPrice: 749,
      price: 529,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 147,
      discount: 29,
      co2Saved: 34,
      specs: "Snapdragon 8 Gen 1, 128GB"
    },
    {
      id: 3,
      name: "iPad Air 5ème génération",
      grade: "Excellent",
      originalPrice: 699,
      price: 499,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 176,
      discount: 29,
      co2Saved: 31,
      specs: "Apple M1, 64GB, WiFi"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Tablet className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Tablettes reconditionnées</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Tablettes reconditionnées pour le travail, la création et le divertissement
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtres */}
          <aside className="lg:w-1/4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="h-5 w-5" />
                  <h3 className="font-semibold">Filtres</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Marque</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Apple</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Samsung</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Microsoft</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Lenovo</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Taille d'écran</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">10" et moins</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">11" - 12"</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">13" et plus</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Stockage</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">64GB</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">128GB</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">256GB</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">512GB+</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Produits */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                {tablets.length} produits trouvés
              </p>
              <Button variant="outline" className="gap-2">
                <SortAsc className="h-4 w-4" />
                Trier par prix
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {tablets.map((tablet) => (
                <Card key={tablet.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img
                        src={tablet.image}
                        alt={tablet.name}
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <Badge className="absolute top-2 left-2 bg-success text-success-foreground">
                        {tablet.grade}
                      </Badge>
                      <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                        -{tablet.discount}%
                      </Badge>
                    </div>

                    <h3 className="font-semibold text-lg mb-2">{tablet.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{tablet.specs}</p>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(tablet.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({tablet.reviews} avis)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-primary">
                        {tablet.price}€
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {tablet.originalPrice}€
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      🌱 {tablet.co2Saved}kg CO2 économisés
                    </p>
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">
                      Ajouter au panier
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tablets;