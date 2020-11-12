let highestIndex;
const txt = $('#txt');
let getItems = JSON.parse(localStorage.getItem('wisdom')) || {};

const drawItems = function()
{
  $("#results").empty();
  highestIndex = 0;

  if (!getItems.id)
    for (let f in getItems)
    {
      addDataToDOM(f);
      highestIndex++;
    }
};

const removeStorage = function(value)
{
  delete getItems[$(value).data("id")];
  localStorage.setItem("wisdom", JSON.stringify(getItems));
  drawItems();
};

const addDataToDOM = function(index)
{
  $("#results").append(`<span>${getItems[index]}</span><button data-id=${index} onclick="removeStorage(this)">x</button><br>`);
};

const clickSave = function()
{
  getItems["id" + highestIndex] = txt.val();
  localStorage.setItem("wisdom", JSON.stringify(getItems));
  console.log(`${txt.val()} is been saved to localstorage`);
  addDataToDOM(highestIndex);
  highestIndex++;
  drawItems();
};

const clearAll = function()
{
  localStorage.clear();
  getItems = {};
  drawItems();
};

$("#save").click(clickSave);
$("#clear").click(clearAll);

drawItems();