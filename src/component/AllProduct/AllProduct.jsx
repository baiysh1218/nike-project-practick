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
      _limit: 2,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  // console.log(products);
  return (
    <>
      <div className="container">
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e, value) => {
            console.log(value);
            setPrice(value);
          }}
          min={0}
          max={100000}
          step={1000}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
        />
        <TextField
          onChange={e => setSearch(e.target.value)}
          style={{ margin: "20px" }}
          variant="outlined"
          label="search"
        />
        <div className="all-poduct-wrap">
          {products.map(item => (
            <Cart key={item.id} item={item} />
          ))}
        </div>
        <Pagination
          onChange={(event, page) => {
            // console.log(page);
            setCurrentPage(page);
          }}
          page={currentPage}
          count={pages}
        />

      </div>
    </>
  );
};
export default AllProduct;
