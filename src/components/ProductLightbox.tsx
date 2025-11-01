import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/catalog-data';
import { useEffect, useState } from 'react';

interface ProductLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrls: string[];
  product: Product | null;
  initialImageIndex: number;
}

const setorColors: Record<string, string> = {
  TERCEIRIZAÇÃO: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
  INJEÇÃO: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
  MONTAGEM: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
  ESTAMPARIA: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
  USINAGEM: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
  ALMOXARIFADO: 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20',
};

export const ProductLightbox = ({
  isOpen,
  onClose,
  imageUrls,
  product,
  initialImageIndex,
}: ProductLightboxProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  useEffect(() => {
    setCurrentImageIndex(initialImageIndex);
  }, [initialImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowLeft') {
        if (currentImageIndex > 0) {
          setCurrentImageIndex(currentImageIndex - 1);
        }
      } else if (e.key === 'ArrowRight') {
        if (currentImageIndex < imageUrls.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex, imageUrls.length, onClose]);

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl h-[90vh] p-0 gap-0 sm:max-w-7xl max-w-full w-full">
        <div className="flex flex-col sm:flex-row h-full">
          {/* Image Area */}
          <div className="flex-1 relative bg-muted/30 flex items-center justify-center min-h-[50vh] sm:min-h-0">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>

            {imageUrls.length > 0 && (
              <>
                <img
                  src={imageUrls[currentImageIndex]}
                  alt={product.produtoDescricao}
                  className="max-h-full max-w-full object-contain p-4 sm:p-8"
                />

                {/* Image Navigation */}
                {imageUrls.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                      disabled={currentImageIndex === 0}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      onClick={() => setCurrentImageIndex(Math.min(imageUrls.length - 1, currentImageIndex + 1))}
                      disabled={currentImageIndex === imageUrls.length - 1}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {imageUrls.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`h-2 w-2 rounded-full transition-colors ${
                            idx === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/* Info Sidebar */}
          <div className="w-full sm:w-96 border-t sm:border-t-0 sm:border-l bg-background overflow-y-auto max-h-[40vh] sm:max-h-none">
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Product Info */}
              <div>
                <Badge variant="outline" className="font-mono text-sm font-semibold mb-2">
                  {product.produtoId}
                </Badge>
                <h2 className="text-lg font-bold text-foreground leading-tight">
                  {product.produtoDescricao}
                </h2>
              </div>

              {/* Items Table */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Itens/Componentes</h3>
                <div className="space-y-3">
                  {product.itens.map((item, idx) => (
                    <div key={idx} className="rounded-lg border border-border p-3 space-y-2">
                      <span className="text-sm font-mono font-semibold text-foreground block">
                        {item.codigo}
                      </span>
                      <p className="text-sm text-muted-foreground leading-tight">
                        {item.descricao}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Hint */}
              <div className="text-xs text-muted-foreground pt-4 border-t">
                <p>Use as setas ← → para navegar</p>
                <p className="mt-1">Pressione ESC para fechar</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
