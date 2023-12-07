import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/shared/ui';
import { Logo } from '@/entities/Logo';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: 425px) {
    background: none;
  }
`;

const LOGO_TEXT = 'CAT';
const LOGO_SUBTITLE = 'currencies academic terms';

export const Layout: FC = () => {
  return (
    <Container>
      <Header>
        <Logo title={LOGO_TEXT} subTitle={LOGO_SUBTITLE} />
      </Header>
      <Outlet />
    </Container>
  );
};
