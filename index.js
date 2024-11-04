let startGame = confirm("Yanacaq doldurmaya xos gelmisiniz");

if (startGame) {
  let q1 = confirm("Yanacaq novunu secin");
  if (q1) {
    let oil = prompt("benzin yoxsa dizel?");
    if (oil == "dizel") {
      alert("Dizelin litri 1 manatdir.");
    } else if (oil == "benzin") {
      let oilType = prompt("92 yoxsa 95?");
      if (oilType == "92") {
        alert("92 benzinin litri 1.20 azndir");
      } else if (oilType == "95") {
        alert("95 benzinin litri 1.50 azndir");
      } else {
        alert("Bele benzin yoxdur");
      }
    } else {
      let electric = confirm(
        "Elektrikli sarj aletinden istifade etmek isteyirsiniz?"
      );
      if (electric) {
        alert("Zehmet olmasa sarj aletine yaxinlasin. Odenis pulsuzdur.");
      } else {
        alert("Zehmet olmasa yeniden cehd edin.");
      }
    }
  } else {
    alert("Hal-hazirda basqa xidmetimiz yoxdur.");
  }
} else {
  alert("Basqa vaxt gozleyirik");
}
