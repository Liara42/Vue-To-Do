import { createStore } from 'vuex';

const store = createStore({
  state: {
    list: [],
    loaded: false,
  },
  actions: {
    async deleteItem(context, id) {
      context.commit('deleteItemFromState', id);

      try {
        await fetch(`http://localhost:3000/todos/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.error('Error:', error);
      }
    },

    async checkItem(context, id) {
      context.commit('checkStateItem', id);
      try {
        await fetch(`http://localhost:3000/todos/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(store.state.list.find((el) => el.id == id)),
        });
      } catch (error) {
        console.error('Error:', error);
      }
    },

    async addItem(context, item) {
      let list = store.state.list;
      let id = !list.length ? 1 : list[list.length - 1].id + 1;

      let listItem = { id: id, name: item, check: false };
      context.commit('addItemToState', listItem);

      try {
        await fetch('http://localhost:3000/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(listItem),
        });
      } catch (error) {
        console.error('Error:', error);
      }
    },

    async getItems(context) {
      try {
        const response = await fetch('http://localhost:3000/todos');
        const result = await response.json();

        context.commit('getState', result);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    getState(state, result) {
      state.list = result;
      state.loaded = true;
    },
    addItemToState(state, item) {
      state.list.push(item);
    },
    deleteItemFromState(state, id) {
      state.list = state.list.filter((el) => el.id != id);
    },
    checkStateItem(state, id) {
      state.list.map((el) => {
        el.check = el.id === id ? !el.check : el.check;
      });
    },
  },
});
export default store;
