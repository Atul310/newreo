const cart = ["shoes", "pants", "shirts"]

//creating order 
//proceeding to payemnt 
//access to two backend apis
//1) api.createorder()
// 2) api.proceedtopay()

// now lets kmpw about the callback in the 
//ecommerce how it works in 
// here api.createorder() and 
// theere is dependicies between 
// createorder and procced to pay
//because first we createorder and 
// then  we pay 
// while managing this dependencies 
//we may use the callback 
api.createOrder(cart, function(){
    api.proceedToPayement(function(){
        api.ShowOrderSummary(
            function(){
            api.updateWallet()
            }
            )
    })
  

})

// we our giving our callbacks (our own written
// function) to random apis written by some
//other developers which might have bugs in 
// it and it may leads to 
// Inversion of Control 
//======================================================================================================
/**
 In summary, Inversion of Control with callbacks means that 
 you are letting external entities (such as APIs) determine when 
 to execute certain parts of your code. While this can enhance flexibility 
 and modularity, it also requires careful consideration of potential issues such 
 as bug sensitivity and code readability.

=========================================================================================================
 */
// ============================================