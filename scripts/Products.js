import { getProducts } from "./database.js"

document.addEventListener("click",
    (event) => {
      if (event.target.id.startsWith("product")) {
        console.log("hello, click!", event)

        const [, productId] = event.target.id.split("--") //[ "author", "2" ]

        const productIdNumber = parseInt(productId)

        let prod = ""
        for (const product of products) {
          if ( product.id === productIdNumber) {
            prod = product
             
          }
        }
        console.log("product total:")

        window.alert(`${event.target.innerText}'s product total: ${prod.price}.`)

      }
    }
  )

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
   
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

