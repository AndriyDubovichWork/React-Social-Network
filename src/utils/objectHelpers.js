export const UpdateObjInArray = (
  items,
  itemId,
  ObjPropsName,
  NewPropsValue
) => {
  return items.map((u) => {
    if (u[ObjPropsName] === itemId) {
      return { ...u, ...NewPropsValue };
    }
    return u;
  });
};
