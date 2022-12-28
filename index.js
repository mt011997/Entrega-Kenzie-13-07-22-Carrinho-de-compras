//=============================== PRODUTOS =======================================


let productsCart = [
    
    {
        id: 1,
        name: "Uva Crimson",
        price: 49.99,
    },

    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98,
    },

    {
        id: 3,
        name: "Água de coco",
        price: 8.99,
    },

    {
        id: 4,
        name: "Mamão",
        price: 8.98,
    },

    {
        id: 5,
        name: "Água Tônica",
        price: 17.98,
    },

]


//============================= CRIANDO TAGS =========================================


let tagBody           = document.querySelector("body")
let tagMain           = document.createElement("main")
let tagSection        = document.createElement("section")
let tagH2             = document.createElement("h2")
let productList       = document.createElement("ul")
let productDetails    = document.createElement("li")
let tagPeNome         = document.createElement("p")
let tagPePreco        = document.createElement("p")


//============================ DANDO APPEND NAS TAGS PARA O HTML ==========================================


tagBody.appendChild(tagMain)
tagMain.appendChild(tagSection)
tagSection.appendChild(tagH2)
tagSection.appendChild(productList)
productList.appendChild(productDetails)
productDetails.appendChild(tagPeNome)
productDetails.appendChild(tagPePreco)  


//========================== NOMEANDO AS TAGS ============================================


tagH2.innerText           = "Virtual Market"
tagPeNome.innerText       = "Item"
tagPePreco.innerText      = "Valor"


//============================== FUNCTION PARA CRIAR LISTA DE PRODUTOS ========================================


function criarLista(productsCart){

    for(let i = 0; i < productsCart.length; i++){

        let produto = document.createElement("li")
        let nomeProduto = document.createElement("p")
        let valorProduto = document.createElement("p")

        produto.classList.add("produto")
        
        produto.appendChild(nomeProduto)
        produto.appendChild(valorProduto)
        productList.appendChild(produto)

        nomeProduto.innerText   = productsCart[i].name
        valorProduto.innerText  = productsCart[i].price

    }

}

criarLista (productsCart)


//======================== SOMAR PREÇO ==============================================


function soma(){

    let soma = 0

    for(let j = 0; j < productsCart.length; j++){

        soma += productsCart[j].price

    }

    return soma

}


//======================== CRIANDO RODAPÉ ==============================================


let liFinal = document.createElement("li")
let pTotal = document.createElement("p")
let valorTotal = document.createElement("p")
let buttonEnd = document.createElement("button")


//============================ CRIANDO CLASS ==========================================


liFinal.classList.add("rodape")
productDetails.classList.add("cabecalho")


//============================ NOMEANDO AS TAGS ==========================================


pTotal.innerText = "Total"
valorTotal.innerText = soma()
buttonEnd.innerText = "Finalizar"


//============================ APPEND FINAL ==========================================


productList.append(liFinal, buttonEnd)
liFinal.append(pTotal, valorTotal)