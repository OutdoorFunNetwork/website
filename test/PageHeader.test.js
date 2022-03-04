import { mount } from '@vue/test-utils';
import PageHeader from '@/components/PageHeader';

describe('PageHeader', () => {
  test('Has nav element', () => {
    const wrapper = mount(PageHeader);

    expect(wrapper.get('nav'));
  });
});
