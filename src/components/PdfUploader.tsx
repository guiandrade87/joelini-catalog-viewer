import { useCallback, useState } from 'react';
import { Upload, FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { parsePdfCatalog } from '@/utils/pdfParser';
import { ParsedCatalog } from '@/types/product';
import { useToast } from '@/hooks/use-toast';

interface PdfUploaderProps {
  onParsed: (catalog: ParsedCatalog) => void;
}

export const PdfUploader = ({ onParsed }: PdfUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFile = useCallback(async (file: File) => {
    if (file.type !== 'application/pdf') {
      toast({
        title: 'Erro',
        description: 'Por favor, selecione um arquivo PDF.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      const catalog = await parsePdfCatalog(file);
      onParsed(catalog);
      toast({
        title: 'Sucesso!',
        description: `${catalog.products.length} produtos carregados com sucesso.`,
      });
    } catch (error) {
      console.error('Error parsing PDF:', error);
      toast({
        title: 'Erro ao processar PDF',
        description: 'Não foi possível processar o arquivo. Verifique o formato.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }, [onParsed, toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }, [handleFile]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-4">
      <Card
        className={`relative w-full max-w-2xl p-12 transition-all ${
          isDragging ? 'border-primary bg-primary/5' : 'border-dashed'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          {isLoading ? (
            <>
              <Loader2 className="h-16 w-16 animate-spin text-primary" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">Processando catálogo...</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Aguarde enquanto extraímos os dados do PDF
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="rounded-full bg-secondary/10 p-6">
                <FileText className="h-16 w-16 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Carregar Catálogo PDF</h3>
                <p className="mt-2 text-muted-foreground">
                  Arraste e solte o arquivo PDF ou clique para selecionar
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="secondary" size="lg" className="gap-2" asChild>
                  <label>
                    <Upload className="h-5 w-5" />
                    Selecionar PDF
                    <input
                      type="file"
                      accept=".pdf"
                      className="hidden"
                      onChange={handleFileInput}
                    />
                  </label>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Formato suportado: PDF • Tamanho máximo: 50MB
              </p>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};
