(function () {
   const customerImage = document.querySelector('#customer-img')
   const customerName = document.querySelector('#customer-name')
   const customerText = document.querySelector('#customer-text')

   const btn = document.querySelectorAll('.btn')
   let index =0
   const customers = []

   function Customer(img, name, text){
    this.img = img
    this.name = name
    this.text = text
   }
function createCustomer(img, name, text) {
    let Img = `./img/${img}.jpeg`
    let customer = new Customer(Img, name, text)

    customers.push(customer)
}
createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit sapiente aperiam nisi accusamus quidem repudiandae vitae ipsam beatae veritatis fugiat, assumenda consectetur aliquid perferendis architecto voluptatem laudantium dignissimos sit!')
createCustomer(1, 'William', ' Totam impedit sapiente aperiam nisi accusamus quidem repudiandae vitae ipsam beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. veritatis fugiat, assumenda consectetur aliquid perferendis architecto voluptatem laudantium dignissimos sit!')
createCustomer(2, 'Smith', 'consectetur adipisicing elit. Totam Lorem ipsum dolor sit amet  impedit sapiente aperiam nisi accusamus quidem repudiandae vitae ipsam beatae veritatis fugiat, assumenda consectetur aliquid perferendis architecto voluptatem laudantium dignissimos sit!')
createCustomer(3, 'Laura', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit sapiente aperiam nisi accusamus quidem repudiandae vitae ipsam beatae veritatis fugiat, assumenda consectetur aliquid perferendis architecto voluptatem laudantium dignissimos sit!')
createCustomer(4, 'Sarah', ' aperiam nisi accusamus quidem repudiandae vitae ipsam beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit sapiente veritatis fugiat, assumenda consectetur aliquid perferendis architecto voluptatem laudantium dignissimos sit!')
createCustomer(5, 'David', 'Dolor sit amet consectetur Lorem ipsum d adipisicing elit. Totam impedit sapiente aperiam nisi accusamus quidem repudiandae vitae ipsam beatae veritatis fugiat, assumenda consectetur aliquid perferendis architecto voluptatem laudantium dignissimos sit!')

btn.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.parentElement.classList.contains('prevBtn')){
            if(index=== 0){
                index=customers.length
            }
            index --
            customerImage.src= customers [index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
        if(e.target.parentElement.classList.contains('nextBtn')){
            index ++
            if(index=== customers.length){
                index= 0
            }
            customerImage.src= customers [index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
    })
})


})()