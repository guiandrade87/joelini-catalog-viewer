import { Package } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Package className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">JOELINI</h1>
            <p className="text-xs text-muted-foreground">Produtos Inspecionados</p>
          </div>
        </div>
        <div className="hidden md:block">
          <span className="text-sm font-medium text-primary">SISTEMAS DESLIZANTES</span>
        </div>
      </div>
    </header>
  );
};
