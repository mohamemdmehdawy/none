/* global console ,alert ,prompet */
/* dolar eg cal */
function myPrice() {

    "use strict";
    
    var calcu = document.getElementById("text").value,
        
        message = document.getElementById("result"),
        
        result = calcu * 17.85;
        
    if (calcu === "") {
       
        message.innerHTML = "يعم انت شايفني ساحر هعرف السعر الي انت عاوز تحوله من غير ما تكتبه";
        
    } else if (isNaN(calcu)) {
    
        message.innerHTML = " انت شارب حاجه يا كابتن ازاى هحسب دا بالدولار ..ممكن اسم الصنف يسحب؟";

        
    
    } else if (calcu === "0") {
               
        message.innerHTML = "مش عارف اقولك بس اعتقد ان الناتج 0 برضو";
    
    } else if (calcu < 0) {
        
        message.innerHTML = " يعم ارحمني مش بعرف اضرب بالسالب ارحمننننننننننننني ";
        
    } else if (calcu > 10000) {
        
        message.innerHTML = "مين اغني واحد في مصر ناو" + result;
        
    } else {
        
        document.getElementById("result").innerHTML = "انت معك " + result + " دولار ";

        
    }
    
}
alert("تحويل العمله من الدولار للمصري");

    
