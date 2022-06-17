import api from './base.api';

const END_POINT = '/facts/random';

const loadFacts = async (animal_type, amount) => {
    let url = `${END_POINT}?animal_type=${animal_type}?amount=${amount}`
    api.get(url)
}

export {
    loadFacts
}