var buttonElement = document.getElementById("btn");

function calcvolume (){
    var inputComp = parseFloat(document.getElementById("comp").value);
    var inputLarg = parseFloat(document.getElementById("larg").value);
    var inputAlt = parseFloat(document.getElementById("alt").value);

    var volume = inputAlt * inputLarg * inputComp
    
    console.log(inputAlt);
    console.log(inputLarg);
    console.log(inputComp);
    console.log(volume);

    return volume
};

function renderVolume () {
    var result = calcvolume();
    document.getElementById("result").innerHTML = result;
   
    console.log(result);
};

