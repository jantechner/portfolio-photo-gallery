export function getTshirtById(id) {
  const tshirt = tshirts.find(t => t.id.toString() === id);
  if (!tshirt) {
    return { valid: false };
  } else {
    return { valid: true, ...tshirt };
  }
}

export function getAdjacentTshirtsId(id) {
  let index = tshirts.findIndex(t => t.id.toString() === id);
  if (index === -1) return;
  const previous = tshirts[index === 0 ? index : index - 1].id;
  const next = tshirts[index === tshirts.length - 1 ? index : index + 1].id;
  return { previous: previous, next: next };
}

export const tshirts = [
  {
    id: 1,
    image72: require("./72dpi/aparat72.jpg").default,
    image300: require("./150dpi/aparat150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 2,
    image72: require("./72dpi/babeczki72.jpg").default,
    image300: require("./150dpi/babeczki150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 3,
    image72: require("./72dpi/gandalf72.jpg").default,
    image300: require("./150dpi/gandalf150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 4,
    image72: require("./72dpi/gitara72.jpg").default,
    image300: require("./150dpi/gitara150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 5,
    image72: require("./72dpi/gitarakolory72.jpg").default,
    image300: require("./150dpi/gitarakolory150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 6,
    image72: require("./72dpi/koty72.jpg").default,
    image300: require("./150dpi/koty150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 7,
    image72: require("./72dpi/krolik72.jpg").default,
    image300: require("./150dpi/krolik150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 8,
    image72: require("./72dpi/leniwiec72.jpg").default,
    image300: require("./150dpi/leniwiec150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 9,
    image72: require("./72dpi/leniwiecglowa72.jpg").default,
    image300: require("./150dpi/leniwiecglowa150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 10,
    image72: require("./72dpi/olaf72.jpg").default,
    image300: require("./150dpi/olaf150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 11,
    image72: require("./72dpi/papuga72.jpg").default,
    image300: require("./150dpi/papuga150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 12,
    image72: require("./72dpi/renifer72.jpg").default,
    image300: require("./150dpi/renifer150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 13,
    image72: require("./72dpi/rower72.jpg").default,
    image300: require("./150dpi/rower150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 14,
    image72: require("./72dpi/sukienka72.jpg").default,
    image300: require("./150dpi/sukienka150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 15,
    image72: require("./72dpi/zuki72.jpg").default,
    image300: require("./150dpi/zuki150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 16,
    image72: require("./72dpi/zyrafy72.jpg").default,
    image300: require("./150dpi/zyrafy150.jpg").default,
    year: 2020,
    available: false,
    price: null
  },
  {
    id: 17,
    image72: require("./72dpi/piernik72.jpg").default,
    image300: require("./150dpi/piernik150.jpg").default,
    year: 2020,
    available: false,
    price: null
  }
];

const tshirtsOrder = {
  threecolumns: [
    [13, 4, 5, 2, 3],
    [16, 7, 9, 15, 12, 10],
    [17, 8, 1, 14, 6, 11]
  ],
  twocolumns: [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [17, 9, 10, 11, 12, 13, 14, 15, 16]
  ],
  onecolumn: [tshirts.map(tshirt => tshirt.id)]
};

export function getTshirtsOrder(numberOfColumns) {
  if (numberOfColumns === 3) {
    return tshirtsOrder.threecolumns;
  } else if (numberOfColumns === 2) {
    return tshirtsOrder.twocolumns;
  } else {
    return tshirtsOrder.onecolumn;
  }
}

export default tshirts;
