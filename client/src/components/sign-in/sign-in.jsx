import { useEffect, useState } from 'react';
import "./sign-in.scss";
import Input from "../input/input";
import Button from "../button/button";
import { useDispatch, useSelector } from 'react-redux';

const SignInForm = () => {
    const dispatch = useDispatch();
    const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
    const { user, signInForm, signInLoading, signInSuccess, token } = useSelector((store) => store.userState);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        if (signInSuccess && token) {
            setShowSuccessMessage(true);


            // Enregistrez le token dans le state global de Redux
            dispatch(setToken(token));
            dispatch(setUser({ email: signInForm.email, pseudo: "examplePseudo" }));

            // Stockez également le token dans le stockage local
            localStorage.setItem('token', token);

            // Réinitialisez le formulaire après une connexion réussie
            dispatch(updateSignInForm({ value: '', inputName: 'email' }));
            dispatch(updateSignInForm({ value: '', inputName: 'password' }));
        }
    }, [signInSuccess, token, signInForm.email, dispatch]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (signInForm.email && signInForm.password) {
            console.log("Attempting sign in...");
            dispatch(signInThunk());
        }
    };

    const updateForm = (value, inputName) => {
        dispatch(updateSignInForm({ value, inputName }));
    };

    const handleRedirect = () => {
        console.log("Redirecting to sign up...");
        dispatch(switchRoute({ route: APP_ROUTES.SIGN_UP }));
    };

    const handleLogout = () => {
        console.log("Logging out...");

        dispatch(setToken(null));
        dispatch(signOut());

        clearStorage();

        setShowSuccessMessage(false);

        console.log("User in component after logout:", user);
    };

    const handleUpdateClick = () => {
        setUpdateModalVisible(true);
    };

    const handleUpdateAccount = async(data) => {
        try {
            await updateUserApi(data);
            dispatch(updateUser(data));
            //setUpdateModalVisible(false);
            console.log("Compte utilisateur mis à jour avec succès !");
        }
        catch (error) {
            console.error(`Erreur lors de la mise à jour du compte : ${error.message}`);
        }
    };

    const handleDeleteAccount = async() => {
        try {
            await deleteUserApi();
            dispatch(deleteUser());
            console.log("Compte utilisateur supprimé avec succès !");
        }
        catch (error) {
            console.error(`Erreur lors de la suppression du compte : ${error.message}`);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="sign-in-form">
                <div className="sign-in-form__inputs">
                    <Input
                        label="Email"
                        value={signInForm.email}
                        onChange={(value) => updateForm(value, "email")}
                    />
                    <Input
                        label="Mot de passe"
                        type="password"
                        value={signInForm.password}
                        onChange={(value) => updateForm(value, "password")}
                    />
                </div>

                <div className="sign-in-form__btns">
                    <Button
                        type="button"
                        text="Créer son compte"
                        onClick={handleRedirect}
                    />

                    <Button
                        type="submit"
                        text={signInLoading ? "Chargement..." : "Se connecter"}
                        disabled={signInLoading}
                        color="var(--green-light)"
                    />
                </div>
            </form>

            {showSuccessMessage && <p>Connexion réussie !</p>}

            {user && user.email && (
                <div>
                    <p className="sign-in-form__user-connected">Connecté en tant que {user.email}</p>
                    <Button
                        type="button"
                        text="Déconnexion"
                        onClick={handleLogout}
                    />

                    <Button
                        type="button"
                        text="Supprimer mon compte"
                        onClick={handleDeleteAccount}
                        color="var(--red)"
                    />

                    <Button
                        type="button"
                        text="Mettre à jour mon compte"
                        onClick={handleUpdateClick}
                        color="var(--blue)"
                    />

                    {isUpdateModalVisible && (
                        <div className="update-modal">
                            <h2>Mettre à jour mon compte</h2>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleUpdateAccount({
                                    newEmail: e.target.newEmail.value,
                                    newPassword: e.target.newPassword.value,
                                    newPseudo: e.target.newPseudo.value,
                                });
                            }}>
                                <label htmlFor="newEmail">Nouvel email :</label>
                                <input type="email" id="newEmail" name="newEmail" required />

                                <label htmlFor="newPassword">Nouveau mot de passe :</label>
                                <input type="password" id="newPassword" name="newPassword" required />

                                <label htmlFor="newPseudo">Nouveau pseudo :</label>
                                <input type="text" id="newPseudo" name="newPseudo" required />

                                <div className="modal-buttons">
                                    <button type="submit">Mettre à jour</button>
                                    <button type="button" onClick={() => setUpdateModalVisible(false)}>
                                        Annuler
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SignInForm;
