setInterval(() => {
  let pcities = document.querySelector("#Paris");
  let pdateforcities = pcities.querySelector("#current-date");
  let ptimeforcities = pcities.querySelector("#current-time");

  pdate = moment().tz("Europe/Paris");
  pdateforcities.innerHTML = pdate.format("dddd Do MMMM[,] YYYY");
  ptimeforcities.innerHTML = pdate.format("h[:]mm[:]ss");
}, 1000);

setInterval(() => {
  let kccities = document.querySelector("#Kampala");
  let kcdateforcities = kccities.querySelector("#current-date");
  let kctimeforcities = kccities.querySelector("#current-time");

  kcdate = moment().tz("Africa/Kampala");
  kcdateforcities.innerHTML = kcdate.format("dddd Do MMMM[,] YYYY");
  kctimeforcities.innerHTML = kcdate.format("h[:]mm[:]ss");
}, 1000);

setInterval(() => {
  let mccities = document.querySelector("#Mexico-city");
  let mcdateforcities = mccities.querySelector("#current-date");
  let mctimeforcities = mccities.querySelector("#current-time");

  mcdate = moment().tz("America/Mexico_City");
  mcdateforcities.innerHTML = mcdate.format("dddd Do MMMM[,] YYYY");
  mctimeforcities.innerHTML = mcdate.format("h[:]mm[:]ss");
}, 1000);

setInterval(() => {
  let nycities = document.querySelector("#New-york");
  let dateforcities = nycities.querySelector("#current-date");
  let timeforcities = nycities.querySelector("#current-time");

  nydate = moment().tz("America/New_York");
  dateforcities.innerHTML = nydate.format("dddd Do MMMM[,] YYYY");
  timeforcities.innerHTML = nydate.format("h[:]mm[:]ss");
}, 1000);

let citySelector = document.querySelector("#select-cities");
citySelector.addEventListener("change", updateCitydata);

function updateCitydata(event) {
  let citytimezone = event.target.value;
  if (citytimezone === "local/timezone") {
    let citytime = moment.tz.guess();
  }

  let citytime = moment().tz(citytimezone);
  let section = document.querySelector("#cities");
  section.innerHTML = `<div class="cities-time" id="New-york">
            <div>
              <h2 id="city-name">${event.target.value}</h2>
              <span class="day" id="current-date">${citytime.format(
                "dddd MMMM Do YYYY"
              )}</span>
            </div>
            <div class="time" id="current-time">${citytime.format(
              "h[:] mm[:] ss"
            )}</div>
          </div>`;
}

setInterval(updateCitydata, 1000);
