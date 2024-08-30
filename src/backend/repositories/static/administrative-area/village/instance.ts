import Singleton from '@/backend/repositories/static/lib/singleton';

import data from './data';
import type { Village } from './type';

class VillageSingleton extends Singleton<Village> {
  private constructor(item: Village[]) {
    super(item);
  }

  // Public static method to get the singleton instance from class
  static getInstance(item: Village[]) {
    if (!VillageSingleton.instance) {
      VillageSingleton.instance = new VillageSingleton(item);
    }
    return VillageSingleton.instance as VillageSingleton;
  }

  // Public methods to be exposed from instance
  public getVillageByName(name: string) {
    return this.list.filter((village) => village.name.includes(name));
  }
  public getVillageByCode(code: string) {
    return this.list.filter((village) => village.code === code);
  }
  public getVillageByFullCode(code: string) {
    return this.list.filter((village) => village.full_code === code);
  }
  public getVillageById(id: number) {
    return this.list.filter((village) => village.id === id);
  }
  public getVillageByPostalCode(code: string) {
    return this.list.filter((village) => village.pos_code === code);
  }
  public getVillageByDistrictId(id: number) {
    return this.list.filter((village) => village.kecamatan_id === id);
  }
}

const villageInstance = VillageSingleton.getInstance(data);

export default villageInstance;
