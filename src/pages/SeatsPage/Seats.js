import styled from "styled-components";
import {
  selecionado,
  bordaSelecionado,
  disponivel,
  bordaDisponivel,
  indisponivel,
  bordaIndisponivel,
} from "../../style/colors";
export default function Seats({seats,selected,setSelected}){
  function reserveSeat(idSeat , available){
   if(selected.includes(idSeat)){
    const idRemoved = selected.filter(s => s!==idSeat)
    setSelected(idRemoved)
  }else if(available){
    setSelected([...selected,idSeat])
  }else{
    alert("Esse assento não está disponível")
  }
  }  
  return(
        <SeatsContainer>
        {seats.map(s => <SeatItem data-test="seat" onClick={()=> reserveSeat(s.id , s.isAvailable)} select={selected.includes(s.id)} available={s.isAvailable} key={s.id}>{s.name}</SeatItem>)}
      </SeatsContainer>

    )
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
  border: 1px solid ${({available,select}) => select ? bordaSelecionado : available ? bordaDisponivel : bordaIndisponivel}; 
  background-color: ${({available,select}) =>select ? selecionado : available ? disponivel : indisponivel}; 
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