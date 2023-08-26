require("dotenv").config()
const {request, response} = require("express")
const mercadopago = require("mercadopago")


const TOKEN = process.env.ACCESS_TOKEN
const NGROK_TOKEN = process.env.NGROK_TOKEN

const producto = {
    id: "132465798",
    title: "apto Ernesto",
    quantity: 1,  
    unit_price: 10,
  
  }

mercadopago.configure({
    access_token: TOKEN
});


const generar = (req = request, res = response) => {

    var preference = {
        items: [
            {            
                id: producto.id,
                title: producto.title,
                quantity: producto.quantity,
                currency_id: "ARS",
                unit_price: producto.unit_price,
              } 
        ],
        back_urls: {
            success: 'http://localhost:3000/api/success/',
            failure: 'http://localhost:3000/api/failure/'
        },

        notification_url : `${NGROK_TOKEN}/api/noti`

    }


    mercadopago.preferences
      .create(preference)
      .then((respuesta) => {
        console.log(respuesta.body.init_point);
        res.send(`<a href ="${respuesta.body.init_point}">PAGAR</a>`);
      })
      .catch((error) => {
        console.log(error.message);
      });


   
}




module.exports = {
    generar
}