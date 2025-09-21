"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Smartphone, Filter, SortAsc } from 'lucide-react';

export default function SmartphonesPage() {
  const smartphones = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      grade: "Excellent",
      originalPrice: 1329,
      price: 899,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 156,
      discount: 32,
      co2Saved: 45
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      grade: "Très bon",
      originalPrice: 899,
      price: 649,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 89,
      discount: 28,
      co2Saved: 38
    },
    {
      id: 3,
      name: "Google Pixel 7 Pro",
      grade: "Excellent",
      originalPrice: 899,
      price: 599,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 124,
      discount: 33,
      co2Saved: 42
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Smartphone className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Smartphones reconditionnés</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Découvrez notre sélection de smartphones reconditionnés, testés et garantis
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
                    <h4 className="font-medium mb-3">Grade</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Excellent</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Très bon</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Bon</span>
                      </label>
                    </div>
                  </div>

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
                        <span className="text-sm">Google</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Prix</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Moins de 400€</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">400€ - 700€</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Plus de 700€</span>
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
                {smartphones.length} produits trouvés
              </p>
              <Button variant="outline" className="gap-2">
                <SortAsc className="h-4 w-4" />
                Trier par prix
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {smartphones.map((phone) => (
                <Card key={phone.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <Badge className="absolute top-2 left-2 bg-success text-success-foreground">
                        {phone.grade}
                      </Badge>
                      <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                        -{phone.discount}%
                      </Badge>
                    </div>

                    <h3 className="font-semibold text-lg mb-2">{phone.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(phone.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({phone.reviews} avis)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-primary">
                        {phone.price}€
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {phone.originalPrice}€
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      🌱 {phone.co2Saved}kg CO2 économisés
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
}
