import { useCounter } from '~/composable/useCounter'

describe('useCounter', () => {
  test('カウントアップ', () => {
    const { count, increment } = useCounter()  // refのカウントアップテスト
    expect(count.value).toBe(0)  // カウント初期値が0ならばOK
    increment()
    expect(count.value).toBe(1) // 1になればOK
  })
})