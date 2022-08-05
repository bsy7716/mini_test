    let btns = document.getElementsByClassName("btn");
    let input = document.getElementById("result-input");
    let choice = "";
    let splitValue;
    let numbers = [];
    let operators = [];
    let temp ="";
    let result = 0;

    for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(event){
        choice = event.currentTarget.innerHTML;

        if(choice == "C"){
            input.value = "";
            numbers = [];
            operators = [];
            temp ="";
            result = 0;
        }else if(choice != "="){
            input.value += choice;
        }else{
            splitValue = input.value.split("");
            for(i of splitValue){
                if(i >=0 && i<=9){
                    temp += i;
                }else{
                    numbers.push(temp);
                    temp = "";
                    operators.push(i);
                }
            }
            numbers.push(temp);

            for(let i=0; i< operators.length; i++){
                switch(operators[i]){
                    case "+":
                        if(i == 0){
                            result = parseInt(numbers[i]) + parseInt(numbers[i + 1]);
                        }else{
                            result = parseInt(result) + parseInt(numbers[i + 1]);
                        }
                        break;
                    case "-":
                        if(i == 0){
                            result = parseInt(numbers[i]) - parseInt(numbers[i + 1]);
                        }else{
                            result = parseInt(result) - parseInt(numbers[i + 1]);
                        }
                        break;
                    case "*":
                        if(i == 0){
                            result = parseInt(numbers[i]) * parseInt(numbers[i + 1]);
                        }else{
                            result = parseInt(result) * parseInt(numbers[i + 1]);
                        }
                        break;
                    case "/":
                        if(i == 0){
                            result = parseInt(numbers[i]) / parseInt(numbers[i + 1]);
                        }else{
                            result = parseInt(result) / parseInt(numbers[i + 1]);
                        }
                        break;
                    default:
                        break;
                }
            }
            input.value = result;
        }
    });
}