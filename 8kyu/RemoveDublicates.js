function distinct(a) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    const num = a[i];

    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(distinct([1, 2, 1, 1, 3, 2]));
