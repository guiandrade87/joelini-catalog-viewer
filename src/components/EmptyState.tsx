import { FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  onLoadSample?: () => void;
}

export const EmptyState = ({ onLoadSample }: EmptyStateProps) => {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-muted p-6">
            <FileQuestion className="h-12 w-12 text-muted-foreground" />
          </div>
        </div>
        <p className="text-lg font-medium text-muted-foreground">
          Nenhum produto encontrado
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Tente ajustar os filtros ou a busca
        </p>
        {onLoadSample && (
          <Button
            variant="outline"
            onClick={onLoadSample}
            className="mt-4"
          >
            Carregar catálogo de exemplo
          </Button>
        )}
      </div>
    </div>
  );
};
