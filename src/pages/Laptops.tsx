import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Laptop, Filter, SortAsc } from "lucide-react";

const Laptops = () => {
  const laptops = [
    {
      id: 1,
      name: "MacBook Pro 14\"",
      grade: "Excellent",
      originalPrice: 2499,
      price: 1799,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 87,
      discount: 28,
      co2Saved: 85,
      specs: "Apple M2, 16GB RAM, 512GB SSD"
    },
    {
      id: 2,
      name: "Dell XPS 13",
      grade: "Très bon",
      originalPrice: 1299,
      price: 899,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 134,
      discount: 31,
      co2Saved: 62,
      specs: "Intel i7, 16GB RAM, 256GB SSD"
    },
    {
      id: 3,
      name: "ThinkPad X1 Carbon",
      grade: "Excellent",
      originalPrice: 1899,
      price: 1299,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 96,
      discount: 32,
      co2Saved: 78,
      specs: "Intel i7, 16GB RAM, 512GB SSD"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Laptop className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Laptops reconditionnés</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Ordinateurs portables reconditionnés haute performance pour tous vos besoins
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
                        <span className="text-sm">Dell</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Lenovo</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">HP</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Processeur</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Apple Silicon</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Intel Core i7</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Intel Core i5</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">AMD Ryzen</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">RAM</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">8GB</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">16GB</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">32GB</span>
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
                {laptops.length} produits trouvés
              </p>
              <Button variant="outline" className="gap-2">
                <SortAsc className="h-4 w-4" />
                Trier par prix
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {laptops.map((laptop) => (
                <Card key={laptop.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img
                        src={laptop.image}
                        alt={laptop.name}
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <Badge className="absolute top-2 left-2 bg-success text-success-foreground">
                        {laptop.grade}
                      </Badge>
                      <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                        -{laptop.discount}%
                      </Badge>
                    </div>

                    <h3 className="font-semibold text-lg mb-2">{laptop.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{laptop.specs}</p>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(laptop.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({laptop.reviews} avis)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-primary">
                        {laptop.price}€
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {laptop.originalPrice}€
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      🌱 {laptop.co2Saved}kg CO2 économisés
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

export default Laptops;