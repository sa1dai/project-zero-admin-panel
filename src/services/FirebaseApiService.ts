import { Order } from 'src/types';

interface ApiOrdersData {
  [key: string]: Order;
}

export default class FirebaseApiService {
  private _apiBase = 'https://project-zero-f13b0.firebaseio.com/orders.json';

  public getOrders = async (): Promise<Order[]> => {
    const res = await fetch(`${this._apiBase}`);
    if (!res.ok) {
      throw new Error(`Could not fetch orders received ${res.status}`);
    }
    const apiQuestionsData: ApiOrdersData = await res.json();
    return Object.values(apiQuestionsData);
  };
}
