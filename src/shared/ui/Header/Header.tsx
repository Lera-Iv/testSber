import { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Head, ImageContainer, Image} from './style';
import cat from '@/shared/assets/kitten.png';

interface IHeader {
  children: ReactNode;
}

export const Header: FC<IHeader> = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        {children}
        {width > 530 && (
          <ImageContainer>
            <Image src={cat} alt='cat' />
          </ImageContainer>
        )}
      </Head>
    </>
  );
};

