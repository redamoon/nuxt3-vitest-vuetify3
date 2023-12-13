import { useAlert } from './useAlert'

describe('useAlert', () => {
  test('表示', () => {
    const { $alert } = useAlert()
    expect($alert).toBeTruthy()
  })
})