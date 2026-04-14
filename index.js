

const DateJS = require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (const usersArray of args) {
    combinedObject.users = [...combinedObject.users, ...usersArray];
  }

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = {
  combineUsers
};