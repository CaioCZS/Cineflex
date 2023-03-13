import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import HomePage from "../pages/HomePage/HomePage";
import SeatsPage from "../pages/SeatsPage/SeatsPage";
import SessionsPage from "../pages/SessionsPage/SessionsPage";
import SuccessPage from "../pages/SuccessPage/SuccessPage";

export default function App() {
  const [movieName, setMovieName] = useState("");
  const [movieDate, setMovieDate] = useState("");
  const [movieTime, setMovieTime] = useState("");
  const [reservedSeats, setReservedSeats] = useState([]);
  const [userName, setUserName] = useState("");
  const [userCPF, setUserCPF] = useState("");
  return (
    <>
      <NavContainer>CINEFLEX</NavContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setMovieName={setMovieName} />} />
          <Route
            path="/sessoes/:idFilme"
            element={
              <SessionsPage
                setMovieDate={setMovieDate}
                setMovieTime={setMovieTime}
              />
            }
          />
          <Route
            path="/assentos/:idSessao"
            element={
              <SeatsPage
                reservedSeats={reservedSeats}
                setReservedSeats={setReservedSeats}
                userName={userName}
                setUserName={setUserName}
                userCPF={userCPF}
                setUserCPF={setUserCPF}
              />
            }
          />
          <Route
            path="/sucesso"
            element={
              <SuccessPage
                movieName={movieName}
                movieDate={movieDate}
                movieTime={movieTime}
                reservedSeats={reservedSeats}
                userName={userName}
                userCPF={userCPF}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: #e8833a;
  }
`;
