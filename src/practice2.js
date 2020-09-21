// TODO 思路不错，保持原数组下进行拆分插入
const inject = (items, sections) => {
  let prev = 0
  let ans = []

  // TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
  sections.forEach(section => {
    ans = [...ans, ...items.slice(prev, section.index), section.content]
    prev = section.index
  })
  ans = [...ans, ...items.slice(prev)]

  return ans
}
export {inject}
