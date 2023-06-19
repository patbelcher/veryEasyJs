//start with a regex expression
const regex = /\b\d{2}:\d{2}\b(?!\d)/;

//find the time in the following string using regex
const str = "Breakfast at 09:00 in the room 123:456";
const match = str.match( /\b\d{2}:\d{2}\b(?!\d)/);

if(match) {
    console.log(match[0]);
} else {
    console.log("No time found");
}

//I know how to query chat gpt to get the correct code
//and even a less heavier code