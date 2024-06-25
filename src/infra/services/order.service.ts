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
  item?: string;
  order: string;
};

type OrderResponse = {
  error?: string;
  pedido?: Order;
};

export async function getOrderItem({ item = "0", order }: GetOrderParams) {
  try {
    const response = await api.post<OrderResponse>("app/pedido", {
      pedido: order,
      item,
    });

    return response;
  } catch (error) {
    console.log("error service: ", error);
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
  item = "0",
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
