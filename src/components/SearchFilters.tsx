import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSetor: string;
  onSetorChange: (setor: string) => void;
  setores: string[];
  totalResults: number;
}

export const SearchFilters = ({
  searchQuery,
  onSearchChange,
  selectedSetor,
  onSetorChange,
  setores,
  totalResults,
}: SearchFiltersProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar por código ou descrição..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={selectedSetor} onValueChange={onSetorChange}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Todos os setores" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os setores</SelectItem>
              {setores.map((setor) => (
                <SelectItem key={setor} value={setor}>
                  {setor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Badge variant="secondary" className="gap-1.5">
          <span className="font-semibold">{totalResults}</span>
          <span className="font-normal">
            {totalResults === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </span>
        </Badge>
        {(searchQuery || selectedSetor !== 'all') && (
          <button
            onClick={() => {
              onSearchChange('');
              onSetorChange('all');
            }}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Limpar filtros
          </button>
        )}
      </div>
    </div>
  );
};
