export default function getRandomArrayItem(array: any[]) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}