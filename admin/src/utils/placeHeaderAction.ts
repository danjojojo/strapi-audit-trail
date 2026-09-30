import type { PlaceHeaderAction } from '../types/actions.types';

export const placeHeaderAction: PlaceHeaderAction = (data) => {
  const { actions, placeBefore, component } = data;

  if (!placeBefore) {
    return [...actions, ...component];
  }

  const targetAction = actions.findIndex((action) => action.type === placeBefore);
  const actionsBeforeComponent = [...actions.slice(0, targetAction)];
  const actionsAfterComponent = [...actions.slice(targetAction)];

  return [...actionsBeforeComponent, ...component, ...actionsAfterComponent];
};
