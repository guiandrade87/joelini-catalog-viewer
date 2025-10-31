const BASE_URL = 'https://catalogo.joelini.com.br/Qualidade';

export async function resolveImageUrl(codItem: string, imageIndex: number = 0): Promise<string | null> {
  const extensions = ['.webp', '.jpg', '.png'];
  const suffix = imageIndex === 0 ? '' : `-${imageIndex}`;
  
  for (const ext of extensions) {
    const url = `${BASE_URL}/${codItem}${suffix}${ext}`;
    
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

// Resolve all images for a given item (tries up to 5 images)
export async function resolveAllImagesUrl(codItem: string): Promise<string[]> {
  const images: string[] = [];
  
  // Try to find multiple images (3346.webp, 3346-1.webp, 3346-2.webp, etc.)
  for (let i = 0; i < 5; i++) {
    const url = await resolveImageUrl(codItem, i);
    if (url) {
      images.push(url);
    } else {
      // Stop trying if we don't find the next image
      break;
    }
  }
  
  return images;
}

// Cache for resolved images
const imageCache = new Map<string, string | null>();
const allImagesCache = new Map<string, string[]>();

export async function getCachedImageUrl(codItem: string, imageIndex: number = 0): Promise<string | null> {
  const cacheKey = `${codItem}-${imageIndex}`;
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey) || null;
  }
  
  const url = await resolveImageUrl(codItem, imageIndex);
  imageCache.set(cacheKey, url);
  return url;
}

export async function getCachedAllImagesUrl(codItem: string): Promise<string[]> {
  if (allImagesCache.has(codItem)) {
    return allImagesCache.get(codItem) || [];
  }
  
  const urls = await resolveAllImagesUrl(codItem);
  allImagesCache.set(codItem, urls);
  return urls;
}

export function clearImageCache() {
  imageCache.clear();
  allImagesCache.clear();
}
