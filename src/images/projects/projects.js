export function getProjectById(id) {
    const project = projects.find(
      project => project.id.toString() === id
    );
    if (!project) {
      return { valid: false };
    } else {
      return { valid: true, ...project };
    }
  }
  
  export function getAdjacentProjectsId(id) {
    let index = projects.findIndex(p => p.id.toString() === id);
    if (index === -1) return;
    const previous = projects[index === 0 ? index : index - 1].id;
    const next =
      projects[index === projects.length - 1 ? index : index + 1].id;
    return { previous: previous, next: next };
  }
  
  export const projects = [
    {
      id: 1,
      image72: require("./krajobraz.jpg").default,
      image300: require("./krajobraz.jpg").default,
    },
    {
      id: 2,
      image72: require("./lawka.jpg").default,
      image300: require("./lawka.jpg").default,
    },
    {
      id: 3,
      image72: require("./krzeslo.jpg").default,
      image300: require("./krzeslo.jpg").default,
    },
    {
      id: 4,
      image72: require("./rekreacja.jpg").default,
      image300: require("./rekreacja.jpg").default,
    },
    {
      id: 5,
      image72: require("./biurowiec.jpg").default,
      image300: require("./biurowiec.jpg").default,
    },
    {
      id: 6,
      image72: require("./dywan.jpg").default,
      image300: require("./dywan.jpg").default,
    }
  ];
  
  const order = {
    threecolumns: [[5, 1], [3, 4], [2, 6]],
    twocolumns: [[5, 4, 2], [1, 4, 6]],
    onecolumn: [projects.map(project => project.id)]
  };
  
  export function getProjectsOrder(numberOfColumns) {
    if (numberOfColumns === 3) {
      return order.threecolumns;
    } else if (numberOfColumns === 2) {
      return order.twocolumns;
    } else {
      return order.onecolumn;
    }
  }
  
  export default projects;
  