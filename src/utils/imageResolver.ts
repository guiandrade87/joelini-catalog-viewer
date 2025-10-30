const BASE_URL = 'https://catalogo.joelini.com.br/Qualidade';

export async function resolveImageUrl(codItem: string): Promise<string | null> {
  const extensions = ['.webp', '.jpg', '.png'];
  
  for (const ext of extensions) {
    const url = `${BASE_URL}/${codItem}${ext}`;
    
    try {
      // Try to load image using Image() constructor
      const isValid = await new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
        
        // Timeout after 3 seconds
        setTimeout(() => resolve(false), 3000);
      });
      
      if (isValid) {
        return url;
      }
    } catch (error) {
      continue;
    }
  }
  
  return null;
}

// Cache for resolved images
const imageCache = new Map<string, string | null>();

export async function getCachedImageUrl(codItem: string): Promise<string | null> {
  if (imageCache.has(codItem)) {
    return imageCache.get(codItem) || null;
  }
  
  const url = await resolveImageUrl(codItem);
  imageCache.set(codItem, url);
  return url;
}

export function clearImageCache() {
  imageCache.clear();
}
