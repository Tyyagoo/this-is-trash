
function deps_recursive(tree, acc) {
  if (tree == undefined || tree.dependencies == undefined) return acc;
  return Object.keys(tree.dependencies).reduce((prev, curr) => {
    const dep = tree.dependencies[curr];
    return deps_recursive(dep, [...prev, `${curr}@${dep.version}`]);
  }, acc);
}

function getDependencies(tree) {
  return Array.from(new Set(deps_recursive(tree, []))).sort();
}

module.exports = getDependencies


