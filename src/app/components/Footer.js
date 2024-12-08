import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark py-4 px-3 border-top">
        <div className="row">
          {/* Logo */}
          <div className="col-md-2 pt-4 ">
            <Image
              src="/logo.webp"
              alt="weframetech logo"
              width={150}
              height={80}
            />
          </div>

          {/* Practical Information */}
          <div className="col-md-2 pt-4">
            <h4 className="fw-semibold font-space-grotesk fs-13 text-muted ">INFOS PRATIQUES</h4>
            <ul className="list-unstyled font-geist fs-12">
              <li>A propos</li>
              <li>Livraisons & Reprises</li>
              <li>Mode d'emploi</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-2 pt-4">
            <h4 className="fw-semibold font-space-grotesk fs-13 text-muted">LEGAL</h4>
            <ul className="list-unstyled font-geist fs-12">
              <li>Mentions légales</li>
              <li>CGU</li>
              <li>CGV</li>
              <li>Politique de confidentialité</li>
            </ul>
          </div>

          {/* My account */}
          <div className="col-md-2 pt-4">
            <h4 className="fw-semibold font-space-grotesk fs-13 text-muted">MON COMPTE</h4>
            <ul className="list-unstyled font-geist fs-12">
              <li>Accéder à mon compte</li>
              <li>Ma liste d'envie</li>
              <li>Créer un compte</li>
              <li>Mot de passe oublié</li>
            </ul>
          </div>

          {/* Follow us */}
          <div className="col-md-2 pt-4 ms-auto text-end">
            <h4 className="fw-semibold font-space-grotesk fs-13 text-muted px-2">NOUS SUIVRE</h4>
            <div className="d-flex gap-2 justify-content-end">
              <i className="bi bi-twitter fs-5 p-1 px-2 border rounded"></i>
              <i className="bi bi-instagram fs-5 p-1 px-2 border rounded"></i>
              <i className="bi bi-linkedin fs-5 p-1 px-2 border rounded"></i>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
