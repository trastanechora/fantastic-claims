export interface Class {
  system: string;
  code: string;
  display: string;
}

export interface Subject {
  reference: string;
  display: string;
}

interface Coding {
  system: string;
  code: string;
  display: string;
}

interface ParticipantType {
  coding: Coding[];
}

export interface Participant {
  type: ParticipantType[];
  individual: {
    reference: string;
    display: string;
  };
}

export interface Period {
  start: string;
  end?: string;
}

interface Location {
  reference: string;
  display: string;
}

export interface EncounterLocation {
  location: Location;
}

export interface StatusHistory {
  status: string;
  period: Period;
}

export interface ServiceProvider {
  reference: string;
}

export interface Identifier {
  system: string;
  value: string;
}

export interface Meta {
  lastUpdate: string;
  versionId: string;
}
