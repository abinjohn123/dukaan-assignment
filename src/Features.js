const featureCards = [
  {
    url: "assets/icons/web/1.svg",
    title: "Search",
    text:
      "Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen."
  },
  {
    url: "assets/icons/web/2.svg",
    title: "Select",
    text:
      "Choose from thousands of options generated by the slogan maker that fit your needs."
  },
  {
    url: "assets/icons/web/3.svg",
    title: "Stand out",
    text: "Congrats on your new slogan. It's time to win the world!"
  }
];

function Card({ url, title, text }) {
  return (
    <div className="feature-card">
      <img className="feature-card-image" src={url} alt={title}></img>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-text">{text}</p>
    </div>
  );
}

export default function Features() {
  return (
    <div className="features side-padding">
      {featureCards.map((feature, i) => (
        <Card url={feature.url} title={feature.title} text={feature.text} />
      ))}
    </div>
  );
}