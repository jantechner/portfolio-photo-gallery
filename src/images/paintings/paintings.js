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

export const paintings = [
  {
    id: 1,
    image72: require("./w-drodze-do-dworku.jpg").default,
    image300: require("./w-drodze-do-dworku.jpg").default,
    title: "W drodze do dworku",
    size: [55, 73],
    technique: "olej na płótnie",
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 2,
    image72: require("./ukojenie.jpg").default,
    image300: require("./ukojenie.jpg").default,
    title: "Ukojenie",
    size: [35, 55],
    technique: "olej na płótnie",
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 3,
    image72: require("./portret-chopina.jpg").default,
    image300: require("./portret-chopina.jpg").default,
    title: "Portret Chopina",
    size: [38, 46],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 4,
    image72: require("./impresja.jpg").default,
    image300: require("./impresja.jpg").default,
    title: "Impresja",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 5,
    image72: require("./przygotowania.jpg").default,
    image300: require("./przygotowania.jpg").default,
    title: "Przygotowania",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 6,
    image72: require("./lata-80.jpg").default,
    image300: require("./lata-80.jpg").default,
    title: "Lata 80.",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 7,
    image72: require("./nie-zapomnij.jpg").default,
    image300: require("./nie-zapomnij.jpg").default,
    title: "Nie zapomnij",
    size: [60, 70],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 8,
    image72: require("./bukiet.jpg").default,
    image300: require("./bukiet.jpg").default,
    title: "Bukiet",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 9,
    image72: require("./promyk-slonca.jpg").default,
    image300: require("./promyk-slonca.jpg").default,
    title: "Promyk słońca",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 10,
    image72: require("./ule-na-ukrainie.jpg").default,
    image300: require("./ule-na-ukrainie.jpg").default,
    title: "Ule na Ukrainie",
    size: [40, 60],
    technique: "olej na płótnie",
    year: 2016,
    available: false,
    price: null
  },
  {
    id: 11,
    image72: require("./malzenstwo.jpg").default,
    image300: require("./malzenstwo.jpg").default,
    title: "Małżeństwo",
    size: [50, 60],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 12,
    image72: require("./zachod-slonca.jpg").default,
    image300: require("./zachod-slonca.jpg").default,
    title: "Zachód słońca",
    size: [54, 71],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 13,
    image72: require("./lesna-sciezka.jpg").default,
    image300: require("./lesna-sciezka.jpg").default,
    title: "Leśna ścieżka",
    size: [43, 55],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 14,
    image72: require("./benedykt-XVI.jpg").default,
    image300: require("./benedykt-XVI.jpg").default,
    title: "Benedykt XVI",
    size: [21, 30],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 15,
    image72: require("./fala.jpg").default,
    image300: require("./fala.jpg").default,
    title: "Fala",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 16,
    image72: require("./kwiaty-we-wlosach.jpg").default,
    image300: require("./kwiaty-we-wlosach.jpg").default,
    title: "Kwiaty we włosach",
    size: [50, 70],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 17,
    image72: require("./nawiedzenie-sw-elzbiety.jpg").default,
    image300: require("./nawiedzenie-sw-elzbiety.jpg").default,
    title: "Nawiedzenie św. Elżbiety",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 18,
    image72: require("./tereska-od-dzieciatka-jezus.jpg").default,
    image300: require("./tereska-od-dzieciatka-jezus.jpg").default,
    title: "Św. Tereska od dzieciątka Jezus",
    size: [21, 30],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 19,
    image72: require("./martwa-natura-z-tulipanami.jpg").default,
    image300: require("./martwa-natura-z-tulipanami.jpg").default,
    title: "Martwa natura z tulipanami",
    size: [30, 40],
    technique: "olej na płótnie",
    year: 2018,
    available: false,
    price: null
  },
  {
    id: 20,
    image72: require("./poranek-w-ogrodzie.jpg").default,
    image300: require("./poranek-w-ogrodzie.jpg").default,
    title: "Poranek w ogrodzie",
    size: [60, 70],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 21,
    image72: require("./lato.jpg").default,
    image300: require("./lato.jpg").default,
    title: "Lato",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 22,
    image72: require("./portret-chopina2.jpg").default,
    image300: require("./portret-chopina2.jpg").default,
    title: "Portret Chopina II",
    size: [38, 46],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 23,
    image72: require("./baletnica-przed-wystepem.jpg").default,
    image300: require("./baletnica-przed-wystepem.jpg").default,
    title: "Batelnica przed występem",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2016,
    available: false,
    price: null
  },
  {
    id: 24,
    image72: require("./duma.jpg").default,
    image300: require("./duma.jpg").default,
    title: "Duma",
    size: [30, 40],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 25,
    image72: require("./primabalerina.jpg").default,
    image300: require("./primabalerina.jpg").default,
    title: "Primabalerina",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 26,
    image72: require("./dzieci-z-bullerbyn.jpg").default,
    image300: require("./dzieci-z-bullerbyn.jpg").default,
    title: "Dzieci z Bullerbyn",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2018,
    available: false,
    price: null
  },
  {
    id: 27,
    image72: require("./maksymilian-maria-kolbe.jpg").default,
    image300: require("./maksymilian-maria-kolbe.jpg").default,
    title: "Maksymilian Maria Kolbe",
    size: [30, 40],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 28,
    image72: require("./strach-na-wroble.jpg").default,
    image300: require("./strach-na-wroble.jpg").default,
    title: "Strach na wróble",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 29,
    image72: require("./pani-wiosna.jpg").default,
    image300: require("./pani-wiosna.jpg").default,
    title: "Pani wiosna",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 30,
    image72: require("./tancerz.jpg").default,
    image300: require("./tancerz.jpg").default,
    title: "Tancerz",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 31,
    image72: require("./tatrzanskie-widoki.jpg").default,
    image300: require("./tatrzanskie-widoki.jpg").default,
    title: "Tatrzańskie widoki",
    size: [50, 70],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 32,
    image72: require("./w-nieznane.jpg").default,
    image300: require("./w-nieznane.jpg").default,
    title: "W nieznane",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 33,
    image72: require("./uliczka-zalana-słoncem.jpg").default,
    image300: require("./uliczka-zalana-słoncem.jpg").default,
    title: "Uliczka zalana słońcem",
    size: [70, 100],
    technique: "olej na płótnie",
    year: 2016,
    available: false,
    price: null
  },
  {
    id: 34,
    image72: require("./bieszczady.jpg").default,
    image300: require("./bieszczady.jpg").default,
    title: "Bieszczady",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2016,
    available: false,
    price: null
  },
  {
    id: 35,
    image72: require("./sw-jacek-odrowaz.jpg").default,
    image300: require("./sw-jacek-odrowaz.jpg").default,
    title: "Św. Jacek Odrowąż",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 36,
    image72: require("./ule-na-ukrainie2.jpg").default,
    image300: require("./ule-na-ukrainie2.jpg").default,
    title: "Ule na Ukrainie II",
    size: [40, 60],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  }
];

const order = {
  threecolumns: [
    [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]
  ],
  twocolumns: [
    [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 2, 5, 8, 11, 14, 17, 20],
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 23, 26, 29, 32, 35]
  ],
  onecolumn: [paintings.map(painting => painting.id)]
};

export function getOrder(numberOfColumns) {
  if (numberOfColumns === 3) {
    return order.threecolumns;
  } else if (numberOfColumns === 2) {
    return order.twocolumns;
  } else {
    return order.onecolumn;
  }
}

export default paintings;
