import ContentLayout from 'src/components/@common/ContentLayout';
import ProductItem from 'src/components/ProductItem';
import Header from 'src/components/Header';
import { useGetFetch } from 'src/hooks/useFetch';
import { Product } from 'src/types';
import { styled } from 'styled-components';
import ToastPortal from 'src/components/@common/Toast/ToastPortal';
import { useEffect } from 'react';
import useToast from 'src/hooks/useToast';

const ProductList = () => {
  const { data, error } = useGetFetch<Product[]>('/api/products', []);
  const { toast } = useToast();

  const fetchedProductList = data.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  useEffect(() => {
    if (error.isError) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <>
      <Header />
      <ContentLayout>
        <ProductListWrapper>{fetchedProductList}</ProductListWrapper>
      </ContentLayout>
    </>
  );
};

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  column-gap: 24px;
  margin-top: 60px;

  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default ProductList;
