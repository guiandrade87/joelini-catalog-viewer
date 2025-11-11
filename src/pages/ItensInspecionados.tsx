import { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';
import { catalogData, setores, type Product } from '@/data/catalog-data';
import { CatalogToolbar } from '@/components/CatalogToolbar';
import { ProductCard } from '@/components/ProductCard';
import { ProductLightbox } from '@/components/ProductLightbox';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { getCachedImageUrl } from '@/utils/imageResolver';

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
  const [productsWithImages, setProductsWithImages] = useState<Set<string>>(new Set());

  // Check which products have images
  useEffect(() => {
    const checkImages = async () => {
      const productsWithImagesSet = new Set<string>();
      
      for (const product of catalogData) {
        for (const item of product.itens) {
          const imageUrl = await getCachedImageUrl(item.codigo);
          if (imageUrl) {
            productsWithImagesSet.add(product.produtoId);
            break;
          }
        }
      }
      
      setProductsWithImages(productsWithImagesSet);
    };
    
    checkImages();
  }, []);

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
      products = products.filter((product) => 
        product.itens.some((item) => 'setor' in item && selectedSetores.includes(item.setor))
      );
    }

    if (onlyWithImage) {
      products = products.filter((product) => productsWithImages.has(product.produtoId));
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
        compareA = 'setor' in a.itens[0] ? a.itens[0].setor : '';
        compareB = 'setor' in b.itens[0] ? b.itens[0].setor : '';
      }
      const comparison = compareA.localeCompare(compareB);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return products;
  }, [searchQuery, selectedSetores, onlyWithImage, sortBy, sortOrder, fuse, productsWithImages]);

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

      <main className="container py-4 sm:py-8 px-4">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
