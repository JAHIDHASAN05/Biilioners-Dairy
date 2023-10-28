const loadBillionerData= async()=>{
    const url =`https://forbes400.onrender.com/api/forbes400/`
    const res = await fetch(url)
    const data=await res.json()
    displayBillonerData(data)
}

const displayBillonerData=(billioners)=>{
    const billinersContainer= document.getElementById("billioner-container")
    for (const billioner of billioners){
        const billionerDiv=document.createElement("div")
       billionerDiv.innerHTML=`
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${billioner.thumbnail}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${billioner.uri}</h5>
              <p class="card-text">${billioner.countryOfCitizenship}</p>
              <p class="card-text">${billioner.city}</p>
              <p class="card-text"> Total share: ${billioner.archivedWorth}</p>
              <p class="card-text">${billioner.financialAssets[0].sharePrice}</p>
            </div>
          </div>
        </div>
      </div>
        `
        billinersContainer.appendChild(billionerDiv)
        console.log(billioner)
    }
}

loadBillionerData()