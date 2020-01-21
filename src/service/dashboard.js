// 这里本应该是掉接口 暂时用localStorage代替
export async function getLayout(params) {
  const result = await new Promise(resolve => {
    const res = localStorage.getItem('dashboardLayout');
    if (res) {
      resolve(JSON.parse(res));
    } else {
      resolve({ xs: [] });
    }
  });
  return result;
}
export async function saveLayout(params) {
  console.log(params);
  const result = await new Promise((resolve, reject) => {
    localStorage.setItem('dashboardLayout', JSON.stringify(params.dashboardLayout))
    resolve({ success: true });
  });
  return result;
}