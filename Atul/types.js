products = [
    {
      name: 'product one',
      price: 1000,
      discount: 20
    },
    {
      name: 'product 2',
      price: 2000,
      discount: 20
    },
    {
      name: 'product three',
      price: 1500,
      discount: 7
    }
  ];
  
  let discountedProducts = products.map((product) => {
    // Calculate the discount amount
    let discountAmount = (product.price * product.discount) / 100;
  
    // Calculate the price after discount
    let priceAfterDiscount = product.price - discountAmount;
  
    // Create a new object with the updated values
    return {
      name: product.name,
      price: product.price,
      discount: product.discount,
      discountAmount: discountAmount,
      priceAfterDiscount: priceAfterDiscount
    };
  });
  
  console.log(discountedProducts);
  