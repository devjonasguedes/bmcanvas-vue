import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    canvas: [
      { 
        id: "key-partners", 
        title: 'Key Partners', 
        helper: ['lorem ipsum dolor', 'lorem ipsum dolor', 'lorem ipsum dolor'], 
        cards: []
      },
      { 
        id: "key-activities", 
        title: 'Key Activities', 
        helper: ['lorem ipsum dolor', 'lorem ipsum dolor', 'lorem ipsum dolor'], 
        cards: [] 
      },
      { 
        id: "key-resources", 
        title: 'Key Resources', 
        helper: ['lorem ipsum dolor', 'lorem ipsum dolor', 'lorem ipsum dolor'], 
        cards: [] 
      },
      { 
        id: "value-proposition", 
        title: 'Value Proposition', 
        helper: ['lorem ipsum dolor', 'lorem ipsum dolor', 'lorem ipsum dolor'], 
        cards: [] 
      },
      { 
        id: "customer-relationships", 
        title: 'Customer Relationships', 
        helper: ['lorem ipsum dolor', 'lorem ipsum dolor', 'lorem ipsum dolor'], 
        cards: [] 
      },
      { 
        id: "channels", 
        title: 'Channels', 
        helper: ['lorem ipsum dolor', 'lorem ipsum dolor', 'lorem ipsum dolor'], 
        cards: [] 
      },
      { 
        id: "customer-segments", 
        title: 'Customer Segments', 
        helper: ['lorem ipsum dolor', 'lorem ipsum dolor', 'lorem ipsum dolor'], 
        cards: [] 
      },
      { 
        id: "cost-structure", 
        title: 'Cost Structure', 
        helper: ['lorem ipsum dolor', 'lorem ipsum dolor', 'lorem ipsum dolor'], 
        cards: [] 
      },
      { 
        id: "revenue-streams", 
        title: 'Revenue Streams', 
        helper: ['lorem ipsum dolor', 'lorem ipsum dolor', 'lorem ipsum dolor'], 
        cards: [] 
      },
    ]
  },
  mutations: {
    ADD_CARD(state, payload) {
      state.canvas[payload.column].cards.push(payload.card);
    },
    REMOVE_CARD(state, payload) {
      state.canvas[payload.column].cards.splice(payload.index, 1);
    }
  },
  actions: {
    loadLocalCanvas({ state }, payload) {

      payload.forEach((element, index) => {
        state.canvas[index].cards = [...element.cards];
      });

    },
    addCard({ state, commit }, payload) {

      commit('ADD_CARD', payload);

      setTimeout(() => {
        localStorage.setItem('canvas', JSON.stringify(state.canvas));
      }, 500);

    },
    removeCard({ state, commit }, payload) {

      commit('REMOVE_CARD', payload);

      setTimeout(() => {
        localStorage.setItem('canvas', JSON.stringify(state.canvas));
      }, 500);

    },
  },
  modules: {
  }
})
