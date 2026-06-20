import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Analytics} from "@vercel/analytics/react";


import { createRoot } from "react-dom/client";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

/* pages */
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Category from "./pages/Category";
import Page404 from "./pages/Page404";
import Search from "./pages/Search";
import Layout from "./pages/Layout";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Analytics/>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>

        <Route path="/movie">
          <Route path="category/:category" element={<Category />}></Route>
          <Route path="detail/:id" element={<Detail />}></Route>
        </Route>

        <Route path="/TV">
          <Route path="category/:category" element={<Category />}></Route>
          <Route path="detail/:id" element={<Detail />}></Route>
        </Route>

        <Route path="/search/:name" element={<Search />}></Route>

        <Route path="*" element={<Page404 />}></Route>
      </Route>
    </Routes>
    <Analytics />
  </BrowserRouter>,
);
