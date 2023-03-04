// function findMatching(nameArray,randomString){
//     const newArray = [];
//     for(const name of nameArray){
//         if(name.toLowerCase()==randomString.toLowerCase()){
//             newArray.push(name);
//         }
//     }
//     return newArray;
// }
function findMatching(nameArray,randomString){
    const filterCall = nameArray.filter(element => {
       const test = element.toLowerCase()===randomString.toLowerCase()
        return test;
    });
    return filterCall;
}

function fuzzyMatch(nameArray,charString){
    const copiedArray = [...nameArray];
            //console.log('Copied Array:' + copiedArray);
        const driverSpecificList = [];   
        let i = 0; 
        for(const driverName of copiedArray){
            let pullName = copiedArray[i];
                //console.log(pullName);
            const newNameArray = [...pullName];
                //console.log(newNameArray);
                //console.log(newNameArray[0]+newNameArray [1]);
            if(newNameArray[0]+newNameArray[1]===charString){
               driverSpecificList.push(driverName);     
            }
            i++;
            //console.log(i);
        }   
        //console.log(driverSpecificList);
        return driverSpecificList;
    }
    
    function matchName(nameArray,randomString){
        const filterCall = nameArray.filter(element => {
           return element.name===randomString
        });
        return filterCall;
    }