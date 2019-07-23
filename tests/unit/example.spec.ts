import { shallowMount } from '@vue/test-utils';
import BaseComponent from '@/components/BaseComponent.vue';

describe('BaseComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(BaseComponent, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
