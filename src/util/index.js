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