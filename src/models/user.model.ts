import { CatalogueModel } from './catalogue.model';
import { ProductModel } from './product.model';

export interface UserModel {
  id?: number;
  identificationType?: CatalogueModel;
  sex?: CatalogueModel;
  gender?: CatalogueModel;
  ethnicOrigin?: CatalogueModel;
  bloodType?: CatalogueModel;
  civilStatus?: CatalogueModel;
  phones?: CatalogueModel[];
  avatar?: string;
  username?: string;
  lastname?: string;
  name?: string;
  email?: string;
  birthdate?: string;
  isLoggedIn?: boolean;
  token?: string;
  clientPaymentMethod?: string;
  clientId?: number;
  products?: ProductModel[];
  total?: number
}
