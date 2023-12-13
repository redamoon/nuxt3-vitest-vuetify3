import Button from "~/components/Button.vue";
import { mount } from '@vue/test-utils'

describe('Button.vue', () => {
  test('表示', () => {
    const wrapper = mount(Button)
    expect(wrapper.exists()).toBeTruthy()
  })
})