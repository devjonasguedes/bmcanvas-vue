import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    canvas: [
      { 
        id: "key-partners", 
        title: 'Key Partners', 
        helper: [
          'Who are your Key Partners?',
          'Who are your Key supplies?',
          'Which Key Resources are we acquairing from Partners?',
          'Wich Key Activities do partners perform?',
        ],
        cards: []
      },
      { 
        id: "key-activities", 
        title: 'Key Activities', 
        helper: [
          'What Key Activities do yor Value Proposition require?',
          'Our Distribution Channels?',
          'Customer Relationships?',
          'Revenue streams?'
        ],
        cards: [] 
      },
      { 
        id: "key-resources", 
        title: 'Key Resources', 
        helper: [
          'What Key Resources do your Value Propositions require?',
          'Our Distribution Channels? Customer Relationships?',
          'Revenue Streams?'
        ],
        cards: [] 
      },
      { 
        id: "value-proposition", 
        title: 'Value Proposition', 
        helper: [
          "What value do we deliver to the customer?",
          "Which one of you customer's problems are we helping to solve?",
          "What bundles of products and services are we offering to each Customer Segment?",
          "Which customer needs are we satisfying?"
        ],
        cards: [] 
      },
      { 
        id: "customer-relationships", 
        title: 'Customer Relationships', 
        helper: [
          "What type of relationship does each of our Customer Segments expect us to establish and maintain with them?",
          "Which ones have we established?",
          "How are they integrated with the rest of our business model?",
          "How costly are they?"
        ],
        cards: [] 
      },
      { 
        id: "channels", 
        title: 'Channels', 
        helper: [
          "Through which Channels do our Customer Segments want to be reached?",
          "How are we reaching them now?",
          "How are our Channels integrated?",
          "Which ones work best?",
          "Which ones are most cost-efficient?",
          "How are we integrating them with customer routines?"
        ],
        cards: [] 
      },
      { 
        id: "customer-segments", 
        title: 'Customer Segments',
        helper: [
          "For whom are we creating value?",
          "Who are our most important customers?"
        ] ,
        cards: [] 
      },
      { 
        id: "cost-structure", 
        title: 'Cost Structure', 
        helper: [
          "What are the most important costs inherent in our business modal?",
          "Which Key Resources are most expensive?",
          "Which Key Activities are most expensive?"
        ],
        cards: [] 
      },
      { 
        id: "revenue-streams", 
        title: 'Revenue Streams', 
        helper: [
          "For what value are our customers really willing to pay?",
          "For what do they currently pay?",
          "How would they prefer to pay?",
          "How much does each Revenue Stream contribute to overall revenues?"
        ],
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
        state.canvas[index].cards.push(...element.cards);
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
