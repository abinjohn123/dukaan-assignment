import "./styles.css";
import Header from "./Header";
import Main from "./Main";
import Features from "./Features";
import Others from "./OtherProducts";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Features />
      <Others />
      <Footer />
    </div>
  );
}
