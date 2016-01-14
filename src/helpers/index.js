export const getFormValues = form => {
  const reduce = Array.prototype.reduce;

  return reduce.call(form.elements, (prev, current, i, arr) => {
    const ele = arr[i];

    prev[ele.name] = ele.value;

    return prev;
  }, {});
};

export const setFormValus = (form, data) => {
  const forEach = Array.prototype.forEach;

  forEach(form.elements, ele => {
    ele.value = data[ele.name];
  });
};
