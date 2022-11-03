let stock = {
  Fruits: ["strawberry", "banana", "apple", "grapes"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stock.Fruits[0]}`);

    await time(0000);
    console.log("start the production");

    await time(2000);
    console.log("cut the fruits");

    await time(1000);
    console.log(`${stock.liquid[0]} and ${stock.liquid[1]}`);

    await time(1000);
    console.log(`start the machine`);

    await time(2000);
    console.log(`ice cream placed on ${stock.holder[0]}`);

    await time(3000);
    console.log(`${stock.toppings[0]} was seleted`);

    await time(2000);
    console.log(`Serve the ice cream`);
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended, shop is closed ");
  }
}

kitchen();
