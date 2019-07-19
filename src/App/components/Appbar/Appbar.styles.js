// External Modules
import styled from 'styled-components';

// Global Styles
import {colors, zIndices, material, Input as MaterialInput, Button as MaterialButton} from 'global/styles';

export const AppbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  height: 4.8rem;
  box-shadow: ${material.shadow};
  display: flex;
  align-items: center;
  z-index: ${zIndices.level3};
`;

export const Title = styled.h1`
  color: ${colors.gray};
  font-weight: 500;
  padding: 0 24px;
`;

export const Services = styled.div`
  color: ${colors.gray_dark};
  font-size: 14px;
  font-size: 1.4rem;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 24px;
  width: 200px;
  cursor: pointer;

  :hover {
    .Arrow {
      transform: rotateX(180deg);
      transition: transform 0.5s ease;
    }

    ul {
      display: block;
    }
  }

  .Arrow {
    padding-left: 8px;
  }

  ul {
    display: none;
  }
`;

export const ServicesList = styled.ul`
  position: absolute;
  width: 175px;
  top: calc(100%);
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  list-style: none;
  padding: 12px 0;
  border-radius: 4px;
  box-shadow: ${material.shadow};
`;

export const Service = styled.li`
  color: ${colors.gray};
  background-color: white;
  height: 48px;
  width: 100%;
  font-size: 14px;
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding-left: 8px;

  :hover {
    background-color: ${colors.gray_light};
    color: ${colors.black};
  }
`;

export const ProjectName = styled.div` 
  color: ${colors.gray_dark};
  font-size: 14px;
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 0 24px;
  margin-left: auto;
`;

export const AddButton = styled.button`
  padding: 8px;
  margin: 0 16px;
  font-size: 14px;
  font-size: 1.4rem;
  color: ${colors.gray};
  border: 1px solid ${colors.gray_border};
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: ${colors.gray_light};
    color: ${colors.gray_dark};
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0; left: 0;
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.4;
  z-index: ${zIndices.level2};
  display: ${({visible}) => visible ? "block" : "none"};
`;

export const Modal = styled.div`
  position: absolute;
  top: calc(50% + 48px); left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 4px;
  padding: 12px;
  display: ${({visible}) => visible ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  z-index: ${zIndices.level3};
  width: 50%;
  min-width: 500px;
  box-shadow: ${material.shadow};

  h2 {
    font-size: 18px;
    font-size: 1.8rem;
    font-weight: 400;
    color: ${colors.gray};
    font-weight: 500;
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${colors.gray};
    font-weight: 400;
    padding-bottom: 4px;
    align-self: flex-start;
  }
`;

export const Input = styled(MaterialInput)`
  width: 100%;
  margin-bottom: 16px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled(MaterialButton)`
  margin: 8px;
`;