function convertMlToOz(millilitri) {
    return (millilitri/29.574).toFixed(2);
}
function convertOzToMl(once) {
    return (once*29.574).toFixed(2);
}

function convertOzToMl(frazione) {
    let frazioneSplitata = frazione.split("/")
    return convertOzToMl(frazioneSplitata[0]/frazioneSplitata[1]);
}
