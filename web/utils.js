export const getColorFromBgColor = (bgColor = colorPrimary) => {
  const colorPrimary = '#ff3d96';
  const colorAccent = '#030059';
  const colorWhite = '#ffffff';
  if (bgColor === colorPrimary) {
    return colorAccent;
  }
  if (bgColor === colorWhite) {
    return '#333333';
  }
  return colorPrimary;
};
