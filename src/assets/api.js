import axios from 'axios';
const service = axios.create({
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

// 添加请求拦截器
service.interceptors.request.use(
    function(config) {
        // 请求头添加token
        const obj = {
            merchantId: sessionStorage._zhihuimerchantId
        };
        config.data = Object.assign({}, config.data, obj);
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

// 响应拦截器即异常处理
service.interceptors.response.use(
    res => {
        if (res.status === 200) {
            if (res.data.success === false) {
                if (res.data) {
                    // Message.closeAll();
                    // Message.error({
                    //     message: res.data.message
                    // });
                }
                if (res.data.code === '19995') {
                    // store.dispatch('permission/LOGIN_OUT');
                }
                return Promise.reject(res);
            }
            return res.data;
        }
        return Promise.reject(res);
    },
    err => {
        console.log(err);
        if (err && err.response) {
            switch (err.response.status) {
            case 400:
                err.message = '请求出错';
                break;
            case 401:
                err.message = '请求出错';
                return;
            case 403:
                err.message = '拒绝访问';
                break;
            case 404:
                err.message = '请求错误,未找到该资源';
                break;
            case 500:
                err.message = '服务器端出错';
                break;
            default:
                err.message = 'error';
            }
        } else {
            err.message = '连接服务器失败';
        }
        // Message.error({
        //     message: err.message
        // });
        return Promise.reject(err);
    }
);
export default service;
