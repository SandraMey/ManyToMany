import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "StarContainer"
    "Rate";
`;


export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  fill: #007eff;
  stroke: white;
  font-size: 2em;
`;

export const Input = styled.input`
  display: none;
`;

export const Rate = styled.p`
  font-size: 16px;
  padding-left: 1px;
`;