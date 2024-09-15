import styled from "styled-components";
export const ReservationTable = () => {
    return(
      <>
      <SContainer>
        <table >
          <tr>
            {Array.from({ length: 24 }, (_, index) => (
              <Sth key={index}>{index}</Sth>
            ))}
          </tr>
        </table>
      </SContainer>
      </>  
    )
}

const SContainer = styled.div`
position: absolute;
margin: 4px;
`

const Sth = styled.th`
  padding: 0px;
  transform: translateX(500px) translateY(60px) scale(0.80);
  width:50px;
  
`

