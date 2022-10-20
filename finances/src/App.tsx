import React from "react";
import { useState, useEffect } from "react";
import * as C from "./App.styles";

import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { Scrollbars } from "react-custom-scrollbars-2";

import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [category, setCategory] = useState(categories);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <>
      <C.Container className="custom-scrollbars__content">
        <C.Header>
          <C.HeaderText>Custom Scrollbars</C.HeaderText>
        </C.Header>

        <C.Body>
          {/* Área de informações */}
          testando a criaçao da branch feat/teste
          {/* Área de inserção */}
          {/* Tabela de itens */}
        </C.Body>
      </C.Container>

      <C.Container className="custom-scrollbars__content">
        <C.Header>
          <C.HeaderText>Custom Scrollbars</C.HeaderText>
        </C.Header>

        <C.Body>
          {/* Área de informações */}
          testando a criaçao da branch feat/teste
          {/* Área de inserção */}
          {/* Tabela de itens */}
        </C.Body>
      </C.Container>

      <C.Container className="custom-scrollbars__content">
        <C.Header>
          <C.HeaderText>Custom Scrollbars</C.HeaderText>
        </C.Header>

        <C.Body>
          {/* Área de informações */}
          testando a criaçao da branch feat/teste
          {/* Área de inserção */}
          {/* Tabela de itens */}
        </C.Body>
      </C.Container>

      <C.Container className="custom-scrollbars__content">
        <C.Header>
          <C.HeaderText>Custom Scrollbars</C.HeaderText>
        </C.Header>

        <C.Body>
          {/* Área de informações */}
          testando a criaçao da branch feat/teste
          {/* Área de inserção */}
          {/* Tabela de itens */}
        </C.Body>
      </C.Container>

      <C.Container className="custom-scrollbars__content">
        <C.Header>
          <C.HeaderText>Custom Scrollbars</C.HeaderText>
        </C.Header>

        <C.Body>
          {/* Área de informações */}
          testando a criaçao da branch feat/teste e hjbhjgjghjgf
          {/* Área de inserção */}
          {/* Tabela de itens */}
        </C.Body>
      </C.Container>
    </>
  );
};

export default App;
