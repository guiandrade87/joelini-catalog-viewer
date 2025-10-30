import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { PdfUploader } from '@/components/PdfUploader';
import { SearchFilters } from '@/components/SearchFilters';
import { ProductCard } from '@/components/ProductCard';
import { ImageLightbox } from '@/components/ImageLightbox';
import { EmptyState } from '@/components/EmptyState';
import { ParsedCatalog, Product } from '@/types/product';
import { parsePdfCatalog } from '@/utils/pdfParser';
import Fuse from 'fuse.js';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

const Index = () => {
  const [catalog, setCatalog] = useState<ParsedCatalog | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSetor, setSelectedSetor] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxProduct, setLightboxProduct] = useState<Product | null>(null);

  // Extract unique setores
  const setores = useMemo(() => {
    if (!catalog) return [];
    const setorSet = new Set<string>();
    catalog.products.forEach((product) => {
      product.items.forEach((item) => {
        setorSet.add(item.setor);
      });
    });
    return Array.from(setorSet).sort();
  }, [catalog]);

  // Filter and search products
  const filteredProducts = useMemo(() => {
    if (!catalog) return [];

    let products = catalog.products;

    // Filter by setor
    if (selectedSetor !== 'all') {
      products = products.filter((product) =>
        product.items.some((item) => item.setor === selectedSetor)
      );
    }

    // Search
    if (searchQuery.trim()) {
      const fuse = new Fuse(products, {
        keys: [
          'productCode',
          'productDescription',
          'items.codigo',
          'items.descricao',
        ],
        threshold: 0.3,
        includeScore: true,
      });
      const results = fuse.search(searchQuery);
      return results.map((result) => result.item);
    }

    return products;
  }, [catalog, searchQuery, selectedSetor]);

  const handleImageClick = (imageUrl: string, product: Product) => {
    setLightboxImage(imageUrl);
    setLightboxProduct(product);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxProduct(null);
  };

  const loadSampleCatalog = async () => {
    try {
      const response = await fetch('/sample-catalog.pdf');
      const blob = await response.blob();
      const file = new File([blob], 'sample-catalog.pdf', { type: 'application/pdf' });
      const parsed = await parsePdfCatalog(file);
      setCatalog(parsed);
    } catch (error) {
      console.error('Error loading sample:', error);
    }
  };

  const resetCatalog = () => {
    setCatalog(null);
    setSearchQuery('');
    setSelectedSetor('all');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {!catalog ? (
          <PdfUploader onParsed={setCatalog} />
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <SearchFilters
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  selectedSetor={selectedSetor}
                  onSetorChange={setSelectedSetor}
                  setores={setores}
                  totalResults={filteredProducts.length}
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={resetCatalog}
                className="ml-4 gap-2"
              >
                <Upload className="h-4 w-4" />
                Novo PDF
              </Button>
            </div>

            {filteredProducts.length === 0 ? (
              <EmptyState onLoadSample={!catalog ? loadSampleCatalog : undefined} />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.productCode}
                    product={product}
                    onImageClick={handleImageClick}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <ImageLightbox
        isOpen={!!lightboxImage}
        onClose={closeLightbox}
        imageUrl={lightboxImage}
        product={lightboxProduct}
      />
    </div>
  );
};

export default Index;
