import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Movie from "./Movie";

export default function HomePage({setMovieName,setMovieID}) {
    const [moviesList , setMoviesList]= useState([])
    useEffect(()=>{
const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
const promise = axios.get(URL)
promise.then(res => setMoviesList(res.data)).catch(err => console.log(err.response.data))
  },[])
  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {moviesList.map(m => <Movie setMovieID={setMovieID} setMovieName={setMovieName} key={m.id} movieData={m}/>)}
      </ListContainer>
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
  padding-top: 70px;
`;
const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;

