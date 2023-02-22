export default function Header() {
  return (
    <div className="header-container side-padding">
      <header className="header">
        <a href="https://mydukaan.io/">
          <img src="assets/logo/dukaan-white.svg" alt="Dukaan logo"></img>
        </a>
        <div className="header-right">
          <a href="#" className="header-link-blank">
            Sign in
          </a>
          <a href="#" className="header-link-white">
            Dukaan for PC
          </a>
        </div>
      </header>
    </div>
  );
}
