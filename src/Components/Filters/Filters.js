import React from "react";
import { FilterStyle } from "./filtersStyle";

function Filters() {
  return (
    <FilterStyle>
      <h2>Filters</h2>
      <label>
        Valor Mínimo: <br />
        <input type="number" />
      </label>
      <label>
        Valor Máximo: <br />
        <input type="number" />
      </label>
      <label>
        Busca por Nome: <br />
        <input type="text" />
      </label>
    </FilterStyle>
  );
}

export default Filters;
