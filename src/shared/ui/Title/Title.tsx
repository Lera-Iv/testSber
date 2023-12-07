import { FC } from 'react';
import { BannerText } from './style';

export interface ITitle {
  children?: string;
}

export const Title: FC<ITitle> = ({ children }) => {
  return <BannerText>{children}</BannerText>;
};
