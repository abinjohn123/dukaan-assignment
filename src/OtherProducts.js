const otherProducts = [
  {
    url: "assets/img/Rectangle-124.png",
    title: "Privacy Policy Generator",
    text:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
  },
  {
    url: "assets/img/Rectangle-125.png",
    title: "Terms & Conditions Generator",
    text:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
  },
  {
    url: "assets/img/Rectangle-126.png",
    title: "Domain Name Generator",
    text:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
  },
  {
    url: "assets/img/Rectangle-127.png",
    title: "Invoice Generator",
    text:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
  }
];

/*
  Create a product card that has an image, title, and description
*/
function ProductCard({ product }) {
  return (
    <div className="other-products--product">
      <img className="product-img" src={product.url} alt={product.title}></img>
      <h5 className="product-title">{product.title}</h5>
      <p className="product-text">{product.text}</p>
    </div>
  );
}

/*
  A section that displays other free products from Dukaan.
  Maps over the otherProducts array and generates
  a product card for each array item.
*/
export default function Others() {
  return (
    <section className="side-padding other-products">
      <h2 className="other-products-header">Try our other free products</h2>
      <div className="products-gallery">
        {otherProducts.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </section>
  );
}
