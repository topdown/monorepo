export function hello(name = 'world') {
  return `hello ${name}`
}

if (require.main === module) {
  console.log(hello())
}
