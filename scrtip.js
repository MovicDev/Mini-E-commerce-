// Array can contain server value
// var allNames = ['kola','movic','ibrahim','tunde','yusuf','santor','lacelot','ayan','kokolee']
// allNames.pop()
// allNames.shift()
// allNames.push('uthman')
// allNames.unshift('harike')
// console.log(allNames);

var pool = 0;
count.innerHTML = 0;
function displayCart(){
    show.innerHTML ="";
   for (i = 0; i < cart.length; i++) {
      var kop =` 
<tr>
 <td>${i+1}</td>
 <td>${cart[i]}</td>
</tr>`
    show.innerHTML += `
    ${kop}
       `
    
   }
   count.innerHTML = cart.length
  
}

var cart = [];
item.innerHTML =`${items}`
function addItems() {
if(inp.value == ""){
    er.style.display ="block"
} else{
    er.style.display ="none"
   cart.push(inp.value)
   document.getElementById('inp').value = '';

   displayCart()
   
}
}
function shit() {
       cart.pop(show.innerHTML)
       show.innerHTML = cart;
       displayCart()
      if (show.innerHTML == '') {
         impp.style.display = "block"
      }
    }

    function remTop() {
        cart.shift(show.innerHTML)
        show.innerHTML = cart;
        displayCart()
     }
     function addTop() {
        cart.unshift(inp.value)
        document.getElementById('inp').value = '';
        show.innerHTML = cart;
        displayCart()
     }
     function addRev() {
        cart.reverse(show.innerHTML)
        document.getElementById('inp').value = '';
        show.innerHTML = cart;
        displayCart()
     }
   //   function delAny() {
   //      var confirmation = Number(prompt("Enter the number you want to delete"))
   //      if (confirmation > cart.length) {
   //       alert("This cart is empty")
   //      }
   //      else{
        
   //      cart.splice(confirmation-1,1)
   //      document.getElementById('inp').value = '';
   //      show.innerHTML = cart;
   //      displayCart()
   //    }
   //   }
   function delAny() {
      if (deleteAny.value > cart.length || deleteAny.value === ''  ) {
       emp.style.display='block'
       succe.style.display='none'
      }
      else{
      cart.splice(deleteAny-1,1)
      document.getElementById('deleteAny').value = '';
      show.innerHTML = cart;
      succe.style.display='block'
      displayCart()
    }
   }
     function addEdit() {
        var confirm =prompt("Enter the number you want to edit")
        var confirmer = prompt("Edit Name")
        var lop ="object"
        if (confirm > cart.length || confirmer == show.innerHTML || show.innerHTML == "" || typeof(confirm) == lop) {
         alert("invalid Number")
        }
        else{

        cart.splice(confirm-1,1,confirmer)
        document.getElementById('inp').value = '';
        displayCart()
      }
     }
   //   function delAll() {
   //      show.innerHTML =   `<th colspan="2" class="text-center">No item added yet to store</th>`;
   //      cart.length = 0
   //      count.innerHTML = cart.length
   //   }
   function delAll() {
      if (cart.length > 0) {
         var confirmation =confirm("Are you sure you wan to clear the cart")
         if (confirmation) {
            cart.splice(cart, cart.length)
            displayCart()
            show.innerHTML =   `<th colspan="2" class="text-center">No item added yet to store</th>`;
            count.innerHTML = cart.length
         }else{
            displayCart()
         }
         
      }else{
        alert("Cart is empty")
      }
      
   }




