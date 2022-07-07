function arrayOfProducts(array) {
  console.log('array =', array);
  const products = new Array(array.length).fill(1);

  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    console.log('index =', i);
    console.log(products, 'products before');
    console.log(leftRunningProduct, 'leftRunningProduct before');
    products[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
    console.log(leftRunningProduct, 'leftRunningProduct after');
    console.log(products, 'products after');
  }

  let rightRunningProduct = 1;
  for (let i = array.length - 1; i > -1; i--) {
    console.log('index =', i);
    console.log(products, 'products2 before');
    console.log(rightRunningProduct, 'rightRunningProduct before');
    products[i] *= rightRunningProduct;
    rightRunningProduct *= array[i];
    console.log(rightRunningProduct, 'rightRunningProduct after');
    console.log(products, 'products2 after');
  }
  return products;
}

arrayOfProducts([5, 4, 3, 2, 1]);
