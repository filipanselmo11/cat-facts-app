import { loadFacts } from "@/api/facts.api";
const state = {
    facts: [],
};

const mutations = {
    setFacts(state, data) {
        state.facts = data ? data : [];
    }
};

const actions = {
    async loadFacts({ commit }, payload) {
        const { animal_type, amount } = payload;
        try {
            const response = await loadFacts({ animal_type, amount });
            commit('setFacts', response.data);
        } catch (e) {
            commit('setFacts', undefined)
        }
    }
};

const getters = {
    facts: (state) => state.facts
};

export default {
    state, 
    mutations,
    actions, 
    getters
}