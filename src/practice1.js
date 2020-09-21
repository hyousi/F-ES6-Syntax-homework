const flatten = (columns) => (columns.map(column => column.name))

const compose = (keys, vals) => keys.reduce((obj, key, idx) => ({...obj, [key]: vals[idx]}), {})

const parseData = (response) => {
  // TODO 使用解构的方式取出data与column
  const keys = flatten(response.column);
  // TODO Reduce使用不错，实际上该方法可以写成一行
  return response.data.map(vals => compose(keys, vals));
}

export { parseData };
