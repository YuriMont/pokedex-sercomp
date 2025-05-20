"use client";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { PokemonContext } from "@/config/context/pokemonContext";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";

export function PokemonPagination() {
  const pokemonContext = useContext(PokemonContext);
  const TOTAL_POKEMONS = pokemonContext?.count || 1;
  const MAX_POKEMONS_BY_PAGE = pokemonContext?.maxPokemonsByPage || 1;
  const TOTAL_PAGES = TOTAL_POKEMONS / MAX_POKEMONS_BY_PAGE;

  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);

  const renderPageLinks = () => {
    const links = [];

    if (TOTAL_PAGES <= 7) {
      // Mostrar todos se for pequeno
      pages.forEach((page) => {
        links.push(
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        );
      });
    } else {
      // Mostrar alguns com reticências
      const visiblePages = new Set([
        1,
        TOTAL_PAGES,
        currentPage,
        currentPage - 1,
        currentPage + 1,
      ]);

      let lastAdded = 0;
      for (let page = 1; page <= TOTAL_PAGES; page++) {
        if (visiblePages.has(page)) {
          links.push(
            <PaginationItem key={page}>
              <PaginationLink
                href={`/?page=${page}`}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
          lastAdded = page;
        } else if (lastAdded !== -1) {
          links.push(
            <PaginationItem key={`ellipsis-${page}`}>
              <PaginationEllipsis />
            </PaginationItem>
          );
          lastAdded = -1; // Evita múltiplas reticências
        }
      }
    }

    return links;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            href={`/?page=${currentPage - 1}`}
          />
        </PaginationItem>

        {renderPageLinks()}

        <PaginationItem> 
          <PaginationNext
          className={currentPage === TOTAL_PAGES ? "pointer-events-none opacity-50" : ""}
            href={`/?page=${currentPage + 1}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
