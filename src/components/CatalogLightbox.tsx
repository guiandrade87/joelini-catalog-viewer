import { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { CatalogItem } from '@/data/catalog-data';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getCachedImageUrl } from '@/utils/imageResolver';

interface CatalogLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  item: CatalogItem | null;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

const setorColors: Record<string, string> = {
  TERCEIRIZAÇÃO: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
  INJEÇÃO: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
  MONTAGEM: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
  ESTAMPARIA: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
  USINAGEM: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
  ALMOXARIFADO: 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20',
};

export const CatalogLightbox = ({
  isOpen,
  onClose,
  imageUrl: initialImageUrl,
  item,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: CatalogLightboxProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(initialImageUrl);

  // Resolve image when item changes
  useEffect(() => {
    if (!item) return;
    
    let mounted = true;
    
    const loadImage = async () => {
      const url = await getCachedImageUrl(item.codigo);
      if (mounted) {
        setImageUrl(url);
      }
    };
    
    loadImage();
    
    return () => {
      mounted = false;
    };
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrevious && onPrevious) {
        onPrevious();
      } else if (e.key === 'ArrowRight' && hasNext && onNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasPrevious, hasNext, onPrevious, onNext, onClose]);

  if (!item || !imageUrl) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl p-0 gap-0">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-border p-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="font-mono font-semibold">
                {item.codigo}
              </Badge>
              <Badge className={`text-xs font-medium border ${setorColors[item.setor]}`}>
                {item.setor}
              </Badge>
            </div>
            <h2 className="text-xl font-bold text-foreground">
              {item.descricao}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Produto: {item.produtoId} - {item.produtoDescricao}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Image with navigation */}
        <div className="relative bg-muted">
          {hasPrevious && onPrevious && (
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 h-10 w-10 rounded-full shadow-lg"
              onClick={onPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}
          
          <div className="flex items-center justify-center p-8">
            <img
              src={imageUrl}
              alt={item.descricao}
              className="max-h-[70vh] w-auto object-contain"
            />
          </div>

          {hasNext && onNext && (
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 h-10 w-10 rounded-full shadow-lg"
              onClick={onNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}
        </div>

        {/* Footer hint */}
        {(hasPrevious || hasNext) && (
          <div className="border-t border-border bg-muted/30 px-6 py-3 text-center">
            <p className="text-xs text-muted-foreground">
              Use as setas ← → do teclado para navegar
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
