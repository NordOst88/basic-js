const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let age = 0;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let sampleActivityNumber = parseFloat(sampleActivity);

  if (typeof sampleActivity !== 'string') return false;
  if (sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY || isNaN(sampleActivityNumber)) return false;

  return age = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k));

};
