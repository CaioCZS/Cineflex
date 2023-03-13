import styled from "styled-components";
import {
  selecionado,
  bordaSelecionado,
  disponivel,
  bordaDisponivel,
  indisponivel,
  bordaIndisponivel,
} from "../../style/colors";
export default function Seats({
  seats,
  selected,
  setSelected,
  reservedSeats,
  setReservedSeats,
}) {
  function reserveSeat(idSeat, available, nameSeat) {
    if (selected.includes(idSeat)) {
      const idRemoved = selected.filter((s) => s !== idSeat);
      setSelected(idRemoved);
      const nameRemoved = reservedSeats.filter(n => n !== nameSeat)
      setReservedSeats(nameRemoved)
    } else if (available) {
      setSelected([...selected, idSeat]);
      setReservedSeats([...reservedSeats, nameSeat]);
    } else {
      alert("Esse assento não está disponível");
    }
  }
  return (
    <SeatsContainer>
      {seats.map((s) => (
        <SeatItem
          data-test="seat"
          onClick={() => reserveSeat(s.id, s.isAvailable, s.name)}
          select={selected.includes(s.id)}
          available={s.isAvailable}
          key={s.id}
        >
          {s.name}
        </SeatItem>
      ))}
    </SeatsContainer>
  );
}

const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const SeatItem = styled.div`
  border: 1px solid
    ${({ available, select }) =>
      select
        ? bordaSelecionado
        : available
        ? bordaDisponivel
        : bordaIndisponivel};
  background-color: ${({ available, select }) =>
    select ? selecionado : available ? disponivel : indisponivel};
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
