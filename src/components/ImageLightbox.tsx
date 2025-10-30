import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Product } from '@/types/product';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  product: Product | null;
}

export const ImageLightbox = ({ isOpen, onClose, imageUrl, product }: ImageLightboxProps) => {
  if (!product || !imageUrl) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0">
        <DialogHeader className="px-6 pt-6">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-xl">
                {product.productCode} - {product.productDescription}
              </DialogTitle>
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
        </DialogHeader>
        <div className="relative flex items-center justify-center bg-muted p-6">
          <img
            src={imageUrl}
            alt={product.productDescription}
            className="max-h-[70vh] w-auto object-contain"
          />
        </div>
        <div className="border-t border-border p-6">
          <h4 className="mb-3 text-sm font-semibold">Itens do Produto:</h4>
          <div className="space-y-2">
            {product.items.map((item, idx) => (
              <div
                key={`${item.codigo}-${idx}`}
                className="flex items-center justify-between rounded-md bg-muted/50 p-2"
              >
                <div className="flex-1">
                  <span className="font-mono text-sm font-medium">{item.codigo}</span>
                  <p className="text-xs text-muted-foreground">{item.descricao}</p>
                </div>
                <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  {item.setor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
