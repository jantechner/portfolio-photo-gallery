export function getPaintingById(id) {
  const painting = paintings.find(painting => painting.id.toString() === id);
  if (!painting) {
    return { valid: false };
  } else {
    return { valid: true, ...painting };
  }
}

export function getAdjacentPaintingsId(id) {
  let index = paintings.findIndex(p => p.id.toString() === id);
  if (index === -1) return;
  const previous = paintings[index === 0 ? index : index - 1].id;
  const next = paintings[index === paintings.length - 1 ? index : index + 1].id;
  return { previous: previous, next: next };
}

export function getPaintings() {
  return paintings;
}

export const order = {
  threecolumns: {
    1: [1, 2, 3],
    2: [4, 5, 6],
    3: [7]
  },
  twocolumns: {
    1: [1, 2, 3, 4],
    2: [5, 6, 7]
  },
  onecolumn: {
    1: [1, 2, 3, 4, 5, 6, 7]
  }
};

const paintings = [
  {
    id: 1,
    image: require("./w-drodze-do-dworku.jpg").default,
    title: "W drodze do dworku",
    size: [55, 73],
    technique: "olej na płótnie",
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 2,
    image: require("./ukojenie.jpg").default,
    title: "Ukojenie",
    size: [35, 55],
    technique: "olej na płótnie",
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 3,
    image: require("./portret-chopina.jpg").default,
    title: "Portret Chopina",
    size: [38, 46],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 4,
    image: require("./impresja.jpg").default,
    title: "Impresja",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 5,
    image: require("./przygotowania.jpg").default,
    title: "Przygotowania",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 6,
    image: require("./lata-80.jpg").default,
    title: "Lata 80.",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 7,
    image: require("./nie-zapomnij.jpg").default,
    title: "Nie zapomnij",
    size: [60, 70],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 8,
    image: require("./bukiet.jpg").default,
    title: "Bukiet",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 9,
    image: require("./promyk-slonca.jpg").default,
    title: "Promyk słońca",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 10,
    image: require("./ule-na-ukrainie.jpg").default,
    title: "Ule na Ukrainie",
    size: [40, 60],
    technique: "olej na płótnie",
    year: 2016,
    available: false,
    price: null
  },
  {
    id: 11,
    image: require("./malzenstwo.jpg").default,
    title: "Małżeństwo",
    size: [50, 60],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 12,
    image: require("./zachod-slonca.jpg").default,
    title: "Zachód słońca",
    size: [54, 71],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 13,
    image: require("./lesna-sciezka.jpg").default,
    title: "Leśna ścieżka",
    size: [43, 55],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 14,
    image: require("./benedykt-XVI.jpg").default,
    title: "Benedykt XVI",
    size: [21, 30],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 15,
    image: require("./fala.jpg").default,
    title: "Fala",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 16,
    image: require("./kwiaty-we-wlosach.jpg").default,
    title: "Kwiaty we włosach",
    size: [50, 70],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 17,
    image: require("./nawiedzenie-sw-elzbiety.jpg").default,
    title: "Nawiedzenie św. Elżbiety",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 18,
    image: require("./tereska-od-dzieciatka-jezus.jpg").default,
    title: "Św. Tereska od dzieciątka Jezus",
    size: [21, 30],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 19,
    image: require("./martwa-natura-z-tulipanami.jpg").default,
    title: "Martwa natura z tulipanami",
    size: [30, 40],
    technique: "olej na płótnie",
    year: 2018,
    available: false,
    price: null
  },
  {
    id: 20,
    image: require("./poranek-w-ogrodzie.jpg").default,
    title: "Poranek w ogrodzie",
    size: [60, 70],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 21,
    image: require("./lato.jpg").default,
    title: "Lato",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 22,
    image: require("./portret-chopina2.jpg").default,
    title: "Portret Chopina II",
    size: [38, 46],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 23,
    image: require("./baletnica-przed-wystepem.jpg").default,
    title: "Batelnica przed występem",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2016,
    available: false,
    price: null
  },
  {
    id: 24,
    image: require("./duma.jpg").default,
    title: "Duma",
    size: [30, 40],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 25,
    image: require("./primabalerina.jpg").default,
    title: "Primabalerina",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 26,
    image: require("./dzieci-z-bullerbyn.jpg").default,
    title: "Dzieci z Bullerbyn",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2018,
    available: false,
    price: null
  },
  {
    id: 27,
    image: require("./maksymilian-maria-kolbe.jpg").default,
    title: "Maksymilian Maria Kolbe",
    size: [30, 40],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 28,
    image: require("./strach-na-wroble.jpg").default,
    title: "Strach na wróble",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 29,
    image: require("./pani-wiosna.jpg").default,
    title: "Pani wiosna",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 30,
    image: require("./tancerz.jpg").default,
    title: "Tancerz",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 31,
    image: require("./tatrzanskie-widoki.jpg").default,
    title: "Tatrzańskie widoki",
    size: [50, 70],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 32,
    image: require("./w-nieznane.jpg").default,
    title: "W nieznane",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 33,
    image: require("./uliczka-zalana-słoncem.jpg").default,
    title: "Uliczka zalana słońcem",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2016,
    available: false,
    price: null
  },
  {
    id: 34,
    image: require("./bieszczady.jpg").default,
    title: "Bieszczady",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2016,
    available: false,
    price: null
  },
  {
    id: 35,
    image: require("./sw-jacek-odrowaz.jpg").default,
    title: "Św. Jacek Odrowąż",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 36,
    image: require("./ule-na-ukrainie2.jpg").default,
    title: "Ule na Ukrainie II",
    size: [40, 60],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  }
];

export default paintings;
