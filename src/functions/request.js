import axios from "axios"
import {toast} from "react-toastify"

function get({url, param = "", dontToast, dontCache})
{
    const token = null
    return axios.get(process.env.REACT_APP_REST_URL + "/" + url + "/" + param, {headers: token ? {"Authorization": `${token}`} : null})
        .then((res) =>
        {
            !dontCache && localStorage.setItem(url + "/" + param, JSON.stringify(res.data))
            return res.data
        })
        .catch((err) =>
        {
            console.log(" %cERROR ", "color: orange; font-size:12px; font-family: 'Helvetica',consolas,sans-serif; font-weight:900;", err.response)
            if (err.message === "Network Error" && !dontCache)
            {
                const cacheData = localStorage.getItem(url + "/" + param)
                if (cacheData)
                {
                    toast.error("عدم دسترسی به اینترنت، بارگزاری آفلاین...", {toastId: "loading_offline"})
                    return JSON.parse(cacheData)
                }
                else
                {
                    if (err?.response?.status !== 404 && !dontToast) toast.error("برنامه در گرفتن اطلاعات با خطا مواجه شد!", {toastId: "getting_err"})
                    throw err
                }
            }
            else
            {
                if (!dontToast)
                {
                    if (err?.response?.status === 429) toast.error("شما در یک ساعت اخیر بیشتر از حدّ مجاز درخواست فرستاده‌اید", {toastId: "getting_err_limited"})
                    else if (err?.response?.status !== 404) toast.error("برنامه در گرفتن اطلاعات با خطا مواجه شد!", {toastId: "getting_err"})
                }
                throw err
            }
        })
}

function post({url, data, param = "", progress, noToken})
{
    const token = null
    return axios.post(process.env.REACT_APP_REST_URL + "/" + url + "/" + param, data, {
        headers: token && !noToken ? {"Authorization": `${token}`} : null,
        onUploadProgress: e => progress ? progress(e) : null,
    })
        .then((res) => res.data)
        .catch((err) =>
        {
            console.log(" %cERROR ", "color: orange; font-size:12px; font-family: 'Helvetica',consolas,sans-serif; font-weight:900;", err.response)
            throw err
        })
}

function put({url, data, headers = {}, progress})
{
    const token = null
    return axios.put(encodeURI(url), data, {
        headers: {"Authorization": `${token}`, ...headers},
        onUploadProgress: e => progress ? progress(e) : null,
    })
        .then((res) => res.data)
        .catch((err) =>
        {
            console.log(" %cERROR ", "color: orange; font-size:12px; font-family: 'Helvetica',consolas,sans-serif; font-weight:900;", err.response)
            throw err
        })
}

function patch({url, data, param = "", progress})
{
    const token = null
    return axios.patch(process.env.REACT_APP_REST_URL + "/" + url + "/" + param, data, {
        headers: {"Authorization": `${token}`},
        onUploadProgress: e => progress ? progress(e) : null,
    })
        .then((res) => res.data)
        .catch((err) =>
        {
            console.log(" %cERROR ", "color: orange; font-size:12px; font-family: 'Helvetica',consolas,sans-serif; font-weight:900;", err.response)
            throw err
        })
}

function del({url, data, param = ""})
{
    const token = null
    return axios.delete(process.env.REACT_APP_REST_URL + "/" + url + "/" + param, {headers: {"Authorization": `${token}`}, data})
        .then((res) => res.data)
        .catch((err) =>
        {
            console.log(" %cERROR ", "color: orange; font-size:12px; font-family: 'Helvetica',consolas,sans-serif; font-weight:900;", err.response)
            throw err
        })
}

const request = {
    get, post, patch, put, del,
}

export default request