import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function FormBuy({ selected }) {
  const [userName, setUserName] = useState("");
  const [userCPF, setUserCPF] = useState("");
  const navigate = useNavigate();
  function finishReserve(e) {
    e.preventDefault();
    if (selected.length > 0) {
      const URL =
        "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
      const body = { name: userName, cpf: userCPF, ids: selected };
      const promise = axios.post(URL, body);
      promise.then(navigate("/sucesso")).catch(err => alert(err.response.data))
    }else{
        alert("Selecione pelo menos um assento")
    }
  }
  return (
    <FormContainer onSubmit={finishReserve}>
      <label htmlFor="name">Nome do Comprador:</label>
      <input
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        id="name"
        placeholder="Digite seu nome..."
        required
      />
      <label htmlFor="cpf">CPF do Comprador:</label>
      <input
        onChange={(e) => setUserCPF(e.target.value)}
        value={userCPF}
        id="cpf"
        placeholder="Digite seu CPF..."
        required
      />
      <button type="submit">Reservar Assento(s)</button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  button {
    align-self: center;
  }
  input {
    width: calc(100vw - 60px);
  }
`;
