import { useState } from "react";

function Result({ textContent, index }) {
  console.log(index);
  const [display, setDisplay] = useState("none");
  const [hoverContent, setHoverContent] = useState("Click to copy");

  function handleMouseIn() {
    setDisplay("block");
  }
  function handleMouseLeave() {
    setDisplay("none");
    setHoverContent("Click to copy");
  }
  function handleMouseClick() {
    setHoverContent("Copied!");
  }

  const hoverSyle = {
    display,
    [`${index % 2 === 0 ? "left" : "right"}`]: "-16px",
    transform: `translateX(${index % 2 === 0 ? "-" : ""}100%)`
  };

  return (
    <p
      className="slogan-result"
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseClick}
    >
      {textContent}
      <span className={`--hover`} style={hoverSyle}>
        {hoverContent}
      </span>
    </p>
  );
}

function SearchResults() {
  const results = [
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "Review the facts cool is the best.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best.",
    "There is no Sore it will Not Heal, No cool it will not Subdue.",
    "Review the facts cool is the best."
  ];
  return (
    <div className="slogan-search-results">
      {results.map((result, index) => (
        <Result key={index} textContent={result} index={index} />
      ))}
    </div>
  );
}

function PageNumber({ number, isActive }) {
  return (
    <button className={`page-number ${isActive ? "--active" : ""}`}>
      {number}
    </button>
  );
}

export default function Main() {
  return (
    <div className="main-background side-padding">
      <main className="main">
        <header className="slogan-header">
          <h1>Free slogan maker</h1>
          <p>
            Simply enter a term that describes your business, and get up to
            1,000 relevant slogans for free.
          </p>
        </header>
        <div className="slogan-search">
          <p className="slogan-search-caption">Word for your slogan</p>
          <div className="slogan-search-component">
            <input type="text" placeholder="cozy" />
            <button className="btn-clear-search">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.63024 3.63028C3.93947 3.32105 4.42865 3.28989 4.77363 3.55246L4.86269 3.63028L8.99999 7.76813L13.1373 3.63028C13.4549 3.31264 13.9568 3.29146 14.299 3.56675L14.3697 3.63028C14.679 3.93951 14.7101 4.42869 14.4391 4.78406L14.3697 4.86274L10.2319 9L14.3697 13.1373C14.6874 13.455 14.7086 13.9568 14.4333 14.299L14.3697 14.3698C14.0605 14.679 13.5713 14.7102 13.216 14.4391L13.1373 14.3698L8.99928 10.2319L4.86269 14.3698C4.54505 14.6874 4.0432 14.7086 3.701 14.4333L3.63024 14.3698C3.321 14.0605 3.28985 13.5714 3.56088 13.216L3.63024 13.1373L7.76741 9L3.63024 4.86274C3.31259 4.54509 3.29141 4.04325 3.56671 3.70104L3.63024 3.63028Z"
                  fill="#4D4D4D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.47123 3.4712C3.86028 3.08215 4.47568 3.04288 4.91 3.37344L4.92212 3.38266L5.02226 3.47085L9.00008 7.44993L12.9783 3.47122C13.378 3.07146 14.0094 3.04494 14.4401 3.39146L14.4496 3.39911L14.5292 3.47097C14.9197 3.8615 14.956 4.47743 14.6181 4.92053L14.6132 4.92688L14.5292 5.02219L10.5502 9.00002L14.5289 12.9782C14.9287 13.378 14.9552 14.0093 14.6087 14.4401L14.601 14.4496L14.5292 14.5291C14.1386 14.9197 13.5227 14.956 13.0796 14.6181L13.0733 14.6132L12.978 14.5292L8.9994 10.5501L5.02191 14.5289C4.62215 14.9286 3.9908 14.9552 3.56006 14.6086L3.55056 14.601L3.471 14.5291C3.08047 14.1386 3.04413 13.5227 3.38207 13.0796L3.38691 13.0732L3.47091 12.9779L7.44931 9.00002L3.47123 5.02186C3.47123 5.02186 3.47123 5.02186 3.47123 5.02186C3.07147 4.6221 3.04497 3.99077 3.39149 3.56003L3.39913 3.55053L3.47123 3.4712ZM7.7675 9.00002L3.63033 13.1373L3.56098 13.216C3.28995 13.5714 3.3211 14.0606 3.63033 14.3698L3.70109 14.4333C4.0433 14.7086 4.54514 14.6874 4.86279 14.3698L8.99938 10.2319L13.1374 14.3698L13.2161 14.4392C13.5714 14.7102 14.0606 14.679 14.3698 14.3698L14.4334 14.299C14.7087 13.9568 14.6875 13.455 14.3698 13.1373L10.232 9.00002L14.3698 4.86276L14.4392 4.78408C14.7102 4.42872 14.6791 3.93954 14.3698 3.6303L14.2991 3.56677C13.9569 3.29148 13.455 3.31266 13.1374 3.6303L9.00008 7.76815L4.86279 3.6303L4.77373 3.55248C4.42875 3.28992 3.93956 3.32107 3.63033 3.6303L3.5668 3.70106C3.29151 4.04327 3.31269 4.54512 3.63033 4.86276L7.7675 9.00002Z"
                  fill="#4D4D4D"
                />
              </svg>
            </button>
          </div>
          <button className="slogan-search-btn">Generate slogans</button>
        </div>
        <div className="slogan-results">
          <header className="slogan-results-header">
            <h5>We have generated 1,023 slogans for “cozy”</h5>
            <button>Download all</button>
          </header>
          <SearchResults />
        </div>
        <div className="slogan-pagination">
          <div className="slogan-pagination-container">
            <PageNumber number={1} isActive={true} />
            <PageNumber number={2} />
            <PageNumber number={3} />
            <span className="page-number">...</span>
            <PageNumber number={21} />
          </div>
          <button className="slogan-pagination-btn">
            <p>Next</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.58311 10.2919C3.33086 10.0396 3.30792 9.6449 3.51431 9.36675L3.58311 9.28706L6.86984 6L3.58311 2.71294C3.33086 2.46069 3.30792 2.06596 3.51431 1.7878L3.58311 1.70811C3.83536 1.45586 4.23009 1.43292 4.50825 1.63931L4.58794 1.70811L8.37742 5.49758C8.62967 5.74983 8.6526 6.14457 8.44621 6.42273L8.37742 6.50242L4.58794 10.2919C4.31047 10.5694 3.86059 10.5694 3.58311 10.2919Z"
                fill="#146EB4"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
