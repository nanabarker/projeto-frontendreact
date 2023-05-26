import React from "react";
import { FilterStyle } from "./filtersStyle";

export default function Filters({
  minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
}) {
  function handleMinFilter(event) {
    if (event.target.value < 0) {
      alert("Valor inválido!");
      setMinFilter(0);
    } else {
      setMinFilter(event.target.value);
    }
  }

  function handleMaxFilter(event) {
    if (event.target.value < 0) {
      alert("Valor inválido!");
      setMaxFilter(0);
    } else {
      setMaxFilter(event.target.value);
    }
  }

  function handleSearchFilter(event) {
    setSearchFilter(event.target.value);
  }

  return (
    <FilterStyle>
      <h2>Filters</h2>
      <label>
        Valor Mínimo: <br />
        <input type="number" value={minFilter} onChange={handleMinFilter} />
      </label>
      <label>
        Valor Máximo: <br />
        <input type="number" value={maxFilter} onChange={handleMaxFilter} />
      </label>
      <label>
        Busca por Nome: <br />
        <input type="text" value={searchFilter} onChange={handleSearchFilter} />
      </label>
    </FilterStyle>
  );
}

// export default Filters;
