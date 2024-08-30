import Singleton from '@/backend/repositories/static/lib/singleton';

import data from './data';
import type { ICD10Item } from './types';

class ICD10Singleton extends Singleton<ICD10Item> {
  private constructor(item: ICD10Item[]) {
    super(item);
  }

  // Public static method to get the singleton instance from class
  public static getInstance(item: ICD10Item[]) {
    if (!ICD10Singleton.instance) {
      ICD10Singleton.instance = new ICD10Singleton(item);
    }
    return ICD10Singleton.instance as ICD10Singleton;
  }

  // Public methods to be exposed from instance
  public getICD10ClassificationByCode(code: string) {
    return this.list.filter((icd10Item) => icd10Item.code === code);
  }
  public getICD10ClassificationByNameEN(name: string) {
    return this.list.filter((icd10Item) => icd10Item.en.includes(name));
  }
  public getICD10ClassificationByNameIDN(name: string) {
    return this.list.filter((icd10Item) => icd10Item.idn.includes(name));
  }
}

const icd10Instance = ICD10Singleton.getInstance(data);

export default icd10Instance;
