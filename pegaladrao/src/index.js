import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './components/menu/Menu';


ReactDOM.render(
  <div>
    <Menu />
    <div class="conteiner">
      <div class="content">
        <h1> Bem-Vindo(a)!</h1>
        <p>
          <em> Pega Ladrão </em> é um site de denúncia de ocorrências policiais.
        Nós queremos informar para você o quão seguro ou não pode ser um determinado local .
        Aqui você pode ir registrando todas as ocorrências que acontecerem com você, além de
        ter acesso a ocorrência de outras pessoas.
      </p>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);
