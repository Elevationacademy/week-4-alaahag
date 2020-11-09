//test

// const items = [
//     { item: "cheese", price: 15 },
//     { item: "arak", price: 68 },
//     { item: "hummus", price: 15 },
//     { item: "pita", price: 5 }
// ];

// const source = $('#store-template').html();
// const template = Handlebars.compile(source);

// for(let item of items)
// {
//     let newHTML = template(item);
//     $('.items').append(newHTML);
// }


// const menuData = {
//     menu: [
//       { name: "Google", link: "http://google.com" },
//       { name: "Facebook", link: "http://facebook.com" },
//       { name: "Instagram", link: "http://nstagram.com" },
//       { name: "Twitter", link: "http://twitter.com" },
//     ]
//   };

//   const source = $('#menu-template').html();
//   const template = Handlebars.compile(source);
//   const newHTML = template(menuData);

//   // append our new html to the page
//   $('.menu').append(newHTML);


const menuData = {
    menu: [
      { name: "Google", link: "http://google.com", socialNetwork: true },
      { name: "Facebook", link: "http://facebook.com", socialNetwork: false },
      { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
      { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
    ]
  };

  const source = $('#menu-template').html();
  const template = Handlebars.compile(source);
  const newHTML = template(menuData);

  // append our new html to the page
  $('.menu').append(newHTML);

//ex1