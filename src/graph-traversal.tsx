import styled from 'styled-components';
import { DiagramContextProvider } from './components/diagram-context';
import { Diagram } from './components/diagram';
import { Actions } from './components/actions';
import { Traversal } from './components/traversal';
import { TraversalType } from './types';

type Props = {
  type: TraversalType;
  className?: string;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const GraphTraversal = ({ type, className = '' }: Props) => {
  return (
    <DiagramContextProvider>
      <StyledContainer className={className}>
        <Actions />
        <Diagram />
        <Traversal type={type} />
      </StyledContainer>
    </DiagramContextProvider>
  );
};
