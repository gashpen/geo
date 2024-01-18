/* eslint-disable consistent-return */
/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
export default function editCoords(str) {
  const regexp = /^[-+]?([0-9]*\.[0-9]+|[0-9]+)$/;
  const coords = str.split(',').map((s) => {
    s = s.trim();
    return s;
  });

  if (!regexp.test(Number(coords[0])) || !regexp.test(Number(coords[1]))) {
    alert('Введено некоректное значение!');
    return;
  }
  if (Number(coords[0]) > 90 || Number(coords[0]) < -90) {
    alert('Неверно введена широта. Широта не должна превышать 90 градусов и быть не меньше -90 градусов');
    return;
  }
  if (Number(coords[1]) > 180 || Number(coords[1]) < -180) {
    alert('Неверно введена долгота. Долгота не должна превышать 180 градусов и быть не меньше -180 градусов');
    return;
  }
  if (coords[0] === '' || coords[1] === '') {
    alert('Значение не может быть пустым');
    return;
  }

  return [coords[0], coords[1]];
}
