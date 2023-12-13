import { describe, expect, vi } from 'vitest'
import { useClickEmit } from "~/composable/useClickEmit";

describe('useClickEmit', () => {
  it('should emit "click" event when onClick is called', () => {
    // Emit関数をモック
    const mockEmit = vi.fn()

    // useClickEmitをテスト
    const { onClick } = useClickEmit(mockEmit)
    onClick()

    // Emitが正しく呼ばれたかチェック
    expect(mockEmit).toHaveBeenCalledWith('click')
  })
})