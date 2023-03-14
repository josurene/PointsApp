// @ts-ignore
import {setInjectionMap} from 'react-native-injection-hook';
import DBMockImplementation from '@Infrastructure/Services/DB/MockImplementation/DBMockImplementation';

const init = () => {
  setInjectionMap({
    DBService: {
      className: DBMockImplementation,
    },
  });
};

export default {
  init,
};
