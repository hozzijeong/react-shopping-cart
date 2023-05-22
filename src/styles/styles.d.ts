import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      primary: string;
      secondary: string;
      gray: string;
    };
    font: {
      product: string;
      header: string;
      price: string;
      title: string;
      emphasizeFont: string;
      subTitle: string;
    };
  }
}