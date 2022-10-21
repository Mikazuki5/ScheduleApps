export interface HeaderInterfaces {
  leftSide?: object | any;
  title: string;
  rightSide?: object | any;
  headerContainerStyle?: object;
}
export interface CardInterfaces {
  children: object | any;
  cardCustomStyle?: object;
  onSubmit?: () => void;
}

export interface DetailsScheduleIntefaces {
  title: string;
  type: string;
  leftContent?: object;
  rightContent?: object;
}