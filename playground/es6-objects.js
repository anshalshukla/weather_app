// object property shorthand

const name = "Anshal"
const userAge = 19

const user = {
    name,
    userAge,
    location: "Pilani"
}
// es6 shorthand is helpful when we define objects and the value of the property comes in from the variable
// with the name same as that as of property

console.log(user)

//Object destructuring

const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
}

//goal of destructuring is to extract object property and save it into individual variables

// const label = product.label
// const price = product.price

// destructuring syntax

const { label: productLabel, stock, rating = 5 } = product

console.log(productLabel)
console.log(stock)
console.log(rating)
// the properties not present inside the product will be set to undefined by default
// default rating will only be used of the object don't have any property matching

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction("order", product)