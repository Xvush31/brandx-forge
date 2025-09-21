"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    brand: "Apple",
    originalPrice: 1159,
    price: 749,
    savings: 410,
    condition: "Excellent",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    co2Saved: 42,
    inStock: 8,
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "MacBook Air M2",
    brand: "Apple",
    originalPrice: 1499,
    price: 1199,
    savings: 300,
    condition: "Très bon",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
    co2Saved: 187,
    inStock: 3,
    badge: "Éco+"
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    originalPrice: 859,
    price: 599,
    savings: 260,
    condition: "Excellent",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    co2Saved: 38,
    inStock: 12,
    badge: "Promo"
  },
  {
    id: 4,
    name: "iPad Pro 11\"",
    brand: "Apple",
    originalPrice: 899,
    price: 649,
    savings: 250,
    condition: "Bon",
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    co2Saved: 65,
    inStock: 5,
    badge: "Deal"
  }
];

const BestSellers = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Nos meilleures ventes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Les produits les plus populaires de notre communauté, 
            reconditionnés avec le plus grand soin
          </p>
        </div>

        <div className="grid-auto-fit">
          {products.map((product) => (
            <div
              key={product.id}
              className="card-premium group relative overflow-hidden"
            >
              {/* Badge */}
              <Badge 
                className={`absolute top-4 left-4 z-10 ${
                  product.badge === 'Bestseller' ? 'bg-primary text-primary-foreground' :
                  product.badge === 'Éco+' ? 'bg-secondary text-secondary-foreground' :
                  'bg-warning text-warning-foreground'
                }`}
              >
                {product.badge}
              </Badge>

              {/* Wishlist */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm hover:bg-white"
              >
                <Heart className="w-4 h-4" />
              </Button>

              {/* Image */}
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{product.brand}</p>
                  <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>
                </div>

                {/* Condition & Rating */}
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-success-light text-success border-success/20">
                    {product.condition}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">{product.price}€</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}€</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-secondary font-medium">
                      Économie: {product.savings}€
                    </span>
                    <span className="text-muted-foreground">
                      CO2 évité: {product.co2Saved}kg
                    </span>
                  </div>
                </div>

                {/* Stock Info */}
                <div className="text-sm text-warning font-medium">
                  Plus que {product.inStock} en stock
                </div>

                {/* CTA */}
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Ajouter au panier
                </Button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border-strong hover:bg-muted">
            Voir tous les produits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;