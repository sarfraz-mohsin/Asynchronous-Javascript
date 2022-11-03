let stock = {
  Fruits: ["strawberry", "banana", "apple", "grapes"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stock.Fruits[1]}`))
  .then(() => {
    return order(0000, () => console.log("production has started "));
  })
  .then(() => {
    return order(2000, () => console.log("the fruit has been chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stock.liquid[0]} and ${stock.liquid[1]}`)
    );
  })
  .then(() => {
    return order(1000, () => console.log(`start the machine`));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`ice cream placed on ${stock.holder[0]} `)
    );
  })
  .then(() => {
    return order(3000, () => console.log(`${stock.toppings[0]} was selected`));
  })
  .then(() => {
    return order(2000, () => console.log(`Serve the ice cream`));
  })
  .catch(() => {
    console.log("Customer left");
  })
  .finally(() => {
    console.log("our shop is closed");
  });
