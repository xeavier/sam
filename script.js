const container = document.querySelector('.container');
let selectSeats = [];
let filteredseats = [];
let header = document.getElementById('message')
var firstResult = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'A10',
    'A11',
    'A12'
  ];
  var secondResult = [
    'B1',
    'B2',
    'B3',
    'B4',
    'B5',
    'B6',
    'B7',
    'B8',
    'B9',
    'B10',
    'B11',
    'B12'
  ];
  var thirdResult = [
    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8',
    'C9',
    'C10',
    'C11',
    'C12'
  ];
  var fourthResult = [
    'D1',
    'D2',
    'D3',
    'D4',
    'D5',
    'D6',
    'D7',
    'D8',
    'D9',
    'D10',
    'D11',
    'D12'
  ];
  var fivthResult = [
    'E1',
    'E2',
    'E3',
    'E4',
    'E5',
    'E6',
    'E7',
    'E8',
    'E9',
    'E10',
    'E11',
    'E12'
  ];
  var sixthResult = [
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'F10',
    'F11',
    'F12'
  ];
  var textTable_1 = document.getElementById("first_row");
  var textTable_2 = document.getElementById("second_row");
  var textTable_3 = document.getElementById("third_row");
  var textTable_4 = document.getElementById("fourth_row");
  var textTable_5 = document.getElementById("fivth_row");
  var textTable_6 = document.getElementById("sixth_row");
  var nHTML_1 = '';
  var nHTML_2 = '';
  var nHTML_3 = '';
  var nHTML_4 = '';
  var nHTML_5 = '';
  var nHTML_6 = '';
  for (var i = 0; i < firstResult.length; i++) {
     nHTML_1 += `<div class="seat" id=${firstResult[i]} onClick="selected(this.id)"> ${firstResult[i].toString().replace(/,/g, ' ') }</div>`;
  }
  for (var i = 0; i < secondResult.length; i++) {
    nHTML_2 += `<div class="seat" id=${secondResult[i]} onClick="selected(this.id)"> ${secondResult[i].toString().replace(/,/g, ' ')}</div>`;
 }
 for (var i = 0; i < thirdResult.length; i++) {
  nHTML_3 += `<div class="seat" id=${thirdResult[i]} onClick="selected(this.id)"> ${thirdResult[i].toString().replace(/,/g, ' ') }</div>`;
}
for (var i = 0; i < fourthResult.length; i++) {
 nHTML_4 += `<div class="seat" id=${fourthResult[i]} onClick="selected(this.id)"> ${fourthResult[i].toString().replace(/,/g, ' ')} </div>`;
}
for (var i = 0; i < fivthResult.length; i++) {
  nHTML_5 += `<div class="seat" id=${fivthResult[i]} onClick="selected(this.id)"> ${fivthResult[i].toString().replace(/,/g, ' ') }</div>`;
}
for (var i = 0; i < sixthResult.length; i++) {
 nHTML_6 += `<div class="seat" id=${sixthResult[i]} onClick="selected(this.id)"> ${sixthResult[i].toString().replace(/,/g, ' ')} </div>`;
}
  textTable_1.innerHTML = nHTML_1;
  textTable_2.innerHTML = nHTML_2;
  textTable_3.innerHTML = nHTML_3;
  textTable_4.innerHTML = nHTML_4;
  textTable_5.innerHTML = nHTML_5;
  textTable_6.innerHTML = nHTML_6;

function pageReload() {
    location.reload();
}

function updateSelectedCount() {
  
 const selectedSeats = document.querySelectorAll('.row .seat.selected');
  

//

  const selectedSeatsCount = selectedSeats.length;

  

  count.innerText = selectedSeatsCount;
  // total.innerText = selectedSeatsCount;
  
  
}

//

container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
//
function selected(clicked_id)
  { 
    let isexit = selectSeats.find(c => c !== clicked_id)
    selectSeats.push(clicked_id)
    // let isexit = selectedSeats.find(c => c.v === clicked_id)
    // if (isexit) {
    //     console.log('t');
    //     let s = selectedSeats.find(c => c.v === clicked_id)
    //     s.count += 1;
    //     console.log(s);
    // }
    // let chars = selectedSeats;
    // let uniqueChars = [];
    // chars.forEach((c) => {
    //     if (!uniqueChars.includes(c)) {
    //         uniqueChars.push(c);
    //     }
    // });
    // selectedSeats = uniqueChars;
    // if(selectedSeats.find(el => el === clicked_id)){
    //     // selectedSeats.filter(el => el !== clicked_id)
    //     console.log('s');
    // }
    // if(selectedSeats.includes(clicked_id)){
    //      for( var i = 0; i < selectedSeats.length; i++){ 
    
    //         if ( selectedSeats[i] === clicked_id) { 
        
    //             selectedSeats.splice(i, 1); 
    //         }
        
    //      }
    //     //console.log('t');
    //     }
//     selectedSeats.forEach(myFunction);
 
// function myFunction(item, i) {
//   if(item.count > 0){
//     console.log('d');
//     //selectedSeats.filter(el => el !== item)
//     selectedSeats.splice(i, 1);
//   } 
// }
    // for (var i = 0; i < selectedSeats.length; i++) {

    //     if (selectedSeats[i] === clicked_id) {
    //         console.log('t');
    //         selectedSeats.splice(i, 1);
    //     }

    //     if (isexit && selectedSeats[i] === clicked_id) {
    //         console.log('t');
    //         selectedSeats.splice(i, 1);
    //     }

    // }
    let r = selectSeats
    console.log(selectSeats);
    header.innerHTML = !selectSeats.length?"Select seats": `Selected seats = ${r}`;
    // console.log(selectedSeats)
    //  selectedSeats.push(clicked_id)
    //  header.textContent = selectedSeats
      
      
  }




