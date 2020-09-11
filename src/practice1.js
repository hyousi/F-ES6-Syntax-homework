const flatten = (columns) => (columns.map(column => column.name))

const compose = (keys, vals) => keys.reduce((obj, key, idx) => ({...obj, [key]: vals[idx]}), {})

const parseData = (response) => {
  const keys = flatten(response.column);
  return response.data.map(vals => compose(keys, vals));
}

export { parseData };
