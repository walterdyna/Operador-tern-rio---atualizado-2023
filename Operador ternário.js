/*
Operador ternário

?  ---> (SE)
:  ---> (SE NÃO)
&& ---> IF SEM ELSE

*/

const salary = 5000

//modo normal
if (salary < 3000){
    console.log("Programador e Junior")
} else if (salary >= 5000 && salary < 10000){
    console.log("Programador e SENIOR")
} else {
    console.log("Programador Monstro")
}

//Modo ternario - IF E ELSE
salary < 3000 ? console.log("Programador JJUNIOR") : console.log("Programador SSENIOR")
//Modo ternario somente com IF
salary < 3000 && console.log ("Programador Sem ELSE rs")

//Modo ternario IF ELSE IF

salary < 3000 ? console.log("Programador JJUNIOR - ELSE IF") : salary >= 3000 && salary < 10000 ? console.log ("ele e Senior --- ELSE IF") : console.log("Programador Monstro")
