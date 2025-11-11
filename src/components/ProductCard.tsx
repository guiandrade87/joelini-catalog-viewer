import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageOff, Loader2 } from 'lucide-react';
import { Product } from '@/data/catalog-data';
import { getCachedAllImagesUrl } from '@/utils/imageResolver';

interface ProductCardProps {
  product: Product;
  onImageClick: (imageUrls: string[], product: Product, imageIndex: number) => void;
}

const setorColors: Record<string, string> = {
  TERCEIRIZAÇÃO: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
  INJEÇÃO: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
  MONTAGEM: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
  ESTAMPARIA: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
  USINAGEM: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
  ALMOXARIFADO: 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20',
};

export const ProductCard = ({ product, onImageClick }: ProductCardProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadImages = async () => {
      setIsLoading(true);
      // Load images for the first item only (for card display)
      if (product.itens.length > 0) {
        const urls = await getCachedAllImagesUrl(product.itens[0].codigo);
        
        if (mounted) {
          setImageUrls(urls);
          setImageError(urls.length === 0);
          setIsLoading(false);
        }
      } else {
        if (mounted) {
          setImageError(true);
          setIsLoading(false);
        }
      }
    };

    loadImages();

    return () => {
      mounted = false;
    };
  }, [product]);

  const handleImageClick = async (itemCodigo: string) => {
    const urls = await getCachedAllImagesUrl(itemCodigo);
    if (urls.length > 0) {
      onImageClick(urls, product, 0);
    }
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)] animate-fade-in">
      {/* Image */}
      <div
        className={`relative aspect-square overflow-hidden bg-muted ${
          imageUrls.length > 0 && !imageError ? 'cursor-pointer' : ''
        }`}
        onClick={() => handleImageClick(product.itens[0].codigo)}
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
        <div className="mb-2 flex items-start justify-between gap-2">
          <Badge variant="outline" className="font-mono text-xs font-semibold">
            {product.produtoId}
          </Badge>
          {'setor' in product.itens[0] && (
            <Badge className={`text-[10px] font-medium border ${setorColors[product.itens[0].setor]}`}>
              {product.itens[0].setor}
            </Badge>
          )}
        </div>

        <h3 className="mb-3 line-clamp-2 text-sm font-semibold leading-tight text-foreground">
          {product.produtoDescricao}
        </h3>

        {/* Items Table */}
        <div className="border-t border-border pt-3">
          {'quantidade' in product.itens[0] ? (
            // Tabela para itens com quantidade
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-2 font-semibold text-foreground bg-yellow-400">Código</th>
                    <th className="text-left py-2 px-2 font-semibold text-foreground bg-yellow-400">Descrição</th>
                    <th className="text-center py-2 px-2 font-semibold text-foreground bg-yellow-400">Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {product.itens.map((item, idx) => (
                    <tr 
                      key={idx}
                      className="border-b border-border last:border-0 hover:bg-muted/50 cursor-pointer transition-colors"
                      onClick={() => handleImageClick(item.codigo)}
                    >
                      <td className="py-2 px-2 font-mono font-semibold text-foreground">{'codigo' in item ? item.codigo : ''}</td>
                      <td className="py-2 px-2 text-muted-foreground">{'descricao' in item ? item.descricao : ''}</td>
                      <td className="py-2 px-2 text-center font-semibold text-foreground">{'quantidade' in item ? item.quantidade : ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            // Layout original para itens com setor
            <div className="space-y-2">
              {product.itens.map((item, idx) => (
                <div 
                  key={idx} 
                  className="rounded-md bg-muted/50 p-2 cursor-pointer hover:bg-muted transition-colors"
                  onClick={() => handleImageClick(item.codigo)}
                >
                  <span className="text-xs font-mono font-semibold text-foreground block mb-1">{item.codigo}</span>
                  <p className="text-xs text-muted-foreground line-clamp-2">{item.descricao}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
