import { Meta, StoryObj } from '@storybook/react';
import CartItem from '.';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { usePostFetch } from 'src/hooks/useFetch';
import { useEffect } from 'react';
import { cartListAtom } from 'src/recoil/atom';
import { selectedCartItemSelector } from 'src/recoil/selector';

const mockData = {
  id: 3,
  quantity: 1,
  product: {
    id: 3,
    price: 10000,
    name: '생일 춘식이',
    imageUrl:
      'https://item.kakaocdn.net/do/91481c46c6ee38c33e20deba29e1f73f9f17e489affba0627eb1eb39695f93dd',
  },
};

const cartItem = {
  component: CartItem,
  title: 'Cart/CartItem',
  tags: ['autodocs'],
} satisfies Meta<typeof CartItem>;

export default cartItem;

type Story = StoryObj<typeof cartItem>;

export const Default: Story = {
  args: {
    item: mockData,
  },
  render: (params) => {
    const { postData } = usePostFetch();
    const setCartItem = useSetRecoilState(cartListAtom);

    useEffect(() => {
      postData('/api/cart-items', { productId: params.item.id });
      setCartItem([
        {
          ...params.item,
        },
      ]);
    }, []);

    return <CartItem {...params} />;
  },
};