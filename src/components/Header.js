import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Header({
  resetAll,
  setMovieDate,
  movieName,
  lastPage,
  movieDate,
  setMovieName,
  movieID,
}) {
  const navigate = useNavigate();

  function backPage() {
    if (movieDate) {
      resetAll();
      setMovieDate("");
      navigate(`/sessoes/${movieID}`);
      return;
    }
    setMovieName("");
    navigate("/");
  }
  const buttonBack =
    movieName !== "" && !lastPage
      ? [
          <button
            data-test="go-home-header-btn"
            key={"213312"}
            onClick={backPage}
          >
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>,
        ]
      : "";
  return (
    <NavContainer>
      {buttonBack}
      <p>CINEFLEX</p>
    </NavContainer>
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
  position: relative;
  a {
    text-decoration: none;
    color: #e8833a;
  }
  img {
    width: 1em;
    height: 1em;
  }
  ion-icon {
    color: black;
    font-size: 35px;
  }
  button {
    position: absolute;
    left: 0;
    top: 15px;
    background-color: #c3cfd9;
  }
`;
