export interface Coding {
  system: string;
  code: string;
  display: string;
}

export interface Category {
  coding: Coding[];
}

export interface Subject {
  reference: string;
}

export interface Performer {
  reference: string;
}

export interface Encounter {
  reference: string;
  display: string;
}

export interface ValueQuantity {
  value: number;
  unit: string;
  system: string;
  code: string;
}

export interface Meta {
  lastUpdate: string;
  versionId: string;
}
