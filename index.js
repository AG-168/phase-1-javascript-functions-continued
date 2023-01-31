function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = `go to the office`) {
    return `This Monday, I will ${activity}.`
}



function wrapAdjective(adj = `*`) {
   return function (adj2) {
    return `You are ${adj}${adj2}${adj}!`
   }
}