/* eslint-disable @next/next/no-img-element */
import React from "react";

// Components
import ProductCard from "./ProductCard/ProductCard";

function HomePage() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 gx-0">
              <img
                src="https://dummyimage.com/1920X768/cfcfcf/000000.png&text=Banner"
                className="img-fluid"
                alt="Banner principal de la home"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h3>Nuestros productos seleccionados</h3>
            </div>
          </div>

          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
