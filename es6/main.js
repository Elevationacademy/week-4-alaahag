//all exercises in one
const named_func = function(user)
{
  console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`);
};

$.ajax(
{
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (data)
    {
      console.log("ex1:");
      let d = data.map(e => ({'email': e.email, 'companyName': e.company.name}));
      console.log(d);

      console.log("ex2 + ex3:");
      let f = data.filter(fill => fill.address.zipcode.startsWith('5')).map(mp => mp.id);
      console.log(f);

      console.log("ex4:");
      let names = data.filter(fill => fill.name.startsWith('C')).map(mp => mp.name);
      console.log(names);

      console.log("ex5:");
      let south_christy = data.every(e => e.address.city==="South Christy");
      console.log(south_christy);

      console.log("ex6:");
      let apt950 = data.filter(fill => fill.address.suite==="Apt. 950").map(m => m.company.name);
      console.log(apt950);

      console.log("ex7:");
      data.forEach(f => named_func(f) );
    },
    error: function (xhr, text, error)
    {
        console.log(text);
    }
});

