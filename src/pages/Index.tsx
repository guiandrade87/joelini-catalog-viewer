import { useState, useMemo, useCallback } from 'react';
import { catalogData, setores, CatalogItem } from '@/data/catalog-data';
import { CatalogToolbar } from '@/components/CatalogToolbar';
import { CatalogItemCard } from '@/components/CatalogItemCard';
import { CatalogLightbox } from '@/components/CatalogLightbox';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Fuse from 'fuse.js';

const Index = () => {
  // State with localStorage persistence
  const [searchQuery, setSearchQuery] = useLocalStorage('catalog-search', '');
  const [selectedSetores, setSelectedSetores] = useLocalStorage<string[]>('catalog-setores', []);
  const [onlyWithImage, setOnlyWithImage] = useLocalStorage('catalog-only-image', false);
  const [sortBy, setSortBy] = useLocalStorage<'codigo-asc' | 'codigo-desc' | 'descricao-asc' | 'descricao-desc' | 'setor'>('catalog-sort', 'codigo-asc');

  // Lightbox state
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxItem, setLightboxItem] = useState<CatalogItem | null>(null);

  // Filter and search items
  const filteredAndSortedItems = useMemo(() => {
    let items = [...catalogData];

    // Filter by setor
    if (selectedSetores.length > 0) {
      items = items.filter((item) => selectedSetores.includes(item.setor));
    }

    // Search with Fuse.js
    if (searchQuery.trim()) {
      const fuse = new Fuse(items, {
        keys: ['codigo', 'descricao', 'setor', 'produtoId', 'produtoDescricao'],
        threshold: 0.35,
        ignoreLocation: true,
      });
      items = fuse.search(searchQuery).map((result) => result.item);
    }

    // Sort
    items.sort((a, b) => {
      switch (sortBy) {
        case 'codigo-asc':
          return a.codigo.localeCompare(b.codigo);
        case 'codigo-desc':
          return b.codigo.localeCompare(a.codigo);
        case 'descricao-asc':
          return a.descricao.localeCompare(b.descricao);
        case 'descricao-desc':
          return b.descricao.localeCompare(a.descricao);
        case 'setor':
          return a.setor.localeCompare(b.setor);
        default:
          return 0;
      }
    });

    return items;
  }, [searchQuery, selectedSetores, sortBy]);

  // Note: "onlyWithImage" filter is handled by the card component itself
  // as it needs to check image availability asynchronously

  // Handle image click
  const handleImageClick = useCallback((imageUrl: string, item: CatalogItem) => {
    setLightboxImage(imageUrl);
    setLightboxItem(item);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
    setLightboxItem(null);
  }, []);

  // Navigation in lightbox
  const currentIndex = lightboxItem
    ? filteredAndSortedItems.findIndex((item) => item.codigo === lightboxItem.codigo)
    : -1;

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      const prevItem = filteredAndSortedItems[currentIndex - 1];
      setLightboxItem(prevItem);
      // Image will be resolved by lightbox when item changes
    }
  }, [currentIndex, filteredAndSortedItems]);

  const handleNext = useCallback(() => {
    if (currentIndex < filteredAndSortedItems.length - 1) {
      const nextItem = filteredAndSortedItems[currentIndex + 1];
      setLightboxItem(nextItem);
    }
  }, [currentIndex, filteredAndSortedItems]);

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
        onSortChange={setSortBy}
        totalResults={filteredAndSortedItems.length}
        availableSetores={setores}
      />

      <main className="container py-8">
        {filteredAndSortedItems.length === 0 ? (
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-medium text-muted-foreground">
                Nenhum item encontrado
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Tente ajustar os filtros ou a busca
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {filteredAndSortedItems.map((item) => (
              <CatalogItemCard
                key={item.codigo}
                item={item}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        )}
      </main>

      <CatalogLightbox
        isOpen={!!lightboxImage}
        onClose={closeLightbox}
        imageUrl={lightboxImage}
        item={lightboxItem}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={currentIndex > 0}
        hasNext={currentIndex < filteredAndSortedItems.length - 1}
      />
    </div>
  );
};

export default Index;
