import type {
  Address,
  Identifier,
  LocationManagingOrganization,
  LocationPhysicalType,
  Meta,
  Position,
  Telcom,
} from './base';

interface ResponseGeneral {
  resourceType: 'Location';
  id: string;
  name: string;
  description: string;
  status: string;
  identifier: Identifier[];
  address: Address;
  managingOrganization: LocationManagingOrganization;
  meta: Meta;
  mode: string;
  physicalType: LocationPhysicalType;
  position: Position;
  telcom: Telcom[];
}

interface ResponseConstructor<Data> {
  status: number;
  error: unknown;
  data: Data;
}

export type ResponseGetLocation = ResponseConstructor<ResponseGeneral>;
export type ResponsePostLocation = ResponseConstructor<ResponseGeneral>;
