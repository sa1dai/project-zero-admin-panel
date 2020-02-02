import React, { ReactElement } from 'react';
import './OrderList.css';
import 'src/components/common.css';
import { Order } from 'src/types';

interface OrderListProps {
  orders: Order[];
}

const OrderList = (props: OrderListProps): ReactElement | null => {
  const { orders } = props;
  if (!Array.isArray(orders)) {
    return null;
  }
  if (orders.length === 0) {
    return <div className="common-screen-center">Заявок нет</div>;
  }
  return (
    <ul className="OrderList-ul">
      {orders.map(order => {
        return (
          <li className="OrderList-li" key={`${order.name}${order.phone}`}>
            <span className="OrderList-li-title">{order.name}</span>
            <span className="OrderList-li-title">{order.phone}</span>
            <span className="OrderList-li-title">{order.service}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default OrderList;
