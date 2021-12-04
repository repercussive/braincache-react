export default async function sleep(time: number) {
  await new Promise((resolve) => setTimeout(resolve, time))
}