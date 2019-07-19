// External Modules
import styled from 'styled-components';

// Global Styles
import {colors, material, Button as MaterialButton, Input as MaterialInput} from 'global/styles';

export const RealtimeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.blue};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  height: calc(100% - 24px);
  width: 90%;
  max-width: 1024px;
  background-color: white;
  border-radius: 4px 4px 0px 0px;
  margin-top: 24px;
  box-shadow: ${material.shadow};
  display: flex;
  flex-direction: column;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;

  .leftmargin {
    margin-left: auto;
  }
`;

export const Input = styled(MaterialInput)`
  flex: 1;
  max-width: 500px;
`;

export const Button = styled(MaterialButton)`
  margin-left: 8px;
`;

export const Select = styled.select`
  padding: 8px;
  margin-left: 8px;
  border-radius: 4px;
  border: 1px solid ${colors.gray_border};
  color: ${colors.gray};
  font-size: 14px;
  font-size: 1.4rem;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: ${colors.gray_light};
    color: ${colors.gray_dark};
  }
`;

export const Editor = styled.div`
  flex: 1;
  width: calc(100% - 16px);
  margin: 0px 8px 8px 8px;
  border-radius: 4px;
  overflow: hidden;
`;
