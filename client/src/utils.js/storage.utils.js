// Fonction pour obtenir une valeur du local storage
export function getFromStorage(key) {
    // Récupération des données du local storage au format string
    // Si la clé fournie n'existe pas, alors stringData est null
    const stringData = localStorage.getItem(key);

    // Si stringData est null, retourne null
    if (!stringData) return null;

    // Sinon, retourne stringData de manière parsée
    return JSON.parse(stringData);
  }

  // Fonction pour stocker une valeur dans le local storage
  export function setToStorage(key, data) {
    // Enregistrement d'une donnée dans le local storage au format JSON
    // à l'aide d'une clé fournie
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Fonction pour effacer le local storage
  export function clearStorage() {
    // Effacement de tout le local storage
    localStorage.clear();
  }