import ItemTableView from '../components/Catalog/ItemTableView';
import App from '../App';

const Routes = [
    {"index":0, "label": "Home", "path": "/", "component": App },
    {"index":1, "label": "Catalog >> Table View", "path": "/catalog/table-view", "component": ItemTableView }
]

export default Routes;