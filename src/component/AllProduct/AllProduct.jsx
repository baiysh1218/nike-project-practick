import { Pagination, Slider, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../productContext/productContext";
import Cart from "../Cart/Cart";
import Details from "../Details/Details";
import Section from "../Section/Section";

const AllProduct = () => {
  const { getProducts, products, pages } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );

  const [price, setPrice] = useState([1, 100000]);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 6,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  console.log(products);
  return (
    <>
      <div className="container">
        <div className="search-slider-block">
          <input
            className="all-product-input0-search"
            onChange={e => setSearch(e.target.value)}
            placeholder="search"
          />
          <div className="slider-block">
            <Slider
              color="secondary"
              className="slider-all-product"
              getAriaLabel={() => "Temperature range"}
              value={price}
              onChange={(e, value) => {
                console.log(value);
                setPrice(value);
              }}
              min={1}
              max={500}
              step={10}
              valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
            />
          </div>
        </div>
        <div className="cart-block-section">
          {products.map(item => (
            <Cart key={item.id} item={item} />
          ))}
        </div>
        <div className="pagination-center">
          <Pagination
            onChange={(event, page) => {
              // console.log(page);
              setCurrentPage(page);
            }}
            className="all-product-pagination"
            page={currentPage}
            count={pages}
          />
        </div>
      </div>
    </>
  );
};
export default AllProduct;
