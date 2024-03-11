export interface iSellingPoint {
  compulsory: boolean;
  name: "Basic" | "Preceptor" | "AdVantage" | "LEGO";
  active: boolean;
  price: number;
  annotation: string;
  services: string[];
}

export interface iLego {
  name: string;
  active: boolean;
  id: number;
}

export interface iOptional {
  name: string;
  price: number;
  active: boolean;
}

export type dataItem = {
  heading: string;
  details: string;
};

export interface iModalData {
  showModal: boolean;
  name: string;
  modalData: dataItem[];
}

export type ModalParams = Omit<iModalData, "showModal">;

export interface CardProps extends iSellingPoint {
  handleModal: ({ name, modalData }: ModalParams) => void;
}
