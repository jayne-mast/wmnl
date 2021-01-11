export const getColorFromBgColor = (bgColor = colorPrimary) => {
  const colorPrimary = '#ff3d96';
  const colorAccent = '#030059';
  if (bgColor === colorPrimary) {
    return colorAccent;
  }
  return colorPrimary;
};
