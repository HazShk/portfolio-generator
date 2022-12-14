/* capture command line arguments
var commandLineArgs = process.argv;
console.log(commandLineArgs);
*/

//remove the first two indexes from the process.argv
const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    //this
    for ( let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('================');
    
    //can also be written as this
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);