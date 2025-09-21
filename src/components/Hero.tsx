"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-secondary-light text-secondary font-medium px-4 py-2">
                <Leaf className="w-4 h-4 mr-2" />
                Économisez jusqu'à 70% vs neuf
              </Badge>
              <h1 className="text-hero">
                Le reconditionné 
                <br />
                dont vous êtes{" "}
                <span className="text-secondary">fier</span>
              </h1>
              <p className="text-subtitle max-w-lg">
                Des produits tech premium reconditionnés avec soin, 
                garantis 12 mois et jusqu'à 70% moins cher que le neuf.
              </p>
            </div>

            {/* USPs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-card rounded-xl border border-border">
                <div className="bg-primary-light p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Garantie 12 mois</p>
                  <p className="text-xs text-muted-foreground">Incluse</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-card rounded-xl border border-border">
                <div className="bg-secondary-light p-2 rounded-lg">
                  <Leaf className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Impact CO2</p>
                  <p className="text-xs text-muted-foreground">-85% vs neuf</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-card rounded-xl border border-border">
                <div className="bg-primary-light p-2 rounded-lg">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Livraison</p>
                  <p className="text-xs text-muted-foreground">Gratuite dès 50€</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hero">
                Découvrir nos produits
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border-strong hover:bg-muted"
              >
                En savoir plus
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-secondary rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                </div>
                <span>+12,000 clients satisfaits</span>
              </div>
              <div className="hidden sm:block text-border">|</div>
              <div>⭐ 4.8/5 sur 2,400+ avis</div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage.src}
                alt="Produits reconditionnés premium"
                className="w-full h-auto rounded-3xl shadow-strong hover-glow animate-float"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-3xl blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Hero;