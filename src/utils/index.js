export const curry = (fn, ...params) => (...curryParams) => fn.call(fn, ...params, ...curryParams);

export const openAuthPopup = url =>
  new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window is not defined'));
      return;
    }

    const popup = window.open(url, 'oauth', 'width=700,height=500');

    window.addEventListener('message', e => {
      popup.close();

      return resolve(e);
    });
  });

export const openUrl = url => {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
};
