const url = new URL(window.location.href);
alert(url);
const data = url.searchParams.get("data");

if (data) {
    var stringifiedObject = decodeURI(data);
    var object = JSON.parse(stringifiedObject);
}  