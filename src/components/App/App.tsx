import React, { ReactNode } from 'react';
import OrderList from 'src/components/OrderList';
import { Order } from 'src/types';
import FirebaseApiService from 'src/services/FirebaseApiService';
import 'src/components/common.css';
import './App.css';

interface AppState {
  orders: Order[] | null;
  error: string | null;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      orders: null,
      error: null
    };
  }

  async componentDidMount(): Promise<void> {
    const service = new FirebaseApiService();
    service
      .getOrders()
      .then(orders => this.setState({ orders }))
      .catch(() => this.setState({ error: 'Error occurred!' }));
  }

  public render(): ReactNode {
    const { orders, error } = this.state;
    if (error) {
      return <div className="common-screen-center">{error}</div>;
    }
    if (!orders) {
      return <div className="common-screen-center">Loading...</div>;
    }
    return <OrderList orders={orders} />;
  }
}

export default App;
