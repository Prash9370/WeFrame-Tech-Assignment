const ProductDetails = () => {
  // Small Images 
  const thumbnails = [
    { src: "/thumbnail.webp", alt: "Thumb", active: true },
    { src: "/thumbnail.webp", alt: "Thumb", active: false },
    { src: "/thumbnail.webp", alt: "Thumb", active: false },
    { src: "/thumbnail.webp", alt: "Thumb", active: false },
  ];

  // Features for product
  const features = [
    "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
    "Réglable en hauteur",
    "Appareil à raclette professionnel",
    "Boîtier de chauffe horizontal réglable en hauteur",
    "220V",
    "900W",
  ];

  const sections = [
    { label: "LIVRAISONS", action: "+" },
    { label: "QUESTIONS", action: "+" },
  ];

  return (
    <div className="container my-4 p-0">
      <span className="text-dark fw-medium fs-14 py-2 px-1 font-geist">Home</span>
      <span className="text-grey fw-normal fs-16 py-2 px-1">•</span>
      <span className="text-grey fw-medium fs-14 py-2 px-1 font-geist">Art de la table</span>

      <div className="row pt-4">
        <div className="col-md-6 d-flex flex-row rounded-1 bg-color3">
          <div className="d-flex mt-3 flex-column w-auto">
            {/* Thumbnails rendering */ }
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb.src}
                alt={thumb.alt}
                className={`thumbnailimg rounded-1 m-1 img-hover ${!thumb.active ? "opacity-50" : ""}`}
              />
            ))}
          </div>
          {/* Main Image Rendering*/}
          <img src="/main.webp" alt="Product" className="w-75 img-hover" />
        </div>

        <div className="col-md-6">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h1 className="font-playfair w-100">Cheese – appareil à raclette 1/2 roue</h1>
            <i className="bi bi-heart mx-2 ml-auto"></i>
          </div>
          <h2 className="font-geist">
            <span className="text-dark fs-4">39,50€</span>
            <span className="text-secondary fs-6">/ pièce</span>
          </h2>
          <hr className="my-1" />
          <p className="mt-3 mb-3 font-geist">
            <img src="/ruler.webp" alt="Ruler" className="me-2 icons" />
            20<sup>cm</sup>
            <img src="/slash.webp" alt="Area" className="mx-2 icons" />
            50<sup>cm</sup>
          </p>
          <hr className="my-1" />
          <div className="mt-4">
            <p className="font-geist fs-12">
              {/* Features rendering */}
              {features.map((feature, index) => (
                <span key={index}>
                  {feature}
                  <br />
                </span>
              ))}
            </p>
            <hr className="my-4" />
            <div className="d-flex flex-row">
              {/* Quantity Counter */}
              <div className="btn-group h35">
                <button type="button" className="btn btn-light btn-sm">-</button>
                <button type="button" className="btn btn-light btn-sm">1</button>
                <button type="button" className="btn btn-light btn-sm">+</button>
              </div>
              <span className="btn font-space-grotesk bg-color4 d-flex align-items-center justify-content-center w-100 rounded-1 mx-2 text-white fs-14 hover-text-dark click">
                AJOUTER AU PANIER
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          {/*Product Description*/}
          <span className="font-space-grotesk fs-6">Description produit</span>
          <p className="font-geist fs-12">
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
            pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour
            votre mariage, une fête d'anniversaire ou du personnel, ce produit a
            fait l'objet d'une sélection rigoureuse par notre équipe. Il est en
            location chez nous sous la référence "VAJGC". Nous sommes à votre
            disposition pour que les événements de nos clients, même en
            last-minute, soient toujours une réussite. Vous pourrez trouver tout
            une série d'autre produit à louer de ce type dans la catégorie "Art de
            la Table".
          </p>
        </div>
        {/*Additional Sections Rendering*/}
        <div className="col-md-6">
          {sections.map((section, index) => (
            <span
              key={index}
              className="font-space-grotesk fs-6 d-flex align-items-center justify-content-between bg-color2 px-3 hover fw-normal"
            >
              <span>{section.label}</span>
              <p className="click pt-3">{section.action}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
