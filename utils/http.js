const baseUrl = 'https://frp-gyenno-cap.gyenno.com/api/v1';

class HttpService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.requestTask = null;
  }

  request(url, method, data, header) {
    
    // token
    const token = wx.getStorageSync('token');

    if (token) {
      header = {
        ...header,
        'Authorization': 'Bearer ' + token
      };
    }

    return new Promise((resolve, reject) => {
      this.requestTask = wx.request({
        url: this.baseUrl + url,
        method: method,
        data: data,
        header: header,
        success: (res) => {
          if (res.statusCode === 200) {
            resolve(res);
          } else {
            reject(res);
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }

  uploadFile(url, data, header) {
    const token = wx.getStorageSync('token');

    if (token) {
      header = {
        ...header,
        'Authorization': 'Bearer ' + token
      };
    }

    return new Promise((resolve, reject) => {
      this.requestTask = wx.uploadFile({
        url: this.baseUrl + url,
        filePath: data.filePath,
        name: data.name,
        formData: data.formData || {},
        header: header,
        success: (res) => {
          if (res.statusCode === 201) {
            resolve(res);
          } else {
            reject(res);
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }

  get(url, data, header) {
    return this.request(url, 'GET', data, header);
  }

  post(url, data, header) {
    return this.request(url, 'POST', data, header);
  }

  put(url, data, header) {
    return this.request(url, 'PUT', data, header);
  }

  delete(url, data, header) {
    return this.request(url, 'DELETE', data, header);
  }

  upload(url, data, header) {
    return this.uploadFile(url, data, header);
  }
  
}

const httpService = new HttpService(baseUrl);

module.exports = httpService;