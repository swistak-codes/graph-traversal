import { useContext, useState } from 'react';
import { DiagramContext } from './diagram-context';
import styled from 'styled-components';
import { getNextId } from '../logic/get-next-id';
import { getInitialGraph } from '../logic/get-initial-graph';

const ActionsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    cursor: pointer;
  }
`;

export const Actions = () => {
  const { diagram, nodes, edgeHandles } = useContext(DiagramContext);
  const [isEditing, setEditing] = useState(false);

  const handleAddNode = () => {
    if (diagram) {
      diagram.add({
        group: 'nodes',
        data: { id: getNextId(nodes), color: 'white' },
      });
    }
  };

  const handleClear = () => {
    if (diagram) {
      diagram.remove(diagram.nodes());
    }
  };

  const handleReset = () => {
    if (diagram) {
      diagram.remove(diagram.nodes());
      diagram.add(getInitialGraph());
    }
  };

  const handleEdit = () => {
    if (edgeHandles) {
      setEditing(true);
      edgeHandles.enableDrawMode();
    }
  };

  const handleStopEdit = () => {
    if (edgeHandles) {
      setEditing(false);
      edgeHandles.disableDrawMode();
    }
  };

  return (
    <ActionsContainer>
      {isEditing ? (
        <>
          <button onClick={handleAddNode}>Dodaj wierzchołek</button>
          <button onClick={handleClear}>Wyczyść</button>
          <button onClick={handleReset}>Resetuj</button>
          <button onClick={handleStopEdit}>Wyłącz edycję</button>
        </>
      ) : (
        <button onClick={handleEdit}>Edytuj</button>
      )}
    </ActionsContainer>
  );
};
