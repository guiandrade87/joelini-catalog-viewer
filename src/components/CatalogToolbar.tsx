import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { setores } from '@/data/catalog-data';
import logoJoelini from '@/assets/logo-joelini.png';

interface CatalogToolbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSetores: string[];
  onSetoresChange: (setores: string[]) => void;
  onlyWithImage: boolean;
  onOnlyWithImageChange: (value: boolean) => void;
  sortBy: 'produtoId' | 'descricao' | 'setor';
  onSortByChange: (sort: 'produtoId' | 'descricao' | 'setor') => void;
  sortOrder: 'asc' | 'desc';
  onSortOrderChange: (order: 'asc' | 'desc') => void;
  totalResults: number;
}

export const CatalogToolbar = ({ searchQuery, onSearchChange, selectedSetores, onSetoresChange, onlyWithImage, onOnlyWithImageChange, sortBy, onSortByChange, sortOrder, onSortOrderChange, totalResults }: CatalogToolbarProps) => {
  const toggleSetor = (setor: string) => {
    if (selectedSetores.includes(setor)) {
      onSetoresChange(selectedSetores.filter((s) => s !== setor));
    } else {
      onSetoresChange([...selectedSetores, setor]);
    }
  };

  return (
    <div className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
      <div className="container py-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-3 w-full">
            <img src={logoJoelini} alt="Joelini Logo" className="h-12 w-auto object-contain" />
            <h1 className="text-xl font-bold" style={{ color: '#1E40AF' }}>CATÁLOGO DIGITAL</h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar..." value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} className="pl-10" />
            </div>

            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="shrink-0"><SlidersHorizontal className="h-4 w-4" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Filtros</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="px-2 py-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="only-image" className="text-sm">Apenas com imagem</Label>
                      <Switch id="only-image" checked={onlyWithImage} onCheckedChange={onOnlyWithImageChange} />
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Setores</DropdownMenuLabel>
                  {setores.map((setor) => (
                    <DropdownMenuCheckboxItem key={setor} checked={selectedSetores.includes(setor)} onCheckedChange={() => toggleSetor(setor)}>{setor}</DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Select value={sortBy} onValueChange={(v) => onSortByChange(v as any)}>
                <SelectTrigger className="w-[140px] sm:w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="produtoId">Código</SelectItem>
                  <SelectItem value="descricao">Descrição</SelectItem>
                  <SelectItem value="setor">Setor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{totalResults} itens</Badge>
            {selectedSetores.map((s) => <Badge key={s} variant="outline" className="text-xs">{s}</Badge>)}
          </div>
        </div>
      </div>
    </div>
  );
};
