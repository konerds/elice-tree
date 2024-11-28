import styled from 'styled-components';
import { PALETTE } from 'styles';

export const Button = styled.button<{ content: string }>`
  background-color: ${(props) => (props.content === '완료' ? PALETTE.SUB_BLUE : PALETTE.LIGHT_RED)};
  color: ${PALETTE.MAIN_BLACK};
  border: none;
  border-radius: 5px;
  margin: 0px 5px;
  cursor: pointer;
`;