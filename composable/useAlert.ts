
export const useAlert = () => {
  const $alert = (v: string) => alert(v)
  return { $alert }
}