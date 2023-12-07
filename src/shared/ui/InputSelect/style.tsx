import styled from 'styled-components';

export const Input = styled.input`
  width: 180px;
  height: 43px;
  padding-left: 15px;
  font-size: 18px;
  line-height: 43px;
  font-weight: 300;
  color: #000000;
  border: solid #dad6d6;
  border-radius: 10px;
  text-transform: uppercase;
`;

interface IContainerInputList {
  $isOpened: boolean;
}

export const ContainerInputList = styled.ul<IContainerInputList>`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 6px;
  height: ${({ $isOpened }) => ($isOpened ? '172px' : '0')};
  overflow: ${({ $isOpened }) => ($isOpened ? 'auto' : 'hidden')};
  transition: all 0.5s ease-out;
  background-color: #ffffff;
  cursor: pointer;
  z-index: 10;
`;

export const ContainerInput = styled.div`
  width: 180px;
  position: relative;

  @media (max-width: 530px) {
    margin: 0 auto;
  }
`;

export const IconButton = styled.button<{ scale: string }>`
  height: 100%;
  width: 57px;
  position: absolute;
  right: 0px;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: transform 0.5s ease-out;
  transform: translate(0, -50%) ${({ scale }) => (scale === 'false' ? 'scaleY(-1)' : 'scaleY(1)')};
`;

interface IInputListItem {
  $active: boolean;
}

export const InputListItem = styled(Input)<IInputListItem>`
  border-radius: 0;
  border-top: none;
  background-color: ${({ $active }) => ( $active ? '#F0EFEF' : 'none')};

  &:hover {
    background-color: #F0EFEF;
  }

  &:first-child {
    border-top: solid #dad6d6;
  }
`;