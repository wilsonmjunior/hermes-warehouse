import { api } from "../api";

export type OrderItem = {
  item: string;
  localizacao: string;
  codigo: string;
  referencia: string;
  saldo: string;
  qtd_sep: string;
};

export type Order = {
  id: string;
  cliente: string;
  entrega_endereco: string;
  entrega_numero: string;
  entrega_complemento: string | null;
  entrega_bairro: string;
  entrega_cep: string;
  entrega_cidade: string;
  itens: OrderItem[];
};

export type GetOrderParams = {
  order: string;
};

export type GetOrderItemParams = GetOrderParams & {
  item: string;
};

type OrderResponse = {
  error?: string;
  pedido?: Order;
};

export async function getOrder({ order }: GetOrderParams) {
  try {
    const response = await api.post<OrderResponse>("app/pedido", {
      pedido: order,
    });

    return response;
  } catch (error) {
    console.log("error service: ", error);
    throw error;
  }
}

export async function getOrderItem({ item, order }: GetOrderItemParams) {
  try {
    const response = await getOrder({ order });

    if (response.data.error) {
      return response;
    }

    const itemFounded = response.data.pedido?.itens.find(
      (orderItem) => String(orderItem.item) === item,
    );

    return {
      ...response,
      data: {
        ...response.data,
        pedido: {
          ...response.data.pedido,
          itens: itemFounded ? [itemFounded] : response.data.pedido?.itens,
        } as Order,
      },
    };
  } catch (error) {
    console.log("Error service: ", error);
    throw error;
  }
}

type GetFullOrderParams = {
  action?: string;
  item?: string;
  order: string;
};

export async function pickingOrderItem({
  order,
  item,
  action,
}: GetFullOrderParams) {
  try {
    const response = await api.post<OrderResponse>(`app/pedido`, {
      pedido: order,
      item,
      acao: action,
    });

    return response;
  } catch (error) {
    console.log("error service: ", error);
    throw error.response;
  }
}
