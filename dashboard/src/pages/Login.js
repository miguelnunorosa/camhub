import React, { useState } from 'react';
import '../styles/login.css'; // Importe o arquivo CSS para estilização

// Importe o logo do clube
import Logo from '../assets/logo.png';  // Ajuste o caminho do logo conforme necessário

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [rememberMe, setRememberMe] = useState(false);  // Para "Memorizar login"
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulando validação de login
    if (email === '' || senha === '') {
      setError('Por favor, preencha todos os campos.');
    } else {
      setError('');
      console.log('Login bem-sucedido', email, senha, rememberMe);
      // Aqui você pode integrar com a API de login
    }
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);  // Alterna o estado do checkbox "Memorizar login"
  };

  return (
    <div className="login-container">
      <div className="login-form">
        {/* Logo do clube */}
        <div className="login-logo">
          <img src={Logo} alt="Logo do Clube" />
        </div>

        {/* Formulário de login */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          {/* Mensagem de erro */}
          {error && <div className="error-message">{error}</div>}

          {/* Checkbox "Memorizar login" */}
          <div className="links-container">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
              Memorizar login
            </label>
            <a href="#">Recuperar senha</a>
          </div>

          {/* Botão de login */}
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
