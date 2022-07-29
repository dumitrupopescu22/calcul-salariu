"use strict";

document.querySelector(".btn").addEventListener("click", function () {
  const salariuDeBaza = Number(document.querySelector(".salariu").value);
  const zile = Number(document.querySelector(".zile").value);
  const sporDeVechime = Number(document.querySelector(".spv").value);
  const tureNoapte = Number(document.querySelector(".turen").value);
  const zileWeekend = Number(document.querySelector(".week").value);
  const zileSarbatoare = Number(document.querySelector(".sarb").value);
  const deduceri = Number(document.querySelector(".deduceri").value);
  const nrTichete = Number(document.querySelector(".nrTichete").value);
  const valTichet = Number(document.querySelector(".valTichet").value);
  const sindicat = Number(document.querySelector(".sindicat").value);

  const valSporVechime = (document.querySelector(".sporv").textContent =
    Math.trunc((salariuDeBaza * sporDeVechime) / 100));
  const valTureNoapte = (document.querySelector(".tureNoapte").textContent =
    Math.trunc((salariuDeBaza / zile / 8) * 7 * tureNoapte * 0.25));
  const valZileWeekend = (document.querySelector(".zileWeekend").textContent =
    Math.trunc((salariuDeBaza / zile) * zileWeekend));
  const valZileSarbatoare = (document.querySelector(
    ".zileSarbatoare"
  ).textContent = Math.trunc((salariuDeBaza / zile) * zileSarbatoare * 2));

  const valTichete = Math.trunc(valTichet * nrTichete);
  console.log(valTichete);

  const salariuBrut =
    salariuDeBaza +
    valSporVechime +
    valZileWeekend +
    valZileSarbatoare +
    valTureNoapte;

  // CASS = 10%
  const cass = Math.trunc(salariuBrut * 0.1);
  document.querySelector(".cass").textContent = "CASS 10%: " + cass;

  // CAS = 25%
  const cas = Math.trunc(salariuBrut * 0.25);
  document.querySelector(".cas").textContent = "CAS 25%: " + cas;

  //impozit 10%
  const venitNet = salariuBrut - salariuBrut * 0.35;
  console.log(venitNet);
  const bazaImpozit = venitNet - deduceri + valTichete;
  const impozit = Math.trunc(bazaImpozit * 0.1);
  document.querySelector(".impozit").textContent = "Impozit: " + impozit;

  //Salariul net
  const salNet = venitNet - impozit;

  const avans = Math.trunc(salariuDeBaza * 0.33);
  const lichidare = salariuDeBaza - avans - sindicat;

  document.querySelector(".totalVenit").textContent =
    "Total Venit : " + salariuBrut;
  document.querySelector(".valoareTichete").textContent =
    "Valoare tichete de masa: " + Math.trunc(valTichete);
  "Total Venit :" + Math.trunc(salariuBrut);

  document.querySelector(".salariuNet").textContent =
    "Salariu net :" + Math.trunc(salNet);

  document.querySelector(".avans").textContent = "Avans: " + avans;

  document.querySelector(".chenzinaII").textContent =
    "Chenzina II: " + Math.trunc(salNet - avans - sindicat);
});
