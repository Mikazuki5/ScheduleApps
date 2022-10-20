export interface HeaderInterfaces {
  leftSide?: object | any;
  title: string;
  rightSide?: object | any;
  headerContainerStyle?: object
}
export interface CardWithTouchableInterfaces {
  children: object | any;
  cardCustomStyle?: object
  onSubmit?: () => void
}