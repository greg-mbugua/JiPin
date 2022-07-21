let county, constituency, city, streetAddress, propertyType, propertyTypeValue, size, buildingName, apartmentNo, bedrooms, bathrooms, availability, availabilityValue, landlord, contactPerson, phoneNumber, rent, deposit;
const navLogIn = document.getElementById('navLogIn');
const navSignUp = document.getElementById('navSignUp');


const logInSection = document.querySelector('.log-ins');
const container = document.querySelector('.container');


county = document.getElementById("county");
constituency = document.getElementById("constituency");
city = document.getElementById("city");
streetAddress = document.getElementById("streetAddress");
propertyType = document.getElementById("propertyType");
propertyTypeValue = propertyType.options[propertyType.selectedIndex].value;
size = document.getElementById("size");
buildingName = document.getElementById("buildingName");
apartmentNo = document.getElementById("apartmentNo");
bedrooms = document.getElementById("bedrooms");
bathrooms = document.getElementById("bathrooms");
availability = document.getElementById("availability");
availabilityValue = availability.options[availability.selectedIndex].value;
landlord = document.getElementById("landlord");
contactPerson = document.getElementById("contactPerson");
phoneNumber = document.getElementById("phoneNumber");
rent = document.getElementById("rent");
deposit = document.getElementById("deposit");


propertyDetails = [];

function addProperty() {
    propertyDetails.push({
        county: county.value,
        constituency: constituency.value,
        city: city.value,
        streetAddress: streetAddress.value,
        propertyType: propertyTypeValue,
        size: size.value,
        buildingName: buildingName.value,
        apartmentNo: apartmentNo.value,
        bedrooms: bedrooms.value,
        bathrooms: bathrooms.value,
        availability: availabilityValue,
        landlord: landlord.value,
        contactPerson: contactPerson.value,
        phoneNumber: phoneNumber.value,
        rent: rent.value,
        deposit: deposit.value
    });
    county.value = '';
    constituency.value = '';
    city.value = '';
    streetAddress.value = '';
    propertyType.value = '';
    size.value = '';
    buildingName.value = '';
    apartmentNo.value = '';
    bedrooms.value = '';
    bathrooms.value = '';
    availability.value = '';
    landlord.value = '';
    contactPerson.value = '';
    phoneNumber.value = '';
    rent.value = '';
    deposit.value = '';


    document.getElementById("property-listed").innerHTML = stringifyPropertyDetails();

  
};

function stringifyPropertyDetails() {
    let looped = '';
	for (let i = 0; i < propertyDetails.length; i++) {
		 looped += `<div class="display-properties"> 
                        <div>
                        <p> Property listing 1 :</p>
                        </div>
                        <div> 
                            <p> County : ${propertyDetails[i].county} </p>
                            <p>City : ${propertyDetails[i].city} </p>
                            <p>Property Type : ${propertyDetails[i].propertyType} </p>
                            <p>Building name : ${propertyDetails[i].buildingName} </p>
                            <p>Number of bedrooms : ${propertyDetails[i].bedrooms} </p>
                            <p>Availability : ${propertyDetails[i].availability} </p>
                            <p>Contact person : ${propertyDetails[i].contactPerson} </p>
                            <p>Rent : Ksh. ${propertyDetails[i].rent} </p>
        
                        </div>

                        <div>
                            <p>Constituency : ${propertyDetails[i].constituency} </p>
                            <p>Street Address : ${propertyDetails[i].streetAddress} </p>
                            <p>Apartment size : ${propertyDetails[i].size} </p>
                            <p>Apartment Number : ${propertyDetails[i].apartmentNo} </p>
                            <p>Number of bathrooms : ${propertyDetails[i].bathrooms} </p>
                            <p>Landlord name : ${propertyDetails[i].landlord} </p>
                            <p>Phone number : ${propertyDetails[i].phoneNumber} </p>
                            <p>Deposit : Ksh. ${propertyDetails[i].deposit} </p>

                        </div>
                    </div>`
	};
	return looped;
}


navLogIn.addEventListener('click', function () {
    logInSection.style.display = 'block';
    // container.style.position = 'fixed';
    container.style.opacity = '0.1';
    
});



// var btn = document.getElementById("button");
// var closeBtn = document.querySelector(".close");
// var popupId = document.getElementById("popup");
// btn.addEventListener("click", function(){ 
//    popupId.style.display = "flex";
// }) 
// closeBtn.addEventListener("click", function(){
//    popupId.style.display = "none";
// })

























// document.getElementById("button").addEventListener("click", function(){
//     document.getElementById("popup").style.display = "flex";
// })

// document.getElementById("close").addEventListener("click", function(){
//     document.getElementById("popup").style.diplay = "none";
// })