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
      image72: require("./aksonometria.jpg").default,
      image300: require("./aksonometria.jpg").default,
    }
  ];
  
  const order = {
    threecolumns: [[1], [], []],
    twocolumns: [[1], []],
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
  