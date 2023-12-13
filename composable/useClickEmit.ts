import { defineEmits } from 'vue'
export const useClickEmit = () => {
  // 親にイベントを伝える関数
  const emit = defineEmits(['click'])
  const onClick = () => emit('click')
  return { onClick }
}