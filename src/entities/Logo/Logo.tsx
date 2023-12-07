import { FC } from 'react';
import {
  ContainerLogo,
  HeaderText,
  LogoSubtitle,
  HeaderSubtitle,
} from "./style";

interface ILogo {
  title: string;
  subTitle: string;
}

export const Logo: FC<ILogo> = ({ title, subTitle }) => {
  return (
    <ContainerLogo>
      <HeaderText>{title}</HeaderText>
      <LogoSubtitle>
        <HeaderSubtitle>{subTitle}</HeaderSubtitle>
      </LogoSubtitle>
    </ContainerLogo>
  );
};