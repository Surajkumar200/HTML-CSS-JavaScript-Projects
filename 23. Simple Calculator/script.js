document.getElementById("btn").addEventListener("click", function () {
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let result = document.querySelector(".result");
    let oprator = document.getElementById("selectOp").value;
  
        switch (oprator) {
            case "plus":
                result.innerHTML = `Sum of your given number is ${Number(num1) + Number(num2)}`;
                break;
            case "min":
                result.innerHTML = `Subtraction of your given number is ${Number(num1) - Number(num2)}`;
                break;
            case "dev":
                result.innerHTML = `Divesion of your given number is ${Number(num1) / Number(num2)}`;
                break;
            case "multi":
                result.innerHTML = `Product of your given number is  ${Number(num1) * Number(num2)}`;
                break;
        
    
            case "pow":
                result.innerHTML = `Power of your given number is  ${Number(num1) ** Number(num2)}`;
                break;
            case "module":
                result.innerHTML = `Module of your given number is  ${Number(num1) % Number(num2)}`;
            
            case ".":
                result.innerHTML = `Please select operator`;
            
          
               
        
        }
    }

)
