'use strict';

document.querySelector('.btn').addEventListener('click', function () {
  const salariuDeBaza = Number(document.querySelector('.salariu').value);
  const zile = Number(document.querySelector('.zile').value);
  const sporDeVechime = Number(document.querySelector('.spv').value);
  const tureNoapte = Number(document.querySelector('.turen').value);
  const zileWeekend = Number(document.querySelector('.week').value);
  const zileSarbatoare = Number(document.querySelector('.sarb').value);
  const deduceri = Number(document.querySelector('.deduceri').value);
  const nrTichete = Number(document.querySelector('.nrTichete').value);
  const valTichet = Number(document.querySelector('.valTichet').value);
  const sindicat = Number(document.querySelector('.sindicat').value);

  const valSporVechime = (document.querySelector('.sporv').textContent =
    Math.trunc((salariuDeBaza * sporDeVechime) / 100));
  const valTureNoapte = (document.querySelector('.tureNoapte').textContent =
    Math.trunc((salariuDeBaza / zile / 8) * 7 * tureNoapte * 0.25));
  const valZileWeekend = (document.querySelector('.zileWeekend').textContent =
    Math.trunc((salariuDeBaza / zile) * zileWeekend));
  const valZileSarbatoare = (document.querySelector(
    '.zileSarbatoare'
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
  document.querySelector('.cass').textContent = 'CASS 10%: ' + cass;

  // CAS = 25%
  const cas = Math.trunc(salariuBrut * 0.25);
  document.querySelector('.cas').textContent = 'CAS 25%: ' + cas;

  //impozit 10%
  const venitNet = salariuBrut - salariuBrut * 0.35;
  console.log(venitNet);
  const bazaImpozit = venitNet - deduceri + valTichete;
  const impozit = Math.trunc(bazaImpozit * 0.1);
  document.querySelector('.impozit').textContent = 'Impozit: ' + impozit;

  //Salariul net
  const salNet = venitNet - impozit;

  const avans = Math.trunc(salariuDeBaza * 0.33);
  const lichidare = salariuDeBaza - avans - sindicat;

  document.querySelector('.totalVenit').textContent =
    'Total Venit : ' + salariuBrut;
  document.querySelector('.valoareTichete').textContent =
    'Valoare tichete de masa: ' + Math.trunc(valTichete);
  'Total Venit :' + Math.trunc(salariuBrut);

  document.querySelector('.salariuNet').textContent =
    'Salariu net :' + Math.trunc(salNet);

  document.querySelector('.avans').textContent = 'Avans: ' + avans;

  document.querySelector('.chenzinaII').textContent =
    'Chenzina II: ' + Math.trunc(salNet - avans - sindicat);
});

//ferestre mdale
const modal1 = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const btndescriereSalariu = document.querySelector('.descriereSalariu');
const btnDeduceri = document.querySelector('.descriere-deduceri');
const btnNrTichete = document.querySelector('.descriereNrTichete');
const closeModalBtn1 = document.querySelector('.closeBtn1');
const closeModalBtn2 = document.querySelector('.closeBtn2');
const closeModalBtn3 = document.querySelector('.closeBtn3');
const overlay = document.querySelector('.overlay');

console.log(closeModalBtn1, closeModalBtn2, closeModalBtn3);
console.log(modal1, modal2, modal3);

btndescriereSalariu.addEventListener('click', function () {
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnDeduceri.addEventListener('click', function () {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnNrTichete.addEventListener('click', function () {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeModalBtn1.addEventListener('click', function () {
  modal1.classList.add('hidden');
  overlay.classList.add('hidden');
});
closeModalBtn2.addEventListener('click', function () {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
});
closeModalBtn3.addEventListener('click', function () {
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  overlay.classList.add('hidden');
  modal1.classList.add('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden');
});
