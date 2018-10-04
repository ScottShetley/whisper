let nextCartId = 0;

export const AddToCart = secret => ({
  type: "AddToCart",
  item: secret,
  cartId: nextCartId++
});

export const RemoveFromCart = id => ({
  type: "RemoveFromCart",
  id: id
});
