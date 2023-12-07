import { FC, ReactNode } from 'react';
import { BannerBlack } from './style';

interface IBanner {
  children?: ReactNode;
}

export const Banner: FC<IBanner> = ({ children }) => {
  return (
    <BannerBlack>
      {children}
    </BannerBlack>
  )
};
