import { ActionContext, ActionComponent, ActionDescription } from './internal.types';

export type HeaderActionType = (props: ActionContext) => ActionDescription | null;
export type PlaceHeaderAction = (props: {
  /**
   * @description Pass the actions array.
   */
  actions: ActionComponent[];

  /**
   * @description Pass the action components to be placed in the header.
   */
  component: ActionComponent[];

  /**
   * @description Specify the target where the action component will be placed in the header. This will put the action component before the target.
   */
  placeBefore?: ActionComponent['type'];
}) => ActionComponent[];
