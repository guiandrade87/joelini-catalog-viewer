import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Package, Box } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-2 bg-card/95 backdrop-blur border rounded-lg p-2 shadow-lg">
        <Link to="/">
          <Button 
            variant={location.pathname === '/' ? 'default' : 'ghost'} 
            size="sm"
            className="gap-2"
          >
            <Package className="h-4 w-4" />
            <span className="hidden sm:inline">Catálogo Geral</span>
          </Button>
        </Link>
        <Link to="/terceirizados">
          <Button 
            variant={location.pathname === '/terceirizados' ? 'default' : 'ghost'} 
            size="sm"
            className="gap-2"
          >
            <Box className="h-4 w-4" />
            <span className="hidden sm:inline">Produtos Terceirizados</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
