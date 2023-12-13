// import { defineEmits } from 'vue'

export const useClickEmit = (emit): { onClick: () => void } => {
  // 親にイベントを伝える関数
  // Composable で defineEmitsを使うと、依存関係になってしまうので単体テストしづらくなる。
  // emitを引数で受け取れるようにするとよいかも
  // const emit = defineEmits(['click'])  // ここが依存
  const onClick = () => emit('click')
  return { onClick }
}