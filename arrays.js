var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (chocolateBars) {
  return ['twix', ...chocolateBars];
};

function destructivelyAddElementToBeginningOfArray (chocolateBars) {
  chocolateBars.unshift('twix')
  return chocolateBars
};
