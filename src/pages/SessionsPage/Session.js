import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Session({
  date,
  weekday,
  showtimes,
  setMovieTime,
  setMovieDate,
}) {
  return (
    <SessionContainer data-test="movie-day">
      {`${weekday} -${date}`}
      <ButtonsContainer>
        {showtimes.map((s) => (
          <Link
            data-test="showtime"
            to={`/assentos/${s.id}`}
            key={s.id}
          >
            <button onClick={() => {
              setMovieDate(date)
              setMovieTime(s.name)
            }}>{s.name}</button>
          </Link>
        ))}
      </ButtonsContainer>
    </SessionContainer>
  );
}
const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Roboto";
  font-size: 20px;
  color: #293845;
  padding: 0 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  button {
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
`;
