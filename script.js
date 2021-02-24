
      // login button event handler
        const loginBtn = document.getElementById("login");
        loginBtn.addEventListener("click", function(){
            const loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";
            const transactionArea = document.getElementById("transaction-area");
            transactionArea.style.display = "block";
        })


        //deposit button event handler
        const depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener("click", function(){
            const depositNumber = getInputNum("depositAmount")
            update_Deposit_Balance_withdraw("currentDeposit", depositNumber);
            update_Deposit_Balance_withdraw("currentBalance", depositNumber);

            document.getElementById("depositAmount").value  = "";
        })

        function update_Deposit_Balance_withdraw(id, depositNumber) {
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const totalAmount = depositNumber + currentNumber;
            document.getElementById(id).innerText = totalAmount;
        }



        //withdraw button event handler
        const withdrawBtn = document.getElementById("addWithdraw");
        withdrawBtn.addEventListener("click", function(){
            const withdrawNumber = getInputNum("withdrawAmount");
            update_Deposit_Balance_withdraw("currentWithdraw", withdrawNumber);
            update_Deposit_Balance_withdraw("currentBalance", -1 * withdrawNumber);
            document.getElementById("withdrawAmount").value  = "";
        })

        function getInputNum(id){
            const Amount = document.getElementById(id).value;
            const amountNumber = parseFloat(Amount);
            return amountNumber;
            
        }
