import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import './styles.css';

export default function SignUpPhaseTwo(props) {
  const state = useSelector(state => state.Register);
  const dispatch = useDispatch();

  useEffect(() => {
    var stateLocal = localStorage.getItem('state');
    if(stateLocal === null || stateLocal.phase === 1) {
      props.history.push('/cadastrar');
    }
  }, [props.history, state.phase])


  function handleSubmit() {
    localStorage.removeItem('state');
  }

  return (
    <div className="container-signup-phasetwo">
      <div className="title-signup-phasetwo">
        <h1>Sobre o pet shop:</h1>
      </div>
      <form className="signup-phasetwo" onSubmit={handleSubmit}>
        <div className="input-div">
          <input type="number" placeholder="CNPJ" />
        </div>
        <div className="input-div">
          <input type="text" placeholder="Nome do pet shop" />
        </div>
        <div className="input-div">
          <input type="text" placeholder="Endereço" />
        </div>
        <div className="input-div">
          <input type="text" placeholder="Número" />
        </div>
        <div className="input-div">
          <input type="text" placeholder="Bairro" />
        </div>
        <div className="input-div">
          <input type="text" placeholder="CEP" />
        </div>
        <div className="city-states">
          <div className="city-input">
            <input type="text" placeholder="Cidade" />
          </div>
          <div className="states">
            <select>
              <option onChange={null} value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AM">AM</option>
              <option value="AP">AP</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MG">MG</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="PR">PR</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="RS">RS</option>
              <option value="SC">SC</option>
              <option value="SE">SE</option>
              <option value="SP">SP</option>
              <option value="TO">TO</option>
            </select>
          </div>
        </div>
        <div className="button-area">
          <button className="button-update-product" type="submit">Continuar cadastro</button>
        </div>
      </form>
    </div>
  );
}
