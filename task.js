function compareArrays(arr1, arr2) {
  let result = false; // дефолтное значение результата до начала проверок

  if (arr1.length !== arr2.length)  return result; // если размеры массивов разные, прекращаем проверку и выводим false

  if (arr1.every((n, i) => n === arr2[i])) result = true;

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr
  .filter((element) => element > 0) // оставляем токмо эдементы строго больше нуля
  .filter((element) => element % 3 === 0) // оставляем токмо кратные трём
  .map((element) => element * 10); // оставшиеся элементы умножаем на 10 и формируем из них массив

  return resultArr; // array
}
