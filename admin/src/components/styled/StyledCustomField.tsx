import { styled, createGlobalStyle } from 'styled-components';

const ReadOnlyCustomField = styled.div`
  width: 100%;

  .ck-toolbar {
    pointer-events: none;
    opacity: 0.6;
  }
`;

const ReadOnlyCustomFieldModal = createGlobalStyle`
  #ck-editor-modal .ck-toolbar {
    pointer-events: none;
    opacity: 0.6;
  }
`;

export const StyledCustomField = {
  ReadOnly: ReadOnlyCustomField,
  ReadOnlyModal: ReadOnlyCustomFieldModal,
};
