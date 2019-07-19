// External Modules
import styled from 'styled-components';

// Global Styles
import { zIndices } from 'global/styles';

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 48px;
  padding-top: 4.8rem;
  overflow-y: auto;
  z-index: ${zIndices.level1};
`;