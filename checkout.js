
    document.querySelector("#form").addEventListener("submit",payment)
    function payment(event)
    {
        event.preventDefault();
        alert("Your order is accepted ")

        setTimeout(function()
        {
            alert("Your order is being cooked")
        },3000)

        setTimeout(function()
        {
            alert("Your order is ready")
        },8000)


        setTimeout(function()
        {
            alert(" Order out for delivery")
        },10000)

        setTimeout(function()
        {
            alert(" Order delivered")
        },12000)





    }

    // 0 seconds : Your order is accepted
    //  3 seconds : 
    // Your order is being cooked 8 seconds : 
    // Your order is ready 10 seconds : 
    // Order out for delivery 12 seconds : 
    // Order delivered