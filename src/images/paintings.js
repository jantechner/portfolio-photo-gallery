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

const paintings = [
  {
    id: 1,
    image: require("./fala.jpg").default,
    title: "Fala",
    size: [60, 80],
    technique: "olej na płótnie",
    year: 2018,
    available: false
  },
  {
    id: 2,
    image: require("./niezapominajki.jpg").default,
    title: "Niezapominajki",
    size: [60, 70],
    technique: "olej na płótnie",
    year: 2017,
    available: false
  },
  {
    id: 3,
    image: require("./abraham-i-sara.jpg").default,
    title: "Abraham i Sara",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2017,
    available: false
  },
  {
    id: 4,
    image: require("./sample4.jpg").default,
    title: "Sample 4",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2017,
    available: false
  },
  {
    id: 5,
    image: require("./sample4.jpg").default,
    title: "Sample 5",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2017,
    available: false
  },
  {
    id: 6,
    image: require("./sample2.png").default,
    title: "Sample 6",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2017,
    available: false
  },
  {
    id: 7,
    image: require("./sample4.jpg").default,
    title: "Sample 7",
    size: [40, 50],
    technique: "olej na płótnie",
    year: 2017,
    available: false
  }
];

export default paintings;
