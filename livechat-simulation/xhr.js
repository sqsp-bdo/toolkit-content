var complete = 0;

var oReq1 = new XMLHttpRequest();
oReq1.addEventListener("load", () => {
    console.log(this);
    complete++;
});
oReq1.open("GET", "./data-10kb.json");
oReq1.send();

var oReq2 = new XMLHttpRequest();
oReq2.addEventListener("load", () => {
    console.log(this);
    complete++;
});
oReq2.open("GET", "./data-10kb.json");
oReq2.send();

var oReq3 = new XMLHttpRequest();
oReq3.addEventListener("load", () => {
    console.log(this);
    complete++;
});
oReq3.open("GET", "./data-55kb.json");
oReq3.send();

setInterval(function(){ 
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", () => {
        console.log(this);
    });
    oReq.open("GET", "./data-10kb.json");
    oReq.send();
}, 3000);