import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageOff, Loader2 } from 'lucide-react';
import { TerceirizadoProduct } from '@/data/terceirizados-data';
import { getCachedAllImagesUrl } from '@/utils/imageResolver';

interface TerceirizadoCardProps {
  product: TerceirizadoProduct;
  onImageClick: (imageUrls: string[], product: TerceirizadoProduct, imageIndex: number) => void;
}

export const TerceirizadoCard = ({ product, onImageClick }: TerceirizadoCardProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadImages = async () => {
      setIsLoading(true);
      const urls = await getCachedAllImagesUrl(product.produtoId);
      
      if (mounted) {
        setImageUrls(urls);
        setImageError(urls.length === 0);
        setIsLoading(false);
      }
    };

    loadImages();

    return () => {
      mounted = false;
    };
  }, [product]);

  const handleImageClick = () => {
    if (imageUrls.length > 0) {
      onImageClick(imageUrls, product, 0);
    }
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)] animate-fade-in">
      {/* Image */}
      <div
        className={`relative aspect-square overflow-hidden bg-muted ${
          imageUrls.length > 0 && !imageError ? 'cursor-pointer' : ''
        }`}
        onClick={handleImageClick}
      >
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : imageUrls.length > 0 && !imageError ? (
          <>
            <img
              src={imageUrls[0]}
              alt={product.produtoDescricao}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {imageUrls.length > 1 && (
              <div className="absolute bottom-2 right-2 flex gap-1">
                {imageUrls.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      idx === 0 ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageOff className="h-12 w-12" />
            <p className="text-xs">Imagem indisponível</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <Badge variant="outline" className="font-mono text-xs font-semibold">
            {product.produtoId}
          </Badge>
        </div>

        <h3 className="mb-3 line-clamp-2 text-sm font-semibold leading-tight text-foreground">
          {product.produtoDescricao}
        </h3>

        {/* Items Table */}
        <div className="border-t border-border pt-3">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="border-b border-border">
                <tr className="text-muted-foreground">
                  <th className="pb-2 text-left font-medium">Código</th>
                  <th className="pb-2 text-left font-medium">Descrição</th>
                  <th className="pb-2 text-right font-medium">Qtd.</th>
                </tr>
              </thead>
              <tbody>
                {product.itens.map((item, idx) => (
                  <tr key={idx} className="border-b border-border/50 last:border-0">
                    <td className="py-2 font-mono text-xs font-semibold">{item.codigo}</td>
                    <td className="py-2 text-xs line-clamp-2">{item.descricao}</td>
                    <td className="py-2 text-right font-medium">{item.quantidade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Card>
  );
};
