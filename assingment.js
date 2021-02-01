//https://github.com/MD-Alamain/assingment.js/blob/main/assingment.js

//kilometerToMeter

function kilometerToMeter(kilometer){ 

if (kilometer < 0 || number .isNaN(kilometer))

return "Distance can't be negative or NaN.";

//1km=1000m

return kilometer * 1000; 

}

//budgetCalculator

function budgetCalculator (watchCount, phoneCount, laptopCount){
    if (watchCount <0 || phoneCount < 0 || laptopCount < 0)
    return " product can't be negative.";

//procut  price
 var watchPrice = 50;
 var phonePrice = 100;
 var laptopPrice = 500;
 
 //total product price

 var watchTotalPrice = watchCount * watchPrice;
 var phoneTotalPrice = phoneCount * phonePrice;
 var laptopTotalPrice = laptopCount * laptopPrice;

 return watchTotalPrice + phoneTotalPrice + laptopTotalPrice;

}
 
//hotelCost
 function hotelCost (dayCount){
     if (dayCount < 0 || dayCount.isNaN)
     return "ERROR - dayCount can't be negative or NaN."

     var baseFare = 100;
     var totalCost =0;
     
     if ( dayCount <=10){
     totalCost = dayCount * baseFare;
    }

 else if (dayCount <=20){
     var tenDayscost = 10 * baseFare;
     var remainingDays = dayCount - 10;
     var remainingDaysCost = remainingDays * ( baseFare - 20);
     totalCost = tenDayscost + remainingDaysCost;

 }
  else {
    var tenDayscost = 10 * baseFare;
    var twentyDayscost = 20 * (baseFare - 20);
    var remainingDays = dayCount - 20;
    var remainingDaysCost = remainingDays * ( baseFare - 50);
    totalCost = tenDayscost + twentyDayscost + remainingDays ;

  }
  return totalCost;
 }
 //mega Friend

 function megaFriend (friends){
     if (friends.length <=0)
     return "ERROR- Empty Array"\

     var largestName = "";
     for (var i = 0; i < friends.length; i++) { 
         if (friends[i].length > largestName.length) {
             largestName = friends[i];
          }
     }
     return largestName;
 }
 









