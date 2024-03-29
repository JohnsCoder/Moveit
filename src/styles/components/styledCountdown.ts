import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${(props) => props.theme.colors.terceary};

  div {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    background: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
    margin: 0 0.5rem;

  }

  div span {
    flex: 1;
  }
  div span:first-child {
    border-right: 1px solid  ${(props) => props.theme.colors.background};
  }
  div span:last-child {
    border-left: 1px solid  ${(props) => props.theme.colors.background};
  }
  span {
    font-size: 6.25rem;
  }
`;
export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: var(--blue);
  color: var(--white);

  font-size: 1.35rem;
  font-weight: 600;

  transition: background-color 0.2s;

  :not(:disabled):hover {
    background: var(--blue-dark);
  }

  :disabled {
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
  }
`;

export const CountdownButtonActive = styled.button`
  background: var(--red);
    color: var(--white);
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  font-size: 1.35rem;
  font-weight: 600;

  transition: background-color 0.2s;

  :not(:disabled):hover {
    background: var(--red-dark);
    color: var(--white);
  }
`;
