const aCar = {
    owner : "Joe Bloggs",
    type : {
        make: "toyota",
        model:"corolla",
        cc:"1.8"

    }
    
   ,
    registration : {
        year: "201",
        countycode: "WD",
        number:"1058"
    }
  };

  aCar.milage = 10000
  aCar.color = {
exterior:"red",
interiorFabric: "leather",
shade: "cream"
  }
  
  //console.log(aCar.owner);
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log("reg = "+aCar.registration.year + "-"+aCar.registration.countycode+"-"+aCar.registration.number)