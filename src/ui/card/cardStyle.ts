import styled from "../../theme/styled-components";

export const CardListView = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: 1rem; width: 70%;  
`

export const CardBody = styled.div`
  max-width: 15rem;
  min-width: 15rem;

  border-radius: 4px;
  color: #fff;

  margin: 1.2rem;
  cursor: pointer;

  background : #7dc691;

  transition: all 0.2s ease-out;

  :hover {
    box-shadow: 0 0 4em 0px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
  :active {
    transform: scale(1.01) translateY(0.2rem);
  }
`;

export const CardIcon = styled.div`
  min-height: 9.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 3.5em;
  }
`;

export const CardText = styled.div`
  min-height: 9.5rem;
  padding: 0.8em;
  font-family: "Lato";
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0 0 4px 4px;
  .title {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 1.2em;
  }
  .details {
    font-size: 0.8em;
    line-height: 1.7em;
  }
`;
