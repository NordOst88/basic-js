module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) == false) return false;
  let result = [];
  for (let i = 0; i < members.length; i++){
    if (typeof(members[i]) === 'string'){
      result.push(members[i].trim().toUpperCase()[0]);
    }
  }
  return result.sort().join('');
};