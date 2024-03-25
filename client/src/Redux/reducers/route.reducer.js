import { createSlice } from "@reduxjs/toolkit";
import { APP_ROUTES } from "../../Constants/route.const";

const initialState = {
  jeux: [],
  filtreGenre: "",
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    ajouterJeu: (state, action) => {
      const { jeu } = action.payload;
      state.jeux.push(jeu);
    },
    modifierJeu: (state, action) => {
      const { jeu } = action.payload;
      const index = state.jeux.findIndex(j => j.id === jeu.id);
      state.jeux[index] = jeu;
    },
    supprimerJeu: (state, action) => {
      const { idJeu } = action.payload;
      const index = state.jeux.findIndex(j => j.id === idJeu);
      state.jeux.splice(index, 1);
    },
    changerFiltreGenre: (state, action) => {
      const { nouveauFiltre } = action.payload;
      state.filtreGenre = nouveauFiltre;

      // Mise à jour de la liste des jeux à afficher
      state.jeuxFiltres = state.jeux.filter(jeu => jeu.genre === nouveauFiltre || nouveauFiltre === "");
    },
  },
});

export const { ajouterJeu, modifierJeu, supprimerJeu, changerFiltreGenre } = routeSlice.actions;
export default routeSlice.reducer;