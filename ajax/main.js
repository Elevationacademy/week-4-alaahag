//ex1 + ex2 + ex3
// const fetch = function (queryType, queryValue)
// {
//   $.ajax(
//   {
//       method: "GET",
//       url: "https://www.googleapis.com/books/v1/volumes?q=" + queryType + ":" + queryValue,
//       success: function (data)
//       {
//         if (queryType == "title")
//           data.items.forEach(element => console.log(element.volumeInfo.authors[0]));
//           //console.log(data.items[0].volumeInfo.authors[0]);
//         else if (queryType == "isbn")
//           data.items.forEach(element => console.log(element.volumeInfo.title));
//           //console.log(data.items[0].volumeInfo.title);
//       },
//       error: function (xhr, text, error)
//       {
//           console.log(text);
//       }
//   });
// };

// fetch("isbn", 9789814561778);
// fetch("title", "How to Win Friends and Influence People");


//ex4 + ex5 + extensions
let array_fav_gifs = [];

const btn_show_favorites_click = function()
{
  $("#div_favorites").empty();
  array_fav_gifs.forEach(src => $("#div_favorites").append(`<iframe src="${src}"></iframe>`));
};

const btn_add_to_favorites = function(src)
{
  array_fav_gifs.push(src);
  $("#search_result").empty();
  alert ("Added this gif to favorites");
};

const api_key = "MPK9EoesEJs256rLqg0mtmY1fpyC8Ym7";
let url = "http://api.giphy.com/v1/gifs/search?api_key=" + api_key + "&";

const fetch = function (queryType, queryValue)
{
  $.ajax(
  {
      method: "GET",
      url: url + queryType + "=" + queryValue,
      success: function (data)
      {
        $("#search_result").empty();
        $("#search_result").append("<iframe src=" + data.data[0].embed_url + "></iframe>");
        $("#search_result").append(`<br><button onclick=btn_add_to_favorites('${data.data[0].embed_url}')>Add to favorites</button><br><br>`);
      },
      error: function (xhr, text, error)
      {
          console.log(text);
      }
  });
};

const btn_click = function()
{
  fetch("q", $('#txt_search').val());
};

$("#btn_search").click(btn_click);
