function binaryCalc() {
  let decimal = $("#dec1").val();
  if (decimal === "") {
    $(".showDec").text(0);
    $(".showBin").text(0);
  } else {
    decimal = parseInt(decimal);
    let binary = decimal.toString(2);
    let base = `(${decimal})10`;
    let bin = `(${binary})2`;
    $(".showDec").text(base);
    $(".showBin").text(bin);
  }
}
function octalCalc() {
  let decimal = $("#dec2").val();
  if (decimal === "") {
    $(".showDec2").text(0);
    $(".showOct").text(0);
  } else {
    decimal = parseInt(decimal);
    let oct = decimal.toString(8);
    let base = `(${decimal})10`;
    let bin = `(${oct})8`;
    $(".showDec2").text(base);
    $(".showOct").text(bin);
  }
}
function hexaCalc() {
  let hex = $("#dec3").val();
  if (hex === "") {
    $(".showDec3").text(0);
    $(".showHex").text(0);
  } else {
    hex = parseInt(hex);
    let hexD = hex.toString(16).toUpperCase();
    let base = `(${hex}) 10`;
    let bin = `(${hexD}) 16`;
    $(".showDec3").text(base);
    $(".showHex").text(bin);
  }
}

