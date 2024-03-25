import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Informations utilisateur
  utilisateur: {
    email: "",
    pseudo: "",
  },
  // Token d'authentification
  token: null,
  // Chargement en cours
  chargementEnCours: false,
  // Erreur de connexion
  erreurConnexion: null,
  // Erreur d'inscription
  erreurInscription: null,
  // Formulaire d'inscription
  formulaireInscription: {
    email: "",
    pseudo: "",
    motDePasse: "",
    confirmationMotDePasse: "",
  },
  // Formulaire de connexion
  formulaireConnexion: {
    email: "",
    motDePasse: "",
  },
  // Message de succès
  messageSucces: false,
};

const userSlice = createSlice({
  name: "utilisateur",
  initialState,
  reducers: {
    // Définir les informations de l'utilisateur
    definirUtilisateur: (state, action) => {
      const { email, pseudo } = action.payload;
      state.chargementEnCours = false;
      state.utilisateur.email = email;
      state.utilisateur.pseudo = pseudo;
    },

    // Mettre à jour le formulaire d'inscription
    modifierFormulaireInscription: (state, action) => {
      const { valeur, nomChamp } = action.payload;
      state.erreurInscription = null;
      state.formulaireInscription[nomChamp] = valeur;
    },

    // Définir le début du chargement lors de l'inscription
    demarrerChargementInscription: (state) => {
      state.chargementEnCours = true;
    },

    // Définir la fin du chargement lors de l'inscription
    arreterChargementInscription: (state) => {
      state.chargementEnCours = false;
    },

    // Afficher le message de succès
    afficherMessageSucces: (state) => {
      state.messageSucces = true;
    },

    // Réinitialiser le message de succès
    reinitialiserMessageSucces: (state) => {
      state.messageSucces = false;
    },

    // Mettre à jour le formulaire de connexion
    modifierFormulaireConnexion: (state, action) => {
      const { valeur, nomChamp } = action.payload;
      state.formulaireConnexion[nomChamp] = valeur;
    },

    // Définir le début du chargement lors de la connexion
    demarrerChargementConnexion: (state) => {
      state.chargementEnCours = true;
    },

    // Définir la fin du chargement lors de la connexion
    arreterChargementConnexion: (state) => {
      state.chargementEnCours = false;
    },

    // Définir l'erreur de connexion
    definirErreurConnexion: (state, action) => {
      state.erreurConnexion = action.payload.erreur;
      state.chargementEnCours = false;
    },

    // Définir l'erreur d'inscription
    definirErreurInscription: (state, action) => {
      state.erreurInscription = action.payload.erreur;
      state.chargementEnCours = false;
    },

    // Définir le token
    definirToken: (state, action) => {
      state.token = action.payload;
    },

    // Déconnexion
    deconnexion: (state) => {
      state.token = null;
      state.utilisateur.email = "";
      state.utilisateur.pseudo = "";
      state.formulaireConnexion.email = "";
      state.formulaireConnexion.motDePasse = "";
    },

    // Mettre à jour l'utilisateur
    modifierUtilisateur: (state, action) => {
      const { email, motDePasse, pseudo } = action.payload;
      state.utilisateur.email = email;
      state.utilisateur.pseudo = pseudo;
      state.formulaireInscription.motDePasse = motDePasse;
    },

    // Supprimer l'utilisateur
    supprimerUtilisateur: (state) => {
      // Réinitialiser l'état après la suppression du compte
      state.token = null;
      state.utilisateur.email = "";
      state.utilisateur.pseudo = "";
      state.formulaireConnexion.email = "";
      state.formulaireConnexion.motDePasse = "";
    },
  },
});

export default userSlice.reducer;
