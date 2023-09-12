const aCar = {
    owner : "Joe Bloggs",
    type : {
        make: "toyota",
        model:"corolla",
        cc:"1.8"

    },
    previous_owners: [
        { name: "Pat Smith", address: "1 Main Street" },
        { name: "Sheila Dwyer", address: "2 High Street" }
      ],
   
    registration : {
        year: "201",
        countycode: "WD",
        number:"1058"
    }
  };

  aCar.milage = 10000
  aCar.color = {
    exterior: "red",
    interior: { texture: "leather", shade: "cream" }
  }

  for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
}

for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i].name);
}
  
  //console.log(aCar.owner);
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log("reg = "+aCar.registration.year + "-"+aCar.registration.countycode+"-"+aCar.registration.number)
  console.log("It is a " +      aCar.color.exterior + " car, " + aCar.milage +" milage, with " +aCar.color.interior.texture +
      " interior."
  );

  console.log('First owner : ' + aCar.previous_owners[0] )