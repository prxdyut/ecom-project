import {
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch-hooks-web";
import React, { Fragment, useEffect, useRef } from "react";

import algoliasearch from "algoliasearch/lite";
import { render } from "react-dom";

const searchClient = algoliasearch(
  "9H0DYYY13N",
  "1a72e07a8df5188146ce90796e990f62"
);

export function Autocomplete(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment, render },
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} />;
}

function Hit({ hit }) {
  return (
    <article>
      {/* <img src={hit.image} alt={hit.name} /> */}
      {/* <p>{hit.categories[0]}</p> */}
      <h1>{hit.name}</h1>
      {/* <Highlight attribute="name" hit={hit} /> */}
      <p>{hit.price.formatted_with_symbol}</p>
    </article>
  );
}

export default function seoPage() {
  return (
    <InstantSearch searchClient={searchClient} indexName="products">
      <SearchBox />
      <RefinementList attribute="brand" />
      <Hits hitComponent={Hit} />
      <Pagination />
    </InstantSearch>
  );
}
