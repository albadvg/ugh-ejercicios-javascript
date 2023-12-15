const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

let body$$ = document.querySelector("body");
document.querySelector("button").remove();

let divList$$ = document.createElement("ul");

for (country of countries) {
  let countryDiv$$ = document.createElement("div");
  let countryH4$$ = document.createElement("h4");
  let countryImg$$ = document.createElement("img");
  let removeButton$$ = document.createElement("button");

  countryH4$$.textContent = country.title;
  countryImg$$.setAttribute("src", country.imgUrl);
  removeButton$$.textContent = `Borrar elemento`;
  removeButton$$.addEventListener("click", () => countryDiv$$.remove());

  countryDiv$$.appendChild(countryH4$$);
  countryDiv$$.appendChild(countryImg$$);
  countryDiv$$.appendChild(removeButton$$);

  divList$$.appendChild(countryDiv$$);
}

body$$.appendChild(divList$$);
