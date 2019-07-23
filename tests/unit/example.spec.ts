import { shallowMount } from '@vue/test-utils';
import BaseComponent from '@/components/BaseComponent.vue';
import Snackbar from '@/components/Snackbar.vue';

describe('BaseComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(BaseComponent, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe('Snackbar.vue', () => {
  it('renders props.msg when passed', () => {
    const text = 'new message';
    const wrapper = shallowMount(Snackbar, {
      propsData: { text },
    });
    expect(wrapper.text()).toMatch(text);
  });
});
