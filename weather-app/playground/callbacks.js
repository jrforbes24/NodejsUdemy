var getUser = (id, callback) => {
  var user = {
    id: id,
    name: "Big John"
  };

  setTimeout(() => {
    callback(user);
  }, 3000);

};

getUser(25, (user) => {
  console.log(user);
});
