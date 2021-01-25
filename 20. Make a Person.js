// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = () => {
    return firstAndLast;
  };
  this.getFirstName = () => {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = () => {
    return firstAndLast.split(" ")[1];
  };
  this.setFullName = (newFullName) => {
    firstAndLast = newFullName;
  };
  this.setFirstName = (newFirstName) => {
    firstAndLast = newFirstName + " " + firstAndLast.split(" ")[1];
  };
  this.setLastName = (newLastName) => {
    firstAndLast = firstAndLast.split(" ")[0] + " " + newLastName;
  };
  return firstAndLast;
};

var bob = new Person("Bob Ross");
bob.getFullName();
