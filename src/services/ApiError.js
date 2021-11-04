// API Error 物件
export default function ApiError(obj) {
    this.name = '呼叫後端發生錯誤';
    let _message =
        (obj.response &&
            obj.response.data &&
            obj.response.data.message) ||
        obj.message ||
        obj.toString();
    this.message = _message;
}
// 繼承 Error 物件
ApiError.prototype = new Error();
ApiError.prototype.constructor = ApiError;
ApiError.prototype.toString = function () {
    return this.name + ': "' + this.message + '"';
}

//For debug use........................................................
export function objToString(obj) {
    var str = '';
    for (var p in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, p)) {
            str += p + '::' + obj[p] + '\n';
        }
    }
    return str;
}
