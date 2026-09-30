import { PLUGIN_ID } from '../../pluginId';
import { useNavigate } from 'react-router-dom';
import { ClockCounterClockwise } from '@strapi/icons';
import { HeaderActionType } from '../../types/actions.types';

export const HeaderAction: HeaderActionType = (props) => {
  const { document, documentId, model, collectionType } = props;

  const navigate = useNavigate();
  const notAllowedToDisplay = !document || !documentId || !model.startsWith('api::');

  const navigateToPluginPage = async () => {
    if (!documentId) return;
    navigate(`/plugins/${PLUGIN_ID}/${model}/${documentId}`);
  };

  if (notAllowedToDisplay) return null;

  return {
    position: 'header',
    label: 'Content History',
    icon: <ClockCounterClockwise />,
    onClick: navigateToPluginPage,
  };
};
