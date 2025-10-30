import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageOff, Loader2 } from 'lucide-react';
import { CatalogItem } from '@/data/catalog-data';
import { getCachedImageUrl } from '@/utils/imageResolver';

interface CatalogItemCardProps {
  item: CatalogItem;
  onImageClick: (imageUrl: string, item: CatalogItem) => void;
}

const setorColors: Record<string, string> = {
  TERCEIRIZAÇÃO: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
  INJEÇÃO: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
  MONTAGEM: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
  ESTAMPARIA: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
  USINAGEM: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
  ALMOXARIFADO: 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20',
};

export const CatalogItemCard = ({ item, onImageClick }: CatalogItemCardProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadImage = async () => {
      setIsLoading(true);
      const url = await getCachedImageUrl(item.codigo);
      
      if (mounted) {
        setImageUrl(url);
        setImageError(!url);
        setIsLoading(false);
      }
    };

    loadImage();

    return () => {
      mounted = false;
    };
  }, [item.codigo]);

  const handleImageClick = () => {
    if (imageUrl && !imageError) {
      onImageClick(imageUrl, item);
    }
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)] animate-fade-in">
      {/* Image */}
      <div
        className={`relative aspect-square overflow-hidden bg-muted ${
          imageUrl && !imageError ? 'cursor-pointer' : ''
        }`}
        onClick={handleImageClick}
      >
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={item.descricao}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
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
            {item.codigo}
          </Badge>
          <Badge className={`text-[10px] font-medium border ${setorColors[item.setor]}`}>
            {item.setor}
          </Badge>
        </div>

        <h3 className="mb-2 line-clamp-2 text-sm font-semibold leading-tight text-foreground">
          {item.descricao}
        </h3>

        <div className="border-t border-border pt-2">
          <p className="text-xs text-muted-foreground">
            Produto: <span className="font-mono font-medium text-foreground">{item.produtoId}</span>
          </p>
          <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
            {item.produtoDescricao}
          </p>
        </div>
      </div>
    </Card>
  );
};
