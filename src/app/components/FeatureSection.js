import React from "react";

// Features data
const features = [
  { imgSrc: "/trolley.webp", alt: "Delivery", title: "Livraison & Reprise", desc: "Selon vos besoins" },
  { imgSrc: "/glasses.webp", alt: "Nettoyage", title: "Nettoyage", desc: "Selon vos besoins" },
  { imgSrc: "/tv.webp", alt: "Commande", title: "Commande Illimitée", desc: "Tout est possible" },
  { imgSrc: "/van.webp", alt: "Transport", title: "Transport & Enlèvement", desc: "On s’occupe de tout." },
];

const FeatureSection = () => {
  return (
    <div className="container my-5 p-0">
      <div className="sub-container pt-5">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-normal fs-4">
            On s’occupe de <span className="text-color4 fw-bold">tout</span>
          </h2>
          <p className="text-muted fs-11 text-grey font-geist">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
        </div>

        {/* Features */}
        <div className="row text-center mb-5 d-flex justify-content-center">
          {/* Features Rendering */}
          {features.map((feature, index) => (
            <div className="col-md-2 mb-3" key={index}>
              <div className="mb-2">
                {/* Icon */}
                <div className="d-flex justify-content-center align-items-center">
                  <img src={feature.imgSrc} alt={feature.alt} className="fs-2 w50" />
                </div>
              </div>
              {/* Title */}
              <h5 className="fw-medium font-space-grotesk fs18">{feature.title}</h5>
              {/* Description */}
              <p className="text-muted fs-14 font-geist">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription */}
      <div className="py-4 rounded-3 row">
        {/* Thumbnail Image */}
        <img
          src="/sofa.webp"
          alt="Thumbnail"
          className="col-md-6 rounded-custom1"
        />
        {/* Subscription Form */}
        <div className="align-items-center col-md-6 bg-color6 p-4 rounded-4">
          <div className="mb-3 mb-md-0">
            <h4 className="fw-normal font-space-grotesk fs-3 text-dark">
              S’inscrire & économiser <span className="text-color4">10%</span>
            </h4>
            <p className="font-geist fs-12 text-colorpink">
              Office ipsum you must be muted. Synergize helicopter prioritize
              anyway job due harvest most opportunity didn't. Yet busy any
              meeting shark light marginalised 4-blocker message. Productize
              corporate nail caught synergy highlights lunch. Company another
              pushback items dear or any.
            </p>
          </div>
          {/* Email Input Form */}
          <div>
            <form className="d-flex">
              <input
                type="email"
                className="form-control text-colorpink pink-border fs-14 font-geist fw-light"
                placeholder="john@doe.com"
                required
              />
              {/* Submit Button */}
              <button
                className="btn bg-color4 ms-2 text-nowrap rounded-2 text-white fs-14 fw-normal py-3 px-3"
                type="submit"
              >
                S’INSCRIRE <i className="bi bi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
