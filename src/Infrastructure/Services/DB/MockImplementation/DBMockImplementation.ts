import DBService from '@Domain/Services/DBService';
import Product from '@Domain/Entities/Product';
import axios from 'axios';
import DBMockImplementationConstants from '@Infrastructure/Services/DB/MockImplementation/DBMockImplementationConstants';

export default class DBMockImplementation implements DBService {
  getProducts(): Promise<Product[]> {
    return new Promise<Product[]>((resolve, reject) => {
      axios
        .get(DBMockImplementationConstants.PRODUCTS)
        .then(value => {
          resolve(value.data);
        })
        .catch(reason => {
          reject(reason);
        });
    });
  }
}
