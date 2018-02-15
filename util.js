export const rand = (max = 1000) => Math.round(Math.random() * max) + 2;

export function generateNodes(maxNodeCount = 10) {
  const nodes = [];
  const numNodes = maxNodeCount;
  const existingIds = [];

  for (let i = 0; i < numNodes; i++) {
    nodes.push({
      id: i,
      key: `${i}`,
      index: i,
      value: rand() * 1.5,
      secondaryValue: rand() * 1.5,
    });
  }

  return nodes;
}

export function generateLinks(nodes) {
  const linkCount = rand(10);
  const links = [];
  const ids = nodes.map(node => node.id);
  const idCount = ids.length;

  const randId = () =>
    Math.max(0, Math.min(
      idCount,
      Math.floor(Math.random() * idCount)
    ));

  for (let i = 0; i < linkCount; i++) {
    links.push({
      source: ids[randId()],
      target: ids[randId()],
    });
  }

  return links;
}
