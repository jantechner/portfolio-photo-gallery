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
    image72: require("./72dpi/w-drodze-do-dworku72.jpg").default,
    image300: require("./150dpi/w-drodze-do-dworku150.jpg").default,
    title: "W drodze do dworku",
    size: [55, 73],
    technique: "olej na płótnie",
    year: 2020,
    available: false,
    price: 1000
  },
  {
    id: 2,
    image72: require("./72dpi/ukojenie72.jpg").default,
    image300: require("./150dpi/ukojenie150.jpg").default,
    title: "Ukojenie",
    size: [35, 55],
    technique: "olej na płótnie",
    year: 2020,
    available: false,
    price: 1200
  },
  {
    id: 3,
    image72: require("./72dpi/portret-chopina72.jpg").default,
    image300: require("./150dpi/portret-chopina150.jpg").default,
    title: "Portret Chopina",
    size: [38, 46],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 4,
    image72: require("./72dpi/impresja72.jpg").default,
    image300: require("./150dpi/impresja150.jpg").default,
    title: "Impresja",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 5,
    image72: require("./72dpi/przygotowania72.jpg").default,
    image300: require("./150dpi/przygotowania150.jpg").default,
    title: "Przygotowania",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 6,
    image72: require("./72dpi/lata-8072.jpg").default,
    image300: require("./150dpi/lata-80150.jpg").default,
    title: "Lata 80.",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 7,
    image72: require("./72dpi/nie-zapomnij72.jpg").default,
    image300: require("./150dpi/nie-zapomnij150.jpg").default,
    title: "Nie zapomnij",
    size: [60, 70],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 8,
    image72: require("./72dpi/bukiet72.jpg").default,
    image300: require("./150dpi/bukiet150.jpg").default,
    title: "Bukiet",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 9,
    image72: require("./72dpi/promyk-slonca72.jpg").default,
    image300: require("./150dpi/promyk-slonca150.jpg").default,
    title: "Promyk słońca",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 10,
    image72: require("./72dpi/ule-na-ukrainie72.jpg").default,
    image300: require("./150dpi/ule-na-ukrainie150.jpg").default,
    title: "Ule na Ukrainie",
    size: [40, 60],
    technique: "olej na płótnie",
    year: 2016,
    available: false,
    price: 340
  },
  {
    id: 11,
    image72: require("./72dpi/malzenstwo72.jpg").default,
    image300: require("./150dpi/malzenstwo150.jpg").default,
    title: "Małżeństwo",
    size: [50, 60],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: 1234
  },
  {
    id: 12,
    image72: require("./72dpi/zachod-slonca72.jpg").default,
    image300: require("./150dpi/zachod-slonca150.jpg").default,
    title: "Zachód słońca",
    size: [54, 71],
    technique: "olej na płótnie",
    year: 2017,
    available: true,
    price: 350
  },
  {
    id: 13,
    image72: require("./72dpi/lesna-sciezka72.jpg").default,
    image300: require("./150dpi/lesna-sciezka150.jpg").default,
    title: "Leśna ścieżka",
    size: [43, 55],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: 400
  },
  {
    id: 14,
    image72: require("./72dpi/benedykt-XVI72.jpg").default,
    image300: require("./150dpi/benedykt-XVI150.jpg").default,
    title: "Benedykt XVI",
    size: [21, 30],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: 500
  },
  {
    id: 15,
    image72: require("./72dpi/fala72.jpg").default,
    image300: require("./150dpi/fala150.jpg").default,
    title: "Fala",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 16,
    image72: require("./72dpi/kwiaty-we-wlosach72.jpg").default,
    image300: require("./150dpi/kwiaty-we-wlosach150.jpg").default,
    title: "Kwiaty we włosach",
    size: [50, 70],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 17,
    image72: require("./72dpi/nawiedzenie-sw-elzbiety72.jpg").default,
    image300: require("./150dpi/nawiedzenie-sw-elzbiety150.jpg").default,
    title: "Nawiedzenie św. Elżbiety",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 18,
    image72: require("./72dpi/tereska-od-dzieciatka-jezus72.jpg").default,
    image300: require("./150dpi/tereska-od-dzieciatka-jezus150.jpg").default,
    title: "Św. Tereska od dzieciątka Jezus",
    size: [21, 30],
    technique: "olej na płótnie",
    year: 2019,
    available: false,
    price: null
  },
  {
    id: 19,
    image72: require("./72dpi/martwa-natura-z-tulipanami72.jpg").default,
    image300: require("./150dpi/martwa-natura-z-tulipanami150.jpg").default,
    title: "Martwa natura z tulipanami",
    size: [30, 40],
    technique: "olej na płótnie",
    year: 2018,
    available: false,
    price: null
  },
  {
    id: 20,
    image72: require("./72dpi/poranek-w-ogrodzie72.jpg").default,
    image300: require("./150dpi/poranek-w-ogrodzie150.jpg").default,
    title: "Poranek w ogrodzie",
    size: [60, 70],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 21,
    image72: require("./72dpi/lato72.jpg").default,
    image300: require("./150dpi/lato150.jpg").default,
    title: "Lato",
    size: [70, 100],
    technique: "tempera na kartonie",
    year: 2015,
    available: true,
    price: null
  },
  {
    id: 22,
    image72: require("./72dpi/portret-chopina272.jpg").default,
    image300: require("./150dpi/portret-chopina2150.jpg").default,
    title: "Portret Chopina II",
    size: [38, 46],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 23,
    image72: require("./72dpi/baletnica-przed-wystepem72.jpg").default,
    image300: require("./150dpi/baletnica-przed-wystepem150.jpg").default,
    title: "Batelnica przed występem",
    size: [70, 100],
    technique: "olej na kartonie",
    year: 2016,
    available: false,
    price: null
  },
  {
    id: 24,
    image72: require("./72dpi/duma72.jpg").default,
    image300: require("./150dpi/duma150.jpg").default,
    title: "Duma",
    size: [30, 40],
    technique: "olej na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 25,
    image72: require("./72dpi/primabalerina72.jpg").default,
    image300: require("./150dpi/primabalerina150.jpg").default,
    title: "Primabalerina",
    size: [70, 100],
    technique: "tempera, pastel na kartonie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 26,
    image72: require("./72dpi/dzieci-z-bullerbyn72.jpg").default,
    image300: require("./150dpi/dzieci-z-bullerbyn150.jpg").default,
    title: "Dzieci z Bullerbyn",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2018,
    available: false,
    price: null
  },
  {
    id: 27,
    image72: require("./72dpi/maksymilian-maria-kolbe72.jpg").default,
    image300: require("./150dpi/maksymilian-maria-kolbe150.jpg").default,
    title: "Maksymilian Maria Kolbe",
    size: [30, 40],
    technique: "olej na płótnie",
    year: 2017,
    available: false,
    price: null
  },
  {
    id: 28,
    image72: require("./72dpi/strach-na-wroble72.jpg").default,
    image300: require("./150dpi/strach-na-wroble150.jpg").default,
    title: "Strach na wróble",
    size: [70, 100],
    technique: "tempera na kartonie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 29,
    image72: require("./72dpi/pani-wiosna72.jpg").default,
    image300: require("./150dpi/pani-wiosna150.jpg").default,
    title: "Pani wiosna",
    size: [70, 100],
    technique: "tempera na kartonie",
    year: 2015,
    available: true,
    price: null
  },
  {
    id: 30,
    image72: require("./72dpi/tancerz72.jpg").default,
    image300: require("./150dpi/tancerz150.jpg").default,
    title: "Tancerz",
    size: [70, 100],
    technique: "tempera na kartonie",
    year: 2015,
    available: true,
    price: null
  },
  {
    id: 31,
    image72: require("./72dpi/tatrzanskie-widoki72.jpg").default,
    image300: require("./150dpi/tatrzanskie-widoki150.jpg").default,
    title: "Tatrzańskie widoki",
    size: [50, 70],
    technique: "akryl na kartonie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 32,
    image72: require("./72dpi/w-nieznane72.jpg").default,
    image300: require("./150dpi/w-nieznane150.jpg").default,
    title: "W nieznane",
    size: [40, 50],
    technique: "akryl na płótnie",
    year: 2015,
    available: false,
    price: null
  },
  {
    id: 33,
    image72: require("./72dpi/uliczka-zalana-sloncem72.jpg").default,
    image300: require("./150dpi/uliczka-zalana-sloncem150.jpg").default,
    title: "Uliczka zalana słońcem",
    size: [70, 100],
    technique: "olej na kartonie",
    year: 2016,
    available: false,
    price: null
  },
  {
    id: 34,
    image72: require("./72dpi/bieszczady72.jpg").default,
    image300: require("./150dpi/bieszczady150.jpg").default,
    title: "Bieszczady",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2016,
    available: false,
    price: null
  },
  {
    id: 35,
    image72: require("./72dpi/sw-jacek-odrowaz72.jpg").default,
    image300: require("./150dpi/sw-jacek-odrowaz150.jpg").default,
    title: "Św. Jacek Odrowąż",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2016,
    available: false,
    price: null
  },
  {
    id: 36,
    image72: require("./72dpi/ule-na-ukrainie272.jpg").default,
    image300: require("./150dpi/ule-na-ukrainie2150.jpg").default,
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
    [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 2, 5, 8, 11, 14],
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 23, 26, 29, 32, 35, 17, 20]
  ],
  onecolumn: [paintings.map(painting => painting.id)]
};

const orderAvailable = {
  threecolumns: [[1, 2], [14], []],
  twocolumns: [[1, 2], [14]],
  onecolumn: [
    paintings
      .filter(painting => painting.available)
      .map(painting => painting.id)
  ]
};

export function getOrderAvailable(numberOfColumns) {
  if (numberOfColumns === 3) {
    return orderAvailable.threecolumns;
  } else if (numberOfColumns === 2) {
    return orderAvailable.twocolumns;
  } else {
    return orderAvailable.onecolumn;
  }
}

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
