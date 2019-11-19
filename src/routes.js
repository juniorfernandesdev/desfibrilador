import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import About from './pages/About';
import Desfibrilation from './pages/Desfibrilation';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    About,
    Desfibrilation,
  })
);

export default Routes;
