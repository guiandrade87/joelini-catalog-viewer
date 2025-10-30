import * as pdfjsLib from 'pdfjs-dist';
import { Product, ParsedCatalog } from '@/types/product';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export async function parsePdfCatalog(file: File): Promise<ParsedCatalog> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  
  const products: Product[] = [];
  let allText = '';

  // Extract text from all pages
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items
      .map((item: any) => item.str)
      .join(' ');
    allText += pageText + '\n';
  }

  // Parse products using regex patterns
  const productPattern = /Produto:\s*(\d+)\s*-\s*([^\n]+)/gi;
  const tablePattern = /(\d+)\s+([A-ZÇÃÁÀÂÊÉÍÓÔÕÚÜ\s\d\-\/\.,()]+?)\s+(TERCEIRIZAÇÃO|INJEÇÃO|MONTAGEM|ESTAMPARIA|USINAGEM|ALMOXARIFADO)/gi;

  let match;
  const productMatches: Array<{ code: string; description: string; position: number }> = [];
  
  // Find all product headers
  while ((match = productPattern.exec(allText)) !== null) {
    productMatches.push({
      code: match[1],
      description: match[2].trim(),
      position: match.index
    });
  }

  // For each product, find its items
  for (let i = 0; i < productMatches.length; i++) {
    const currentProduct = productMatches[i];
    const nextProduct = productMatches[i + 1];
    
    // Extract text between current and next product
    const startPos = currentProduct.position;
    const endPos = nextProduct ? nextProduct.position : allText.length;
    const productSection = allText.substring(startPos, endPos);

    // Find items in this section
    const items: Array<{ codigo: string; descricao: string; setor: string }> = [];
    tablePattern.lastIndex = 0;
    
    let itemMatch;
    while ((itemMatch = tablePattern.exec(productSection)) !== null) {
      items.push({
        codigo: itemMatch[1],
        descricao: itemMatch[2].trim(),
        setor: itemMatch[3]
      });
    }

    if (items.length > 0) {
      products.push({
        productCode: currentProduct.code,
        productDescription: currentProduct.description,
        items: items
      });
    }
  }

  return {
    products,
    totalItems: products.reduce((sum, p) => sum + p.items.length, 0)
  };
}
