let switchRuangKeluarga = document.getElementById("switchRuangKeluarga");
let switchRuangMakan = document.getElementById("switchRuangMakan");
let switchRuangTidur = document.getElementById("switchRuangTidur");
let switchRuangTamu = document.getElementById("switchRuangTamu");
let switch1 = document.getElementById("switch1");
let switch2 = document.getElementById("switch2");
let switch3 = document.getElementById("switch3");
let switch4 = document.getElementById("switch4");
let switch5 = document.getElementById("switch5");
let switch6 = document.getElementById("switch6");
let switch7 = document.getElementById("switch7");
let switch8 = document.getElementById("switch8");
let switch9 = document.getElementById("switch9");
let switch10 = document.getElementById("switch10");

let lampu1 = document.getElementById("lampu1");
let lampu2 = document.getElementById("lampu2");
let lampu3 = document.getElementById("lampu3");
let lampu4 = document.getElementById("lampu4");
let lampu5 = document.getElementById("lampu5");
let lampu6 = document.getElementById("lampu6");
let lampu7 = document.getElementById("lampu7");
let lampu8 = document.getElementById("lampu8");
let lampu9 = document.getElementById("lampu9");
let lampu10 = document.getElementById("lampu10");

function saklar() {
  if (switchRuangKeluarga.checked == true) {
    lampu1.src = "assets/images/on.gif";
    lampu2.src = "assets/images/on.gif";
    lampu3.src = "assets/images/on.gif";
  } else {
    lampu1.src = "assets/images/off.gif";
    lampu2.src = "assets/images/off.gif";
    lampu3.src = "assets/images/off.gif";
  }

  if (switchRuangMakan.checked) {
    lampu4.src = "assets/images/on.gif";
  } else {
    lampu4.src = "assets/images/off.gif";
  }

  if (switchRuangTidur.checked) {
    lampu5.src = "assets/images/on.gif";
    lampu6.src = "assets/images/on.gif";
  } else {
    lampu5.src = "assets/images/off.gif";
    lampu6.src = "assets/images/off.gif";
  }

  if (switchRuangTamu.checked) {
    lampu7.src = "assets/images/on.gif";
    lampu8.src = "assets/images/on.gif";
    lampu9.src = "assets/images/on.gif";
    lampu10.src = "assets/images/on.gif";
  } else {
    lampu7.src = "assets/images/off.gif";
    lampu8.src = "assets/images/off.gif";
    lampu9.src = "assets/images/off.gif";
    lampu10.src = "assets/images/off.gif";
  }

  if (switch1.checked) {
    lampu1.src = "assets/images/on.gif";
  }

  if (switch2.checked) {
    lampu2.src = "assets/images/on.gif";
  }

  if (switch3.checked) {
    lampu3.src = "assets/images/on.gif";
  }

  if (switch4.checked) {
    lampu4.src = "assets/images/on.gif";
  }
  if (switch5.checked) {
    lampu5.src = "assets/images/on.gif";
  }
  if (switch6.checked) {
    lampu6.src = "assets/images/on.gif";
  }
  if (switch7.checked) {
    lampu7.src = "assets/images/on.gif";
  }
  if (switch8.checked) {
    lampu8.src = "assets/images/on.gif";
  }
  if (switch9.checked) {
    lampu9.src = "assets/images/on.gif";
  }
  if (switch10.checked) {
    lampu10.src = "assets/images/on.gif";
  }
}
