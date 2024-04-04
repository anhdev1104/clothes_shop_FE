const LimitProduct = (product, limit, skip) => {
  return product?.filter(product => product.isActive === 1).slice(skip, skip + limit);
};

export default LimitProduct;
