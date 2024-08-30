import Singleton from '@/backend/repositories/static/lib/singleton';

import data from './data';
import type { Regency } from './type';

class RegencySingleton extends Singleton<Regency> {
  private constructor(item: Regency[]) {
    super(item);
  }

  // Public static method to get the singleton instance from class
  public static getInstance(item: Regency[]) {
    if (!RegencySingleton.instance) {
      RegencySingleton.instance = new RegencySingleton(item);
    }
    return RegencySingleton.instance as RegencySingleton;
  }

  // Public methods to be exposed from instance
  public getRegencyByName(name: string) {
    return this.list.filter((regency) => regency.name.includes(name));
  }
  public getRegencyByCode(code: string) {
    return this.list.filter((regency) => regency.code === code);
  }
  public getRegencyByFullCode(code: string) {
    return this.list.filter((regency) => regency.full_code === code);
  }
  public getRegencyByProvinceId(id: number) {
    return this.list.filter((regency) => regency.provinsi_id === id);
  }
  public getRegencyById(id: number) {
    return this.list.filter((regency) => regency.id === id);
  }
}

const regencyInstance = RegencySingleton.getInstance(data);

export default regencyInstance;
