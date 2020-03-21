export function getExhibitionById(id) {
  const exhibition = exhibitions.find(
    exhibition => exhibition.id.toString() === id
  );
  if (!exhibition) {
    return { valid: false };
  } else {
    return { valid: true, ...exhibition };
  }
}

export function getAdjacentExhibitionsId(id) {
  let index = exhibitions.findIndex(p => p.id.toString() === id);
  if (index === -1) return;
  const previous = exhibitions[index === 0 ? index : index - 1].id;
  const next =
    exhibitions[index === exhibitions.length - 1 ? index : index + 1].id;
  return { previous: previous, next: next };
}

export const exhibitions = [
  {
    id: 1,
    image72: require("./72dpi/wystawa1.jpg").default,
    image300: require("./150dpi/wystawa1m.jpg").default,
  },
  {
    id: 2,
    image72: require("./72dpi/wystawa2.jpg").default,
    image300: require("./150dpi/wystawa2m.jpg").default,
  },
  {
    id: 3,
    image72: require("./72dpi/wystawa3.jpg").default,
    image300: require("./150dpi/wystawa3m.jpg").default,
  },
  {
    id: 4,
    image72: require("./72dpi/wystawa4.jpg").default,
    image300: require("./150dpi/wystawa4m.jpg").default,
  },
  {
    id: 5,
    image72: require("./72dpi/wystawa5.jpg").default,
    image300: require("./150dpi/wystawa5m.jpg").default,
  },
  {
    id: 6,
    image72: require("./72dpi/wystawa6.jpg").default,
    image300: require("./150dpi/wystawa6m.jpg").default,
  },
  {
    id: 7,
    image72: require("./72dpi/wystawa7.jpg").default,
    image300: require("./150dpi/wystawa7m.jpg").default,
  },
  {
    id: 8,
    image72: require("./72dpi/wystawa8.jpg").default,
    image300: require("./150dpi/wystawa8m.jpg").default,
  },
  {
    id: 9,
    image72: require("./72dpi/wystawa9.jpg").default,
    image300: require("./150dpi/wystawa9m.jpg").default,
  },
  {
    id: 10,
    image72: require("./72dpi/wystawa10.jpg").default,
    image300: require("./150dpi/wystawa10m.jpg").default,
  },
];

const order = {
  threecolumns: [[1,4,7,10], [2,5,8], [3,6,9]],
  twocolumns: [[1,3,5,7,9,10], [2,4,6,8]],
  onecolumn: [exhibitions.map(exhibition => exhibition.id)]
};

export function getExhibitionsOrder(numberOfColumns) {
  if (numberOfColumns === 3) {
    return order.threecolumns;
  } else if (numberOfColumns === 2) {
    return order.twocolumns;
  } else {
    return order.onecolumn;
  }
}

export default exhibitions;
