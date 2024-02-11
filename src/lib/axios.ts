import axios from "axios";

export const api =  axios.create({
  baseURL: 'https://gold-anemone-wig.cyclic.app/receitas'
})