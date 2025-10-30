import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageOff } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onImageClick: (imageUrl: string, product: Product) => void;
}

export const ProductCard = ({ product, onImageClick }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Use the first item's code for the image
  const imageUrl = product.items[0]
    ? `https://catalogo.joelini.com.br/Qualidade/${product.items[0].codigo}`
    : null;

  const handleImageClick = () => {
    if (imageUrl && !imageError) {
      onImageClick(imageUrl, product);
    }
  };

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-[var(--shadow-hover)]">
      {/* Image */}
      <div
        className="relative aspect-square cursor-pointer overflow-hidden bg-muted"
        onClick={handleImageClick}
      >
        {imageUrl && !imageError ? (
          <>
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              </div>
            )}
            <img
              src={imageUrl}
              alt={product.productDescription}
              className={`h-full w-full object-contain transition-all duration-300 group-hover:scale-105 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true);
                setImageLoading(false);
              }}
            />
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageOff className="h-12 w-12" />
            <p className="text-xs">Imagem não disponível</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <Badge variant="outline" className="font-mono text-xs">
            {product.productCode}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {product.items.length} {product.items.length === 1 ? 'item' : 'itens'}
          </Badge>
        </div>

        <h3 className="mb-3 line-clamp-2 text-sm font-semibold leading-tight text-foreground">
          {product.productDescription}
        </h3>

        {/* Items */}
        <div className="space-y-2 border-t border-border pt-3">
          {product.items.map((item, idx) => (
            <div key={`${item.codigo}-${idx}`} className="text-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-muted-foreground">{item.codigo}</span>
                <Badge variant="outline" className="text-[10px]">
                  {item.setor}
                </Badge>
              </div>
              <p className="mt-0.5 line-clamp-1 text-muted-foreground">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
