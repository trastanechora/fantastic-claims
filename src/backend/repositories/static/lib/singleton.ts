interface DefaultType {
  id?: number;
  code?: string;
}

class Singleton<PropsType extends DefaultType> {
  // Protected property to hold the stored item and allow subclasses to call it
  protected static instance: Singleton<any>;
  protected list: PropsType[];
  protected length: number;
  protected constructor(item: PropsType[]) {
    this.list = item;
    this.length = item.length;
  }

  // Static method to get the singleton instance
  protected getInstance<PropsType extends DefaultType>(item: PropsType[]) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(item);
    }
    return Singleton.instance;
  }

  public getByCode(code: string) {
    return this.list.find((item) => item.code === code);
  }

  public getById(id: number) {
    return this.list.find((item) => item.id === id);
  }
}

export default Singleton;
