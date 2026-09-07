function welcome(name: string) {
  console.log("Hello");
  console.log("welcome");

  const user = {
    name: "Rakesh",
  };

  const fname = user.name;

  return name + fname;
}

welcome("Rakesh");
