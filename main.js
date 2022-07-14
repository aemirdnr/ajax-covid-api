let covidContainer = document.getElementById("covid__container")

$.ajax({
    type: "GET",
    url: "https://api.covid19api.com/summary",
    dataType: "json",
    success: function(data){
        data.Countries.forEach(country => {
            let countryName = country.Country
            let newConfirmed = country.NewConfirmed
            let totalConfirmed = country.TotalConfirmed
            let totalDeaths = country.TotalDeaths
            let date = country.Date

            covidContainer.innerHTML += `
            <div id="covid__box" class="col-12 col-md-5 col-lg-3 d-flex flex-column bg-light text-dark shadow-lg rounded-3 p-3">
                <h6 class="m-0"><b id="country">${countryName}</b></h6>
                <hr style="border-top: 1px solid; opacity: 1;">
                <div class="d-flex flex-column gap-2">
                    <label>New Confirmed: <span>${newConfirmed}</span></label>
                    <label>Total Confirmed: <span>${totalConfirmed}</span></label>
                    <label>Total Deaths: <span>${totalDeaths}</span></label>
                    <label>Date: <span>${date}</span></label>
                </div>
            </div>
            `
        })
    },
    error: function(err) {
        alert("There is an error: " + err.status + " " + err.statusText);
    }
})