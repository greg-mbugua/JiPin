let county, constituency, city, streetAddress, propertyType, propertyTypeValue, size, buildingName, apartmentNo, bedrooms, bathrooms, availability, availabilityValue, landlord, contactPerson, contactPhoneNumber, rent, deposit;


county = document.getElementById("county");
constituency = document.getElementById("constituency");
city = document.getElementById("city");
streetAddress = document.getElementById("streetAddress");
propertyType = document.getElementById("propertyType");
propertyTypeValue = select.options[select.selectedIndex].value;
size = document.getElementById("size");
buildingName = document.getElementById("buildingName");
apartmentNo = document.getElementById("apartmentNo");
bedrooms = document.getElementById("bedrooms");
bathrooms = document.getElementById("bathrooms");
availability = document.getElementById("availability");
availabilityValue = select.options[select.selectedIndex].value;
landlord = document.getElementById("landlord");
contactPerson = document.getElementById("contactPerson");
contactPhoneNumber = document.getElementById("contactPhoneNumber");
rent = document.getElementById("rent");
deposit = document.getElementById("deposit");


propertyDetails = []

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
        contactPhoneNumber: contactPhoneNumber.value,
        rent: rent.value,
        deposit: deposit.value
    })
    console.log(propertyDetails)
}


























document.getElementById("button").addEventListener("click", function(){
    document.getElementById("popup").style.display = "flex";
})

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("popup").style.diplay = "none";
})