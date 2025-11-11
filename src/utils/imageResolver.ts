const BASE_URL = 'https://catalogo.joelini.com.br/Qualidade';

export async function resolveImageUrl(codItem: string, imageIndex: number = 0): Promise<string | null> {
  const extensions = ['.png', '.webp', '.jpg'];
  const suffix = imageIndex === 0 ? '' : `-${imageIndex}`;
  
  console.log(`🔍 Resolving image for item: ${codItem}, index: ${imageIndex}`);
  
  for (const ext of extensions) {
    const url = `${BASE_URL}/${codItem}${suffix}${ext}`;
    console.log(`🔗 Trying URL: ${url}`);
    
    try {
      // Try to load image using Image() constructor
      const isValid = await new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = () => {
          console.log(`✅ Image loaded successfully: ${url}`);
          resolve(true);
        };
        img.onerror = (error) => {
          console.log(`❌ Image failed to load: ${url}`, error);
          resolve(false);
        };
        img.src = url;
        
        // Timeout after 5 seconds
        setTimeout(() => {
          console.log(`⏱️ Timeout for: ${url}`);
          resolve(false);
        }, 5000);
      });
      
      if (isValid) {
        return url;
      }
    } catch (error) {
      console.log(`⚠️ Error trying to load: ${url}`, error);
      continue;
    }
  }
  
  console.log(`🚫 No valid image found for item: ${codItem}`);
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
