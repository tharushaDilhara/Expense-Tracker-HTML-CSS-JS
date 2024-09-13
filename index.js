let balance = document.getElementById("balance");

let totalIncome = document.getElementById("totalIncome");

let totalExpenses = document.getElementById("totalExpenses");




let insertData = document.getElementById("insertData");

let nameid = document.getElementById("name");


let btn = document.getElementById("btn");
let typeOfMoney = document.getElementById("typeOfMoney");
let Sno = 0;

let selectT  = document.getElementById("selectT");

//let removeAll = document.getElementById("removeAll");

selectT.onclick = function(){
    typeOfMoney.textContent = selectT.value;
 }

btn.addEventListener("click",()=>{

    //removeAll.style.display = "block";
    //let amountN = Number(amount);
    let amount =parseFloat(document.getElementById("amount").value);
    let totalIncomeN = parseFloat(totalIncome.textContent);
    let totalExpensesN = parseFloat(totalExpenses.textContent);
    let balanceN = parseFloat(balance.textContent);

     let tRow = document.createElement("tr");
     let tData1 = document.createElement("td");
     let tData2 = document.createElement("td");
     let tData3 = document.createElement("td");
     let tData4 = document.createElement("td");
     let tData5 = document.createElement("td");
     tRow.classList.add("tr");

     tRow.classList.add("tr");
     tData1.classList.add("td");
     tData2.classList.add("td");
     tData3.classList.add("td");
     tData4.classList.add("td");
     tData5.classList.add("td");

    Sno +=1;
     let tDataName1 = document.createTextNode(Sno);
     let tDataName2 = document.createTextNode(nameid.value);
     let tDataName3 = document.createTextNode(amount);
     let tDataName4 = document.createTextNode(selectT.value);
     let tDataName5 = document.createTextNode("❌");

     tData1.appendChild(tDataName1);
     tData2.appendChild(tDataName2);
     tData3.appendChild(tDataName3);
     tData4.appendChild(tDataName4);
     tData5.appendChild(tDataName5);

     tRow.appendChild(tData1);
     tRow.appendChild(tData2);
     tRow.appendChild(tData3);
     tRow.appendChild(tData4);
     tRow.appendChild(tData5);
     
    
     insertData.appendChild(tRow);
     //totalIncome.textContent  = amount.value;
     function updateIncome() {
        if(selectT.value ==="Income" && amount){

            tData4.style.color = "#0b0";
            tData4.style.fontWeight = 600;
            totalIncomeN += amount;
            balanceN += amount;       
        }
        else if (selectT.value === "Expense" && amount) {

            tData4.style.color = "#b00";
            tData4.style.fontWeight = 600;
            totalExpensesN += amount;
            balanceN -= amount;
        }
            totalIncome.textContent = totalIncomeN.toFixed(2);
            totalExpenses.textContent = totalExpensesN.toFixed(2);
            balance.textContent = balanceN.toFixed(2);
    }
        
    updateIncome();
    clearText();
    

    tData5.onclick =function(){
        insertData.appendChild(tRow).remove();
        resetRow();
     }
     function resetRow(){
        if(selectT.value === "Income" && balanceN > 0){
            totalIncomeN -= amount;
            balanceN -= amount; 
        }
        else if(selectT.value === "Expense" && balanceN > 0){
            totalExpensesN -= amount;
        }
     }
     function clearText(){
        selectT.value === "Select Type";
        document.getElementById("amount").value = "";
        nameid.value  ="";

     }
     var removeAll = document.getElementById("removeAll");
     removeAll.onclick = function (){
        insertData.remove();
     }
    
});


