import DBService from '@Domain/Services/DBService';
// @ts-ignore
import {useInjectionHookMemo} from 'react-native-injection-hook';
import {singletonHook} from 'react-singleton-hook';

const GetDBProviderImpl = (): DBService => {
  return useInjectionHookMemo<DBService>('DBService');
};

export const useDBService = singletonHook(undefined, GetDBProviderImpl);
