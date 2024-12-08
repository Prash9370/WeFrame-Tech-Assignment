import Link from "next/link";
import React from "react";

// NavBar Items
const navigationItems = [
  { id: 1, label: "ART DE LA TABLE" },
  { id: 2, label: "MOBILIER" },
  { id: 3, label: "NAPPAGE" },
  { id: 4, label: "MATÉRIEL DE SALLE" },
  { id: 5, label: "CUISINE" },
  { id: 6, label: "BARBECUE" },
  { id: 7, label: "TENTE" },
  { id: 8, label: "CHAUFFAGE" },
  { id: 9, label: "PODIUM-PISTE DE DANSE" },
  { id: 10, label: "SON ET LUMIÈRE" },
  { id: 11, label: "PACKS" },
  { id: 12, label: "CONSOMMABLES" },
];

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column border-bottom pb-0">
    <div className="container-fluid px-4">
      {/* Logo */}
      <Link href="/" className="navbar-brand">
        <img src="/logo.webp" alt="Logo" className="logo" width={150} />
      </Link>

      {/* Header */}
      <span className="collapse navbar-collapse justify-content-end">
        {/* Search bar */}
        <span className="input-group d-flex justify-content-center align-items-center rounded-2 bg-color2">
          <input
            type="text"
            placeholder="Rechercher un produit"
            className="searchbar bg-color2 border-0"
          />
          <i className="bi bi-search click"></i>
        </span>

        {/* Inspiration button */}
        <span className="d-flex m-3 fs-8 click">
          <i className="bi bi-lightbulb mx-2"></i>Inspirations
        </span>

        {/* Favorites button */}
        <span
          className="d-flex d-inline-block flex-nowrap"
          style={{ width: "168px" }}
        >
          <i className="bi bi-heart mx-2"></i>
          <span className="text-nowrap click">Mes favoris</span>
          <span className="badge bg-secondary rounded-pill mx-2 lh16">24</span>
        </span>

        {/* Cart button */}
        <span className="cartButton m-3 bg-color1 p-2 px-3  rounded-2 text-white text-nowrap click">
          <i className="bi bi-cart2 mr-2"></i>&nbsp;<span>Panier</span>
        </span>

        {/* Language selector */}
        <span
          className="d-flex align-items-center justify-content-evenly"
          style={{ width: "100px", height: "48px" }}
        >
          <span
            style={{
              display: "inline-block",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "lightgrey",
            }}
          ></span>
          <span className="click">
            FR <i className="bi bi-chevron-down"></i>
          </span>
        </span>
      </span>
    </div>

    {/* NavBar Items Rendering */}
    <div className="navbar navbar-expand-lg navbar-light bg-light font-inter mb-0 pb-0">
      <div className="container-fluid">
        
        {/* Responsive Collapse */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-0">
            {/* Rendering navbar */}
            {navigationItems.map((item) => (
              <li className="nav-item mb-0" key={item.id}>
                <a className="nav-link text-nowrap fs-9 mb-0" href="#">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
