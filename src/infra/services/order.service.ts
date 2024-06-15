import api from "../api";

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
  action?: string;
  company: string;
  item?: string;
  orderId: string;
};

type OrderResponse = {
  error?: string;
  pedido?: Order;
};

export async function getOrder({
  action,
  company,
  item = "0",
  orderId,
}: GetOrderParams) {
  try {
    const response = await api.get<OrderResponse>(
      `pedido/?v_empresa=${company}&v_pedido=${orderId}&v_item=${item}&v_acao=${action}`,
    );
    return response;
  } catch (error) {
    console.log("error service: ", error);
    throw error;
  }
}

type GetFullOrderParams = {
  action?: string;
  item?: string;
  orderId: string;
};

export async function getFullOrder({
  orderId,
  item = "0",
  action,
}: GetFullOrderParams) {
  try {
    const response = await api.get<OrderResponse>(
      `pedido/?v_pedido=${orderId}&v_item=${item}&v_acao=${action}`,
    );
    return response;
  } catch (error) {
    console.log("error service: ", error);
    throw error;
  }
}
