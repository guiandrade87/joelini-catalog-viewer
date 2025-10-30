import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface CatalogToolbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSetores: string[];
  onSetoresChange: (setores: string[]) => void;
  onlyWithImage: boolean;
  onOnlyWithImageChange: (value: boolean) => void;
  sortBy: 'codigo-asc' | 'codigo-desc' | 'descricao-asc' | 'descricao-desc' | 'setor';
  onSortChange: (sort: 'codigo-asc' | 'codigo-desc' | 'descricao-asc' | 'descricao-desc' | 'setor') => void;
  totalResults: number;
  availableSetores: readonly string[];
}

export const CatalogToolbar = ({
  searchQuery,
  onSearchChange,
  selectedSetores,
  onSetoresChange,
  onlyWithImage,
  onOnlyWithImageChange,
  sortBy,
  onSortChange,
  totalResults,
  availableSetores,
}: CatalogToolbarProps) => {
  const toggleSetor = (setor: string) => {
    if (selectedSetores.includes(setor)) {
      onSetoresChange(selectedSetores.filter((s) => s !== setor));
    } else {
      onSetoresChange([...selectedSetores, setor]);
    }
  };

  const clearFilters = () => {
    onSearchChange('');
    onSetoresChange([]);
    onOnlyWithImageChange(false);
  };

  const hasFilters = searchQuery || selectedSetores.length > 0 || onlyWithImage;

  return (
    <div className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-primary-foreground"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H21V21H3V3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9H15V15H9V9Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">JOELINI</h1>
              <p className="text-xs text-muted-foreground">Catálogo Digital</p>
            </div>
          </div>

          {/* Search and Actions */}
          <div className="flex flex-1 items-center gap-2 md:max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar por código, descrição ou setor..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <SlidersHorizontal className="h-4 w-4" />
                  {(selectedSetores.length > 0 || onlyWithImage) && (
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground">
                      {selectedSetores.length + (onlyWithImage ? 1 : 0)}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Filtros</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                <div className="px-2 py-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="only-image" className="text-sm">
                      Apenas com imagem
                    </Label>
                    <Switch
                      id="only-image"
                      checked={onlyWithImage}
                      onCheckedChange={onOnlyWithImageChange}
                    />
                  </div>
                </div>

                <DropdownMenuSeparator />
                <DropdownMenuLabel>Setores</DropdownMenuLabel>
                
                {availableSetores.map((setor) => (
                  <DropdownMenuCheckboxItem
                    key={setor}
                    checked={selectedSetores.includes(setor)}
                    onCheckedChange={() => toggleSetor(setor)}
                  >
                    {setor}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sortBy} onValueChange={(v) => onSortChange(v as any)}>
                  <DropdownMenuRadioItem value="codigo-asc">
                    Código (crescente)
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="codigo-desc">
                    Código (decrescente)
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="descricao-asc">
                    Descrição (A-Z)
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="descricao-desc">
                    Descrição (Z-A)
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="setor">
                    Setor
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Active filters and results */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="gap-1.5">
            <span className="font-semibold">{totalResults}</span>
            <span className="font-normal">
              {totalResults === 1 ? 'item' : 'itens'}
            </span>
          </Badge>

          {selectedSetores.map((setor) => (
            <Badge
              key={setor}
              variant="outline"
              className="gap-1 cursor-pointer hover:bg-destructive/10"
              onClick={() => toggleSetor(setor)}
            >
              {setor}
              <span className="text-xs">×</span>
            </Badge>
          ))}

          {onlyWithImage && (
            <Badge
              variant="outline"
              className="gap-1 cursor-pointer hover:bg-destructive/10"
              onClick={() => onOnlyWithImageChange(false)}
            >
              Com imagem
              <span className="text-xs">×</span>
            </Badge>
          )}

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
