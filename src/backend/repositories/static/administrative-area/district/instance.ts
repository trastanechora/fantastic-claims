import Singleton from '@/backend/repositories/static/lib/singleton';

import data from './data';
import type { District } from './type';

class DistrictSingleton extends Singleton<District> {
  private constructor(item: District[]) {
    super(item);
  }

  // Public static method to get the singleton instance from class
  public static getInstance(item: District[]) {
    if (!DistrictSingleton.instance) {
      DistrictSingleton.instance = new DistrictSingleton(item);
    }
    return DistrictSingleton.instance as DistrictSingleton;
  }

  // Public methods to be exposed from instance
  public getDistrictByName(name: string) {
    return this.list.filter((district) => district.name.includes(name));
  }
  public getDistrictById(id: number) {
    return this.list.filter((district) => district.id === id);
  }
  public getDistrictByCode(code: string) {
    return this.list.filter((district) => district.code === code);
  }
  public getDistrictByFullCode(code: string) {
    return this.list.filter((district) => district.full_code === code);
  }
  public getDistrictByRegencyId(id: number) {
    return this.list.filter((district) => district.kabupaten_id === id);
  }
}

const districtInstance = DistrictSingleton.getInstance(data);

export default districtInstance;
