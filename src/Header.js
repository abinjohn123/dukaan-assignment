export default function Header() {
  return (
    <header className="header side-padding">
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
  );
}
