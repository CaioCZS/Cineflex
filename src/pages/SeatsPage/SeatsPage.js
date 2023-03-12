import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  selecionado,
  bordaSelecionado,
  disponivel,
  bordaDisponivel,
  indisponivel,
  bordaIndisponivel,
} from "../../style/colors";
import FooterSeats from "./FooterSeats";

export default function SeatsPage() {
 const [seats , setSeats] = useState([])
 const [movieDetails, setMovieDetails] = useState([])
 const [time , setTime] = useState("")
 const [day, setDay] = useState("")
 
 const params = useParams()
const idSessao = params.idSessao
 useEffect(()=>{
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`// trocar id showtimes/ID/seats
    const promise = axios.get(URL)
    promise.then(res =>{
        setSeats(res.data.seats)
        setMovieDetails(res.data.movie)
        setTime(res.data.name)
        setDay(res.data.day.weekday)
    }).catch(err => console.log(err.data))
 },[])
    return (
    <PageContainer>
      Selecione o(s) assento(s)
      <SeatsContainer>
        {seats.map(s => <SeatItem available={s.isAvailable} key={s.id}>{s.name}</SeatItem>)}
      </SeatsContainer>
      <CaptionContainer>
        <CaptionItem>
          <CaptionCircle backColor={selecionado} borderColor={bordaSelecionado}/>
          Selecionado
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle backColor={disponivel} borderColor={bordaDisponivel}/>
          Disponível
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle backColor={indisponivel} borderColor={bordaIndisponivel}/>
          Indisponível
        </CaptionItem>
      </CaptionContainer>
      <FormContainer>
        Nome do Comprador:
        <input placeholder="Digite seu nome..." />
        CPF do Comprador:
        <input placeholder="Digite seu CPF..." />
        <button>Reservar Assento(s)</button>
      </FormContainer>
     <FooterSeats title={movieDetails.title} weekday={day} time={time} posterURL={movieDetails.posterURL}/>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`;
const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const FormContainer = styled.div`
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
const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`;
const CaptionCircle = styled.div`
  border: 1px solid ${({borderColor}) => borderColor}; 
  background-color:${({backColor}) => backColor}; 
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;
const SeatItem = styled.div`
  border: 1px solid ${({available}) => available ? disponivel : indisponivel}; // Essa cor deve mudar
  background-color: ${({available}) => available ? disponivel : indisponivel}; // Essa cor deve mudar
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;

