import type {
  Address,
  Identifier,
  LocationManagingOrganization,
  LocationPhysicalType,
  Position,
  Telcom,
} from './base';

export interface RequestPostLocation {
  resourceType: 'Location';
  identifier: Identifier[];
  status: string;
  name: string;
  description: string;
  mode: string;
  telcom: Telcom[];
  address: Address;
  physicalType: LocationPhysicalType;
  position: Position;
  managingOrganization: LocationManagingOrganization;
}
