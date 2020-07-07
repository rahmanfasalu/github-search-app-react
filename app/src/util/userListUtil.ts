export const compareValues = (key: any, order = "asc") => {
  return function innerSort(a: any, b: any) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
};

export const filterArray = (arr: any, searchKey: any) => {
  if (!searchKey) {
    return arr;
  }
  const cloneArr = [...arr];
  return cloneArr.filter((obj: any) =>
    Object.keys(obj).some((key) =>
      `${obj[key]}`.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
    )
  );
};

export const formateTitle = (S: string) => {
  return S.replace(/([A-Z])/g, " $1").trim();
};
