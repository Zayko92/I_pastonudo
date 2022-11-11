function convertMlToOz(millilitri) {
    return (millilitri/29.574).toFixed(2);
}
function ottieniFrazioneOz(oz) {
    let intero = Math.floor(oz);
    let numeratore = Math.round((oz - Math.floor(oz))/0.25);
    if(numeratore > 0) 
        if(numeratore != 2) 
            return intero + " " + numeratore + "/4";
        else 
            return intero + " " + "1/2";
        
    else 
        return intero + "";
    
}
function convertOzToMl(once) {
    return (once*29.574).toFixed(2);
}

function convertOzToMl(frazione) {
    let frazioneSplitata = frazione.split("/");
    return convertOzToMl(frazioneSplitata[0]/frazioneSplitata[1]);
}
