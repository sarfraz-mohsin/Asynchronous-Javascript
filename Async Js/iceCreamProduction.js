let stock = {
  Fruits: ["strawberry", "banana", "apple", "grapes"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stock.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("the fruit has been chopped");

      setTimeout(() => {
        console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);

        setTimeout(() => {
          console.log("the machine has been started");

          setTimeout(() => {
            console.log(`${stock.holder[0]} is selected`);

            setTimeout(() => {
              console.log(
                `${stock.toppings[0]} was added in the cone with ice cream`
              );

              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(2, production);
