function Link({ url, text, highlight }) {
  return (
    <a className="footer-link" href={url}>
      {text}{" "}
      {highlight && <span className="footer-highlight">{highlight}</span>}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="side-padding footer">
      <img src="assets/logo/dukaan-white.svg" alt="Dukaan logo" />
      <div className="footer-links">
        <Link url="#" text="Contact" highlight={null} />
        <Link url="#" text="Tutorials" highlight={null} />
        <Link url="#" text="Privacy" highlight={null} />
        <Link url="#" text="About" highlight={null} />
        <Link url="#" text="Facebook" highlight={null} />
        <Link url="#" text="FAQ's" highlight={null} />
        <Link url="#" text="Blog" highlight={null} />
        <Link url="#" text="Banned Items" highlight={null} />
        <Link url="#" text="Jobs" highlight={3} />
        <Link url="#" text="Twitter" highlight={null} />
        <Link url="#" text="Linkedin" highlight={null} />
      </div>
      <div className="footer-credits">
        <p>Dukaan 2020, All rights reserved.</p>
        <div className="footer-credits-country">
          <p>Made in</p>
          <img src="assets/img/india-flag.png" alt="India flag" />
        </div>
      </div>
    </footer>
  );
}
