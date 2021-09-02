let parkingState = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
];

const state = {occupiedSlots:0, availableSlots:0, totalSlots:0}

function getParkingLotState(data){
    
    for (let i=0; i < data.length; i++){

        for (let a = 0; a < data[i].length; a++){
            
            if (data[i][a] === 1){
                state.occupiedSlots++;

            } else if (data[i][a] === 2) {
                state.availableSlots++;
            }

        }
    
    }

    state.totalSlots = state.occupiedSlots + state.availableSlots;

    return state;
}

console.log(getParkingLotState(parkingState));