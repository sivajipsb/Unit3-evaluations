

    var data = JSON.parse(localStorage.getItem("cartitems"))
    maindiv = document.querySelector("#main")
    display(data)
    function display(meal)
{
    meal.map(function(elem)
    {

        var div = document.createElement("div")

        var name = document.createElement("p")
        name.innerText=elem.strMeal

        var img =document.createElement("img")
        img.src= elem.strMealThumb
        img.style.width="100px"
        img.style.height="100px"

        var price=document.createElement("p")
        price.innerHTML= `Price:${Math.ceil( Math.random()*500)} Rs`;

        var button=document.createElement("button")
        button.textContent="remove from cart"
        button.addEventListener("click",function()
        {
            console.log("here are you")
            cart.push(elem)
            console.log(cart)
            localStorage.setItem("cartitems",JSON.stringify(cart))

        })

        div.append(img,name,price,button)
        maindiv.append(div)

    })
}


 console.log(data)
 let total =  data.reduce(function (acc,current)
 {
    return acc+current.price;

 },0)

 console.log(total)