import Singleton from '@/backend/repositories/static/lib/singleton';

import data from './data';
import type { Province } from './type';

class ProvinceSingleton extends Singleton<Province> {
  private constructor(item: Province[]) {
    super(item);
  }

  // Public static method to get the singleton instance from class
  public static getInstance(item: Province[]) {
    if (!ProvinceSingleton.instance) {
      ProvinceSingleton.instance = new ProvinceSingleton(item);
    }
    return ProvinceSingleton.instance as ProvinceSingleton;
  }

  // Public methods to be exposed from instance
  public getProvinceName(name: string) {
    return this.list.filter((province) => province.name.includes(name));
  }
  public getProvinceByCode(code: string) {
    return this.list.filter((province) => province.code === code);
  }
  public getProvinceById(id: number) {
    return this.list.filter((province) => province.id === id);
  }
}

const provinceInstance = ProvinceSingleton.getInstance(data);

export default provinceInstance;
