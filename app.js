var a=89;
 

function m1()
{
   // var a=1;
    a=11;
    console.log(a);

    var a;
}


function m2()
{
    //var a=2;
    console.log(a);
}

const desert = { name: 'abc' };
//desert = { name: 'dddd' };
desert.name='sss';

document.write(desert.name);

const empArr=[1,3,2,4,5];
for (let index = 0; index < empArr.length; index++) {
   // const element = empArr[index];
//alert(empArr[index]);
    // setTimeout(() => {
    //     //console.log(empArr[index]);
    //     alert(empArr[index]);
    // }, 5000);


    setInterval(() => {
        console.log(empArr[index]);
    }, 5000);
    //set
    
}