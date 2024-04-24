setInterval(() => {
  let pcities = document.querySelector("#Paris");
  let pdateforcities = pcities.querySelector("#current-date");
  let ptimeforcities = pcities.querySelector("#current-time");
  let pampmforcities = document.querySelector("small");

  pdate = moment().tz("Europe/Paris");
  pdateforcities.innerHTML = pdate.format("dddd Do MMMM[,] YYYY");
  ptimeforcities.innerHTML = pdate.format("h[:]mm[:]ss");
  pampmforcities.innerHTML = pdate.format("A");
}, 1000);

setInterval(() => {
  let kccities = document.querySelector("#Kampala");
  let kcdateforcities = kccities.querySelector("#current-date");
  let kctimeforcities = kccities.querySelector("#current-time");
  let kcampmforcities = document.querySelector("small");

  kcdate = moment().tz("Africa/Kampala");
  kcdateforcities.innerHTML = kcdate.format("dddd Do MMMM[,] YYYY");
  kctimeforcities.innerHTML = kcdate.format("h[:]mm[:]ss");
  kcampmforcities.innerHTML = kcdate.format("A");
}, 1000);

setInterval(() => {
  let mccities = document.querySelector("#Mexico-city");
  let mcdateforcities = mccities.querySelector("#current-date");
  let mctimeforcities = mccities.querySelector("#current-time");
  let mcampmforcities = document.querySelector("small");

  mcdate = moment().tz("America/Mexico_City");
  mcdateforcities.innerHTML = mcdate.format("dddd Do MMMM[,] YYYY");
  mctimeforcities.innerHTML = mcdate.format("h[:]mm[:]ss");
  mcampmforcities.innerHTML = mcdate.format("A");
}, 1000);

setInterval(() => {
  let nycities = document.querySelector("#New-york");
  let dateforcities = nycities.querySelector("#current-date");
  let timeforcities = nycities.querySelector("#current-time");
  let ampmforcities = document.querySelector("small");

  nydate = moment().tz("America/New_York");
  dateforcities.innerHTML = nydate.format("dddd Do MMMM[,] YYYY");
  timeforcities.innerHTML = nydate.format("h[:]mm[:]ss");
  ampmforcities.innerHTML = nydate.format("A");
}, 1000);
