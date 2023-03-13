import styled from "styled-components";
import { useState,useEffect } from "react";
import axios from "axios";
import Session from "./Session";
import FooterSession from "./FooterSession";
import { useParams } from "react-router-dom";

export default function SessionsPage({setMovieDate,setMovieTime}) {
  const [sessionsList , setSessionsList] = useState([])
  const [days, setDays]= useState([])
  const params = useParams()
  const idFilme = params.idFilme
  useEffect(()=>{
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`//trocar id /movies/ID/showtimes
    const promise = axios.get(URL)
    promise.then(res => {
        setSessionsList(res.data)
        setDays(res.data.days)
    }).catch(err => alert(err.message))
  },[])
    return (
    <PageContainer>
      Selecione o horário
      <div>
        {days.map(d =><Session setMovieDate={setMovieDate} setMovieTime={setMovieTime} key={d.id} date={d.date} weekday={d.weekday} showtimes={d.showtimes}/>)}
      </div>
      <FooterSession title={sessionsList.title} posterURL={sessionsList.posterURL}/>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
  div {
    margin-top: 20px;
  }
`;

