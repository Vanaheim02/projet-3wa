import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    pseudo: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signUpForm.email && signUpForm.password && signUpForm.pseudo) {
      dispatch(signUpThunk());
    }
  };

  const updateForm = (value, inputName) => {
    setSignUpForm({ ...signUpForm, [inputName]: value });
  };

  const handleRedirect = () => {
    dispatch(switchRoute({ route: APP_ROUTES.SIGN_IN }));
  };

  return (
    <div className="sign-up-form">
      <h2>Créer son compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="sign-up-form__inputs">
          <Input
            label="Email"
            value={signUpForm.email}
            onChange={(value) => updateForm(value, 'email')}
          />
          <Input
            label="Mot de passe"
            type="password"
            value={signUpForm.password}
            onChange={(value) => updateForm(value, 'password')}
          />
          <Input
            label="Pseudo"
            value={signUpForm.pseudo}
            onChange={(value) => updateForm(value, 'pseudo')}
          />
        </div>
        <div className="sign-up-form__btns">
          <Button type="button" text="Se connecter" onClick={handleRedirect} />
          <Button type="submit" text="Créer mon compte" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;