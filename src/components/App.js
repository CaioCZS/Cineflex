import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import SeatsPage from "../pages/SeatsPage/SeatsPage";
import SessionsPage from "../pages/SessionsPage/SessionsPage";
import SuccessPage from "../pages/SuccessPage/SuccessPage";
import Header from "./Header";

export default function App() {
  const [movieName, setMovieName] = useState("");
  const [movieDate, setMovieDate] = useState("");
  const [movieTime, setMovieTime] = useState("");
  const [reservedSeats, setReservedSeats] = useState([]);
  const [userName, setUserName] = useState("");
  const [userCPF, setUserCPF] = useState("");
  const [lastPage, setLastPage] = useState(false);
  const [movieID, setMovieID] = useState("");
  function resetAll(){
    setUserName("")
    setUserCPF("")
    setReservedSeats([])
  }
  return (
    <>
      <BrowserRouter>
        <Header
          setMovieDate={setMovieDate}
          movieID={movieID}
          movieName={movieName}
          setMovieName={setMovieName}
          lastPage={lastPage}
          movieDate={movieDate}
          resetAll={resetAll}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage setMovieID={setMovieID} setMovieName={setMovieName} />
            }
          />
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
                setLastPage={setLastPage}
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
                setMovieName={setMovieName}
                setReservedSeats={setReservedSeats}
                resetAll={resetAll}
                setLastPage={setLastPage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
