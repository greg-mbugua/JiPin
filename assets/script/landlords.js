let county, constituency, city, streetAddress, propertyType, propertyTypeValue, size, buildingName, apartmentNo, bedrooms, bathrooms, availability, availabilityValue, landlord, contactPerson, phoneNumber, rent, deposit;



const navLogIn = document.getElementById('navLogIn');
const navSignUp = document.getElementById('navSignUp');
const logInSection = document.querySelector('.log-ins');
const container = document.querySelector('.container');
const closeButton = document.querySelector('.close-button');
const closeSignUpButton = document.querySelector('.close-sign-up-button');
const list = document.getElementById('list');
const property = document.querySelector('.property');
const logInButton = document.getElementById('log-in'); 
const signUpLink = document.getElementById('sign-up-link');
const signUpSection = document.querySelector('.sign-ups');
const signUpButton = document.getElementById('sign-up');
const logInLink = document.getElementById('log-in-link');



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
photo = document.getElementById("photo");


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
        deposit: deposit.value,
        photo: photo.value
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
    // photo.value = {};


    document.getElementById("property-listed").innerHTML = stringifyPropertyDetails();

  
};

function stringifyPropertyDetails() {
    let looped = '';
	for (let i = 0; i < propertyDetails.length; i++) {
		 looped += `<div class="display-properties" style= background-color: rgba(249, 125, 11, 0.5) > 
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

// list your property button will call the login section
list.addEventListener('click', function () {
    logInSection.style.display = 'block';
    container.style.opacity = '0.1';
    
});

// the login button will call the property details section
logInButton.addEventListener('click', function () {
    logInSection.style.display = 'none';
    container.style.opacity = '1';
    property.style.display = 'block';
});


// the navigation login button will call the login section
navLogIn.addEventListener('click', function () {
    logInSection.style.display = 'block';
    container.style.opacity = '0.1';
    
});

//the close button closes the login section .
closeButton.addEventListener('click', function () {
    logInSection.style.display = 'none';
    container.style.opacity = '1';
    
});

// call up sign up section
signUpLink.addEventListener('click', function () {
    logInSection.style.display = 'none';
    signUpSection.style.display = 'block';
    container.style.opacity = '0.1';

});

// nav sign up will call up sign up section
navSignUp.addEventListener('click', function () {
    signUpSection.style.display = 'block';
    container.style.opacity = '0.1';
    
});
//the close button closes the sign up section .
closeSignUpButton.addEventListener('click', function () {
    signUpSection.style.display = 'none';
    container.style.opacity = '1';
    
});
// the sign up button will call the sign up section
signUpButton.addEventListener('click', function () {
    signUpSection.style.display = 'none';
    container.style.opacity = '1';
    // property.style.display = 'block';

});
//the log in link will call the login section
logInLink.addEventListener('click', function () {
    logInSection.style.display = 'block';
    signUpSection.style.display = 'none';
    
});






























// document.getElementById("button").addEventListener("click", function(){
//     document.getElementById("popup").style.display = "flex";
// })

// document.getElementById("close").addEventListener("click", function(){
//     document.getElementById("popup").style.diplay = "none";
// })