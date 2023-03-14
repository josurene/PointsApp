import Product from '@Domain/Entities/Product';

export default interface DBService {
  getProducts: () => Promise<Product[]>;
};
