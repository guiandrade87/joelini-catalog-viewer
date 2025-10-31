import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { catalogData, setores, type Product } from '@/data/catalog-data';
import { CatalogToolbar } from '@/components/CatalogToolbar';
import { ProductCard } from '@/components/ProductCard';
import { ProductLightbox } from '@/components/ProductLightbox';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const Index = () => {
  const [searchQuery, setSearchQuery] = useLocalStorage('catalog-search', '');
  const [selectedSetores, setSelectedSetores] = useLocalStorage<string[]>('catalog-setores', []);
  const [onlyWithImage, setOnlyWithImage] = useLocalStorage('catalog-only-images', false);
  const [sortBy, setSortBy] = useLocalStorage<'produtoId' | 'descricao' | 'setor'>('catalog-sort', 'produtoId');
  const [sortOrder, setSortOrder] = useLocalStorage<'asc' | 'desc'>('catalog-order', 'asc');
  const [lightboxData, setLightboxData] = useState<{ 
    imageUrls: string[]; 
    product: Product;
    imageIndex: number;
  } | null>(null);

  // Search with Fuse.js
  const fuse = useMemo(() => {
    return new Fuse(catalogData, {
      keys: ['produtoId', 'produtoDescricao', 'itens.codigo', 'itens.descricao', 'itens.setor'],
      threshold: 0.35,
      includeScore: true,
    });
  }, []);

  const filteredProducts = useMemo(() => {
    let products = searchQuery ? fuse.search(searchQuery).map((result) => result.item) : [...catalogData];

    if (selectedSetores.length > 0) {
      products = products.filter((product) => product.itens.some((item) => selectedSetores.includes(item.setor)));
    }

    products.sort((a, b) => {
      let compareA: string, compareB: string;
      if (sortBy === 'produtoId') {
        compareA = a.produtoId;
        compareB = b.produtoId;
      } else if (sortBy === 'descricao') {
        compareA = a.produtoDescricao;
        compareB = b.produtoDescricao;
      } else {
        compareA = a.itens[0]?.setor || '';
        compareB = b.itens[0]?.setor || '';
      }
      const comparison = compareA.localeCompare(compareB);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return products;
  }, [searchQuery, selectedSetores, onlyWithImage, sortBy, sortOrder, fuse]);

  const handleImageClick = (imageUrls: string[], product: Product, imageIndex: number = 0) => {
    setLightboxData({ imageUrls, product, imageIndex });
  };

  return (
    <div className="min-h-screen bg-background">
      <CatalogToolbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedSetores={selectedSetores}
        onSetoresChange={setSelectedSetores}
        onlyWithImage={onlyWithImage}
        onOnlyWithImageChange={setOnlyWithImage}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        totalResults={filteredProducts.length}
      />

      <main className="container py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.produtoId} product={product} onImageClick={handleImageClick} />
          ))}
        </div>
      </main>

      {lightboxData && (
        <ProductLightbox
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

export default Index;
