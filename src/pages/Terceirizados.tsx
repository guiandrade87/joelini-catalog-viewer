import { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';
import { terceirizadosData, type TerceirizadoProduct } from '@/data/terceirizados-data';
import { TerceirizadoCard } from '@/components/TerceirizadoCard';
import { TerceirizadoLightbox } from '@/components/TerceirizadoLightbox';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { getCachedImageUrl } from '@/utils/imageResolver';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import logoJoelini from '@/assets/logo-joelini.png';

const Terceirizados = () => {
  const [searchQuery, setSearchQuery] = useLocalStorage('terc-search', '');
  const [onlyWithImage, setOnlyWithImage] = useLocalStorage('terc-only-images', false);
  const [sortBy, setSortBy] = useLocalStorage<'produtoId' | 'descricao'>('terc-sort', 'produtoId');
  const [sortOrder, setSortOrder] = useLocalStorage<'asc' | 'desc'>('terc-order', 'asc');
  const [lightboxData, setLightboxData] = useState<{ 
    imageUrls: string[]; 
    product: TerceirizadoProduct;
    imageIndex: number;
  } | null>(null);
  const [productsWithImages, setProductsWithImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const checkImages = async () => {
      const productsWithImagesSet = new Set<string>();
      
      for (const product of terceirizadosData) {
        const imageUrl = await getCachedImageUrl(product.produtoId);
        if (imageUrl) {
          productsWithImagesSet.add(product.produtoId);
        }
      }
      
      setProductsWithImages(productsWithImagesSet);
    };
    
    checkImages();
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(terceirizadosData, {
      keys: ['produtoId', 'produtoDescricao', 'itens.codigo', 'itens.descricao'],
      threshold: 0.35,
      includeScore: true,
    });
  }, []);

  const filteredProducts = useMemo(() => {
    let products = searchQuery ? fuse.search(searchQuery).map((result) => result.item) : [...terceirizadosData];

    if (onlyWithImage) {
      products = products.filter((product) => productsWithImages.has(product.produtoId));
    }

    products.sort((a, b) => {
      let compareA: string, compareB: string;
      if (sortBy === 'produtoId') {
        compareA = a.produtoId;
        compareB = b.produtoId;
      } else {
        compareA = a.produtoDescricao;
        compareB = b.produtoDescricao;
      }
      const comparison = compareA.localeCompare(compareB);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return products;
  }, [searchQuery, onlyWithImage, sortBy, sortOrder, fuse, productsWithImages]);

  const handleImageClick = (imageUrls: string[], product: TerceirizadoProduct, imageIndex: number = 0) => {
    setLightboxData({ imageUrls, product, imageIndex });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
        <div className="container py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-3 w-full">
              <img src={logoJoelini} alt="Joelini Logo" className="h-12 w-auto object-contain" />
              <h1 className="text-xl font-bold" style={{ color: '#1E40AF' }}>CATÁLOGO DIGITAL - PRODUTOS TERCEIRIZADOS</h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Buscar..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
              </div>

              <div className="flex gap-2 items-center">
                <div className="flex items-center gap-2 px-3 py-2 border rounded-md bg-background">
                  <Label htmlFor="only-image" className="text-sm whitespace-nowrap">Apenas com imagem</Label>
                  <Switch id="only-image" checked={onlyWithImage} onCheckedChange={setOnlyWithImage} />
                </div>

                <Select value={sortBy} onValueChange={(v) => setSortBy(v as any)}>
                  <SelectTrigger className="w-[140px] sm:w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="produtoId">Código</SelectItem>
                    <SelectItem value="descricao">Descrição</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{filteredProducts.length} itens</Badge>
            </div>
          </div>
        </div>
      </div>

      <main className="container py-4 sm:py-8 px-4">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <TerceirizadoCard key={product.produtoId} product={product} onImageClick={handleImageClick} />
          ))}
        </div>
      </main>

      {lightboxData && (
        <TerceirizadoLightbox
          isOpen={!!lightboxData}
          onClose={() => setLightboxData(null)}
          imageUrls={lightboxData.imageUrls}
          product={lightboxData.product}
          initialImageIndex={lightboxData.imageIndex}
        />
      )}
    </div>
  );
};

export default Terceirizados;
