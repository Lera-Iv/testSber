import { useState, FC, useEffect } from 'react';
import { TCurrency } from '../../redux/model';
import { Input, ContainerInput, IconButton, ContainerInputList, InputListItem } from './style';
import chevron from '../../assets/chevron-down.svg';

export interface IInputSelectProps {
  currencyData?: TCurrency[];
  onSelectedItem?: (value: TCurrency) => void;
  isLoading?: boolean;
  isError?: boolean;
}

export const InputSelect: FC<IInputSelectProps> = ({
  currencyData,
  onSelectedItem,
  isLoading,
  isError
}) => {
  const initialValue: string | undefined = currencyData ? currencyData[0].id : '';
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTitle, setSelectedTitle] = useState<string | undefined>(initialValue);

  useEffect(() => {
    if (onSelectedItem && currencyData && currencyData.length > 0) {
      onSelectedItem(currencyData[0]);
    }
    setSelectedTitle(initialValue);
  }, [currencyData, initialValue, isError, isLoading, onSelectedItem]);

  const handleToggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (optionValue: string, selectObj: TCurrency) => {
    setSelectedTitle(optionValue);
    setIsOpen(false);

    if (onSelectedItem) {
      onSelectedItem(selectObj);
    }
  };

  return (
    <ContainerInput>
      <Input type='text' readOnly value={selectedTitle} />
      <IconButton scale={String(isOpen)} onClick={handleToggleOpen}>
        <img src={chevron} alt='chevron' />
      </IconButton>
      <ContainerInputList $isOpened={isOpen}>
        {isError && <InputListItem as={'li'}>Error...</InputListItem>}

        {isLoading && <InputListItem as={'li'}>Loading...</InputListItem>}

        {currencyData?.map((currencyItem) => (
          <InputListItem
            as={'li'}
            key={currencyItem.id}
            $active={currencyItem.id === selectedTitle}
            onClick={() => handleOptionClick(currencyItem.id, currencyItem)}>
            {currencyItem.id}
          </InputListItem>
        ))}
      </ContainerInputList>
    </ContainerInput>
  );
};
