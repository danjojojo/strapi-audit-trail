import { Header } from '../ui/Header';
import { PLUGIN_ID } from '../../pluginId';
import { useParams } from 'react-router-dom';

export function DetailPageHeader() {
  const params = useParams();
  const collectionPath = params['*']?.split('/')[0];
  const documentName = params['*']?.split('/')[1];

  return <Header title={documentName} backUrl={`/plugins/${PLUGIN_ID}/${collectionPath}`} />;
}
