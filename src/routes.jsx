import React from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import App from "./app";
import Confirmation from "./components/confirmation/confirmation";
import Contact from "./components/contact-page/contact";

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" exact element={<App />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/confirmation" exact element={<Confirmation />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}
