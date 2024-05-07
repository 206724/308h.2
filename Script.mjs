//calculate total area
let TotalArea=math.round(3.1415*5*5);
let miniSpaceReq=0.8;
let firstweek=20;
//calculate max capacity
let maxCap= math.round(TotalArea/miniSpaceReq);
let x = thefirtsweek;
x=0;

//calcualte to stop prunning

if ((Math.pow(2,x)*20) > 0.8*maxCap);
{
 console.log(` it exceed the capacity of the garden`)
 
}

//monitored
elseif(math.pow(2,x)*20 > maxCap < (Math.pow(2,x)*0.8))
  {
    console.log(`growing at an accepratble rate`)
  }

 elseif (Math.pow(2,x)) < maxCap*0.5;
 
 {
    console.log(`there is room to plant more plants.`)
 }

 //part two
 //to calculate amount of space is needed 

//to calculate total space needed

let totalareadd = Math.pow(100,10) / miniSpaceReq;
console.log({totalareadd})

//if the dpace is circular the radius of this expanded

let totalareaddD = 3.1415*Math.pwr(r,2)/ Math.pow(100,10) / miniSpaceReq;
console.log ({totalareaddD})



