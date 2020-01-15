// 
export function importAll(requireContextObj) {
  const cache = {};
  requireContextObj.keys().forEach(key => {
    const fileName = key.replace('./', '').replace('.jsx', '');
    requireContextObj(key).default.fileName = fileName;
    cache[fileName] = requireContextObj(key).default;
  })
  return cache;
}
export function deepChange(arr = [], target) {
  const { x, y, h, w } = target;
  let t;
  for (let i = 0; i < arr.length; i += 1) {
    if ((arr[i].x === x || arr[i].x === x + w) && arr[i].y === y) {
      // eslint-disable-next-line no-param-reassign
      arr[i].y += h;
      t = arr[i];
      break;
    }
  }
  if (t) {
    deepChange(
      arr.filter(i => i.i !== t.i),
      t
    );
  }
  return arr;
};