function calculator2(){
    let n1=Number(document.getElementById("n1").value);
    let n2=Number(document.getElementById("n2").value);

    let sum1=n1+n2;
    let diff1=n1-n2;

    document.getElementById("showSum").textContent=sum1;
    document.getElementById("showDiff").textContent=diff1;
}