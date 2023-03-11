let resultat = document.querySelector("#resultat");
function test() {
    resultat.style.display = "block"
    let dd = new Date();
    let jour = dd.getDate();
    let mois = dd.getMonth()+1;
    let anne = dd.getFullYear();
    age =   anne - (parseInt(years.value))
    if(mois <month.value){
        age-=1
    }
    resultat.innerHTML= "Votre Age Est ==> "+age+"<br>"
    if(parseInt(month.value) >= mois ){
        monthDay = parseInt(month.value) - mois
        resultat.innerHTML+="Next date of birth "+monthDay+" Months and "
        }
    else{
        monthDay =  12 - (mois - parseInt(month.value))
        resultat.innerHTML+="Next date of birth "+monthDay+" Months and "
    }
    if(parseInt(day.value) >= jour){
        dayDay = parseInt(day.value) - jour
        resultat.innerHTML+=dayDay+" Day"
        }
    else{
        dayDay =31 - (31 - parseInt(day.value))
        resultat.innerHTML+=dayDay+" Day"
    }
}
let years = document.querySelector("#years")
let day = document.querySelector("#day")
let month = document.querySelector("#month")