import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function SuccessPage({
  movieName,
  movieDate,
  movieTime,
  reservedSeats,
  userName,
  userCPF,
  setMovieName,
  resetAll,
  setLastPage
}) {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <h1>
        Pedido feito <br /> com sucesso!
      </h1>

      <TextContainer data-test="movie-info">
        <strong>
          <p>Filme e sessão</p>
        </strong>
        <p>{movieName}</p>
        <p>{`${movieDate} - ${movieTime}`}</p>
      </TextContainer>

      <TextContainer data-test="seats-info">
        <strong>
          <p>Ingressos</p>
        </strong>
        {reservedSeats.map((s,i) =><p key={i}>Assento {s}</p>)}
      </TextContainer>

      <TextContainer data-test="client-info">
        <strong>
          <p>Comprador</p>
        </strong>
        <p>Nome: {userName}</p>
        <p>CPF: {userCPF}</p>
      </TextContainer>

      <button data-test="go-home-btn" onClick={() =>{ 
        navigate("/")
        setMovieName("")
        resetAll()
        setLastPage(false)
        }}>
        Voltar para Home
      </button>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  color: #293845;
  margin: 30px 20px;
  padding-bottom: 120px;
  padding-top: 70px;
  a {
    text-decoration: none;
  }
  button {
    margin-top: 50px;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #247a6b;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  strong {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
