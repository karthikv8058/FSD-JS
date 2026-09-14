import { useEffect, useState } from "react";
import MovieApp from "./components/MovieApp";
import { Route, Routes } from "react-router-dom";
import Products from "./components/routerComponents/Products";
import Navlinks from "./components/routerComponents/Navlinks";
import Home from "./components/routerComponents/Home";
import ProductDetails from "./components/routerComponents/ProductDetails";
import NotFound from "./components/routerComponents/NotFound";
import ProductAddSearch from "./components/routerComponents/ProductAddSearch";
import TodoList from "./components/TodoList";
import ShopEasy from "./components/shop-easy/ShopEasy";

function App() {
  return (
    <>
      <Navlinks />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/search" element={<ProductAddSearch />}></Route>
        <Route path="/movies" element={<MovieApp />}></Route>
        <Route path="/todo" element={<TodoList />}></Route>
        <Route path="shopeasy" element={<ShopEasy />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
