const inject = (items, sections) => {
  let prev = 0
  let ans = []

  sections.forEach(section => {
    ans = [...ans, ...items.slice(prev, section.index), section.content]
    prev = section.index
  })
  ans = [...ans, ...items.slice(prev)]

  return ans
}
export {inject}
