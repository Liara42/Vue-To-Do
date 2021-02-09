import { createStore } from 'vuex';

const store = createStore({
  state: {
    list: [],
    loaded: false,
  },
  actions: {
    deleteItem(context, id) {
      fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(() => {
          context.commit('deleteItemFromState', id);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },

    checkItem(context, id) {
      context.commit('checkStateItem', id);

      fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(store.state.list.find((el) => el.id == id)),
      })
        .then(() => {})
        .catch((error) => {
          console.error('Error:', error);
        });
    },

    addItem(context, item) {
      let listItem = {};
      if (item === '') {
        alert('You must enter something');
      } else {
        let list = store.state.list;
        let id = !list.length ? 1 : list[list.length - 1].id + 1;
        listItem = { id: id, name: item, check: false };
      }
      fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(listItem),
      })
        .then(() => {
          context.commit('addItemToState', listItem);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },

    getItems(context) {
      fetch('http://localhost:3000/todos')
        .then((response) => response.json())
        .then((result) => {
          context.commit('getState', result);
        })
        .catch((error) => {
          console.error(error);
        });
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
