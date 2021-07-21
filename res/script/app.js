function addEss(a){
    var temp = ""
    var tempArray = a.split(" ")
    for(var i = 0; i < tempArray.length; i++){
        //temp += tempArray[i] + "s "
        var voewls = ["a", "e", "i", "o", "u"]
        var chars = [",", ".", ";", ":", "!", "?", "\'", "\""]
        var len = tempArray[i].length-1
        var len2 = tempArray[i].length-2
        var lastChar = tempArray[i][len]
        var secondLastChar = tempArray[i][len2]
        if((!voewls.includes(lastChar) & !chars.includes(lastChar))){
            temp += tempArray[i] + "es "
        }else if(chars.includes(lastChar)){
            if(voewls.includes(secondLastChar)){
                temp += tempArray[i].slice(0,len) + "s" + lastChar + " ";
            }else{
                temp += tempArray[i].slice(0,len) + "es" + lastChar + " ";
            }
        }else{
            temp += tempArray[i] + "s "
        }
    }
    return temp
}

function camel(a){
    let str1 = ""
    let str2 = ""
    let mix = ""
    for(let i = 0; i < a.length; i++){
        if(i % 2 == 0){
           str1 += a.charAt(i).toUpperCase()
        }else if(i % 2 != 0){
           str2 += a.charAt(i).toLowerCase()
        }
    }
    if(str2.length < str1.length){
        str2 += " "
    }
    for(let x = 0; x < str1.length; x ++){
        mix += str1[x] + str2[x]
    }
    return mix
}

function space(a){
    let temp = ""
    for(var i = 0; i < a.length; i++){
        temp += a.charAt(i) + " "
    }
    return temp
}

function upper(a){
    return a.toUpperCase()
}

function lower(a){
    return a.toLowerCase()
}

function mirror(a){
    var temp = ""
    for(var i = a.length -1; i >= 0; i--){
        temp += a[i]
    }
    return temp
}

function random(a){
    var temp = ""
    var tempArray = a.split(" ")
    const ctrl = tempArray.length
    
    for(var i = 0; i < ctrl; i++){

        var r = Math.floor(Math.random() * (tempArray.length))
        temp += tempArray[r] + " "
        tempArray.splice(r, 1)
        // console.log(tempArray)
        // console.log("valor de r: "+r)
        // console.log("Valor de i: "+i)
    }
    // return temp + " " + tempArray.length + " " + ctrl
    return temp
}

$(document).ready(function(){
    let resposta;
    
    $(form).submit(function(){
        var texto = $('#input').val();
        var opt = $('#options').val();
        //alert(texto + " " + opt);
        switch(opt){
            case "mai":
                resposta = upper(texto)
                break;
            case "min":
                resposta = lower(texto)
                break;
            case "cam":
                resposta = camel(texto)
                break;
            case "esp":
                resposta = space(texto)
                //resposta = space(texto);
                break;
            case "mir":
                resposta = mirror(texto)
                break;
            case "ran":
                resposta = random(texto)
                break;
            case "ess":
                resposta = addEss(texto)
                break;
        }
        console.log(resposta)
        //alert("Resposta")
        $('#resposta').val(resposta);
        //Window.stop()
        return false
    })
    
    
})