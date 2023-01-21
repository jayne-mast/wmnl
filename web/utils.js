export const getColorFromBgColor = (bgColor = '#f3a5e2') => {
  const colorPrimaryOld = '#ff3d96';
  const colorPrimary = '#f3a5e2';
  const colorAccentOld = '#030059';
  const colorAccent = '#5e1410';
  const colorWhite = '#ffffff';
  const bgColorLowercase = bgColor.toLowerCase();
  if (bgColorLowercase === colorPrimaryOld) {
    return colorAccentOld;
  }
  if (bgColorLowercase === colorPrimary) {
    return colorAccent;
  }
  if (bgColorLowercase === colorWhite) {
    return '#333333';
  }
  return colorPrimary;
};
