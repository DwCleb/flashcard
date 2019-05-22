const Utils = {
  api: (path) => {
    const url = 'http://192.168.0.105/PrixPay/app/ReactNative/PrixPark_API/mobile/v1';
    const api = (path != undefined)
      ? `${url}${path}`
      : url;
    return api;
  },
};

export default Utils;
