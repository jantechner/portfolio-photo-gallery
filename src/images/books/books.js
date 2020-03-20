export function getBookById(id) {
  const book = books.find(book => book.id.toString() === id);
  if (!book) {
    return { valid: false };
  } else {
    return { valid: true, ...book };
  }
}

export function getAdjacentBooksId(id) {
  let index = books.findIndex(p => p.id.toString() === id);
  if (index === -1) return;
  const previous = books[index === 0 ? index : index - 1].id;
  const next = books[index === books.length - 1 ? index : index + 1].id;
  return { previous: previous, next: next };
}

export const books = [
  {
    id: 1,
    image72: require("./bukowski.jpeg").default,
    image300: require("./bukowski.jpeg").default
  },
  {
    id: 2,
    image72: require("./furmanowicz.jpg").default,
    image300: require("./furmanowicz.jpg").default
  }
];

const order = {
  threecolumns: [[1], [2], []],
  twocolumns: [[1], [2]],
  onecolumn: [books.map(book => book.id)]
};

export function getBooksOrder(numberOfColumns) {
  if (numberOfColumns === 3) {
    return order.threecolumns;
  } else if (numberOfColumns === 2) {
    return order.twocolumns;
  } else {
    return order.onecolumn;
  }
}

export default books;
