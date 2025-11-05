import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, PackageCheck } from 'lucide-react';
import logoJoelini from '@/assets/logo-joelini.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <img src={logoJoelini} alt="Joelini" className="h-12 md:h-16" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground">
            Catálogos Digitais
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Acesse nossos catálogos de produtos e encontre as melhores soluções para o seu projeto
          </p>
        </div>

        {/* Catalog Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Itens Inspecionados Card */}
          <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary to-primary-hover p-8 md:p-10 text-center">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <PackageCheck className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                  Itens Inspecionados
                </h2>
                <p className="text-primary-foreground/90 mb-8 text-sm md:text-base">
                  Produtos verificados e com qualidade garantida para suas necessidades
                </p>
                <Link to="/itens-inspecionados">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full font-semibold text-base md:text-lg hover:scale-105 transition-transform"
                  >
                    Acessar Catálogo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Itens Terceirizados Card */}
          <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-2 hover:border-secondary/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-secondary to-secondary-hover p-8 md:p-10 text-center">
                <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-10 h-10 md:w-12 md:h-12 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-3">
                  Itens Terceirizados
                </h2>
                <p className="text-secondary-foreground/90 mb-8 text-sm md:text-base">
                  Soluções complementares de parceiros confiáveis para ampliar suas opções
                </p>
                <Link to="/itens-terceirizados">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-base md:text-lg hover:scale-105 transition-transform"
                  >
                    Acessar Catálogo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/30 backdrop-blur-sm mt-12 md:mt-20">
        <div className="container mx-auto px-4 py-6 md:py-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Joelini. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
