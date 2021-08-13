import Vuex from 'vuex';
import {mount, createLocalVue} from '@vue/test-utils';
import RestaurantList from '@/components/RestaurantList';

describe('RestaurantList', () => {
  const records = [
    {id: 1, name: 'Sushi Place'},
    {id: 2, name: 'Pizza Place'},
  ];

  let restaurantsModule;
  let wrapper;

  beforeEach(() => {
    restaurantsModule = {
      namespaced: true,
      state: {records},
      actions: {
        load: jest.fn().mockName('load'),
      },
    };
    const store = new Vuex.Store({
      modules: {
        restaurants: restaurantsModule,
      },
    });

    wrapper = mount(RestaurantList, {localVue, store});
  });

  const localVue = createLocalVue();
  localVue.use(Vuex);

  it('loads restaurants on mount', () => {
    expect(restaurantsModule.actions.load).toHaveBeenCalled();
  });

  it('displays the restaurants', () => {
    const firstRestaurantName = wrapper
      .findAll('[data-testid="restaurant"]')
      .at(0)
      .text();
    expect(firstRestaurantName).toBe('Sushi Place');

    const secondRestaurantName = wrapper
      .findAll('[data-testid="restaurant"]')
      .at(1)
      .text();
    expect(secondRestaurantName).toBe('Pizza Place');
  });
});
