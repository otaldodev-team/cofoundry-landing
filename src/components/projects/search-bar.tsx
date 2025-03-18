import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) => {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-[1fr_200px]">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar projetos..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Select>
        <SelectTrigger>
          <Filter className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Filtrar" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Mais Recentes</SelectItem>
          <SelectItem value="oldest">Mais Antigos</SelectItem>
          <SelectItem value="tech">Tecnologia</SelectItem>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="business">Negócios</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
