// هنا سوف تنشئ دالة calculate 
function calculate(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;


    let BMi = weight/(height*height);

    let status = "";


  if(BMi<=18.5){
      status="انت حدك عصل وايد ضعيف شد حيلك "}
      else if(BMi<=25){
          status="وزنك بيرفكت تبارك الله استمر"
      }else if(BMi<=100){
        status="وزنك اوفر شوف لك حل او اي دبرة"
      }else{
          alert(" الله يسامحك")
          status="error"
      }

  if(weight ==""){
    alert("اكتب وزنك لا تستحي")
}else if(height==""){
    alert("اكتب طولك لا اصيدك")}

// }else if(height=="" && weight=="");{
//     alert("تستعبط؟ اكتب طولك و وزنك لا اصيدك")
// }

if(BMi<=18.5){
    status="انت حدك عصل وايد ضعيف شد حيلك "}
    else if(BMi<=25){
        status="وزنك بيرفكت تبارك الله استمر"
    }else if(BMi<=100){
      status="وزنك اوفر شوف لك حل او اي دبرة"
    }else{
        alert(" الله يسامحك")
        status="error"
    }

BMi=BMi.toFixed(2);
  document.getElementById("result").innerHTML=BMi;
  document.getElementsByClassName("comment")[0].innerHTML=status
}


