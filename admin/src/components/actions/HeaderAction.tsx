import { PLUGIN_ID } from '../../pluginId';
import { useNavigate } from 'react-router-dom';
import { ClockCounterClockwise } from '@strapi/icons';
import { HeaderActionType } from '../../types/actions.types';

export const HeaderAction: HeaderActionType = (props) => {
  const { document, documentId, model, collectionType } = props;

  const navigate = useNavigate();
  const notAllowedToDisplay = !document || !model.startsWith('api::');

  const navigateToPluginPage = () => {
    if (!document) return;

    const docId = collectionType === 'single-types' ? document.documentId : documentId;
    navigate(`/plugins/${PLUGIN_ID}/${collectionType}/${model}/${docId}`);
  };

  if (notAllowedToDisplay) return null;

  return {
    position: 'header',
    label: 'Content History',
    icon: <ClockCounterClockwise />,
    onClick: navigateToPluginPage,
  };
};
