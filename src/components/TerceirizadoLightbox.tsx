import { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TerceirizadoProduct } from '@/data/terceirizados-data';

interface TerceirizadoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrls: string[];
  product: TerceirizadoProduct;
  initialImageIndex: number;
}

export const TerceirizadoLightbox = ({ 
  isOpen, 
  onClose, 
  imageUrls, 
  product, 
  initialImageIndex 
}: TerceirizadoLightboxProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  useEffect(() => {
    setCurrentImageIndex(initialImageIndex);
  }, [initialImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : imageUrls.length - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev < imageUrls.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, imageUrls.length, onClose]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : imageUrls.length - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev < imageUrls.length - 1 ? prev + 1 : 0));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] p-0 gap-0 overflow-hidden">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="font-mono text-sm">
                {product.produtoId}
              </Badge>
              <h2 className="text-lg font-semibold">{product.produtoDescricao}</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content: Image and Table Side by Side */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Image Display */}
            <div className="flex-1 relative bg-muted/30 flex items-center justify-center p-4">
              <img
                src={imageUrls[currentImageIndex]}
                alt={`${product.produtoDescricao} - ${currentImageIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />

              {imageUrls.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-background/80 backdrop-blur px-3 py-2 rounded-full">
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
            </div>

            {/* Product Details */}
            <div className="lg:w-96 border-t lg:border-t-0 lg:border-l p-4 overflow-y-auto">
              <h3 className="text-sm font-semibold mb-3">Itens do Produto</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-border">
                    <tr className="text-muted-foreground">
                      <th className="pb-2 text-left font-medium">Código</th>
                      <th className="pb-2 text-left font-medium">Descrição</th>
                      <th className="pb-2 text-right font-medium">Quantidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.itens.map((item, idx) => (
                      <tr key={idx} className="border-b border-border/50 last:border-0">
                        <td className="py-2 font-mono text-xs font-semibold">{item.codigo}</td>
                        <td className="py-2 text-sm">{item.descricao}</td>
                        <td className="py-2 text-right font-medium">{item.quantidade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {imageUrls.length > 1 && (
            <div className="border-t px-4 py-2 text-xs text-muted-foreground text-center">
              Use as setas ← → para navegar entre as imagens
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
