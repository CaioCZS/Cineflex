import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Movie({movieData}) {
     const {title , posterURL} = movieData
    
    return (
    <MovieContainer>
      <img
        src={posterURL}
        alt={`poster-${title}`}
      />
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  width: 145px;
  height: 210px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  img {
    width: 130px;
    height: 190px;
  }
`;
