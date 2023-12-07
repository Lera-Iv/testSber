import { useGetCurrenciesQuery } from '@/shared/redux/api';
import { useAppDispatch, useAppSelector } from '@/shared/redux/hooks';
import { addCurrencyState } from '@/shared/redux/slice';
import { TCurrency } from '@/shared/redux/model';
import { InputSelect, Banner, Title } from '@/shared/ui';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 0 29px 29px 29px;
  flex: 1 0 auto;
`;

export const MainPage = () => {
  const { data: data, isLoading, isError } = useGetCurrenciesQuery();
  const dispatch = useAppDispatch();

  const onSelected = (value: TCurrency) => {
    dispatch(addCurrencyState(value));
  };

  const title = useAppSelector((state) => state.formCurrentCurensy.name);

  return (
    <>
      <Container as={'main'}>
        <InputSelect
          isLoading={isLoading}
          isError={isError}
          currencyData={data?.data}
          onSelectedItem={onSelected}
        />
      </Container>
      <Banner>
        {isLoading && <Title>{'Loading...'}</Title>}
        {!isError && !isLoading && <Title>{title}</Title>}
        {isError && <Title>{'Error...'}</Title>}
      </Banner>
    </>
  );
};
