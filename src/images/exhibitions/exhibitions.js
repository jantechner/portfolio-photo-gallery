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
    image72: require("./300dpi/drugawystawa300.jpg").default,
    image300: require("./300dpi/drugawystawa300.jpg").default,
  },
  {
    id: 2,
    image72: require("./300dpi/wystawa2_300.jpg").default,
    image300: require("./300dpi/wystawa2_300.jpg").default,
  },
  {
    id: 3,
    image72: require("./300dpi/wystawa3_300.jpeg").default,
    image300: require("./300dpi/wystawa3_300.jpeg").default,
  },
];

const order = {
  threecolumns: [[2], [1], [3]],
  twocolumns: [[1], [2, 3]],
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
