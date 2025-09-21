import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Page non trouvée
          </h2>
          <p className="text-muted-foreground max-w-md">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/">Retour à l'accueil</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/smartphones">Voir nos smartphones</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
