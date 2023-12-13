export const useCounter = () => {
  // カウントアップの関数
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
}