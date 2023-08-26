require("dotenv").config();
const { request, response } = require("express");
const mercadopago = require("mercadopago");


const notificacion = async (req = request, res = response) => {
  const { query } = req;
  const { params } = req;
  console.log({ query });
  const topic = req.body.topic || req.body.type;
  console.log({ params });
  var merchantOrder;

  switch (topic) {
    case "payment":
      const paymentId = query.id || query["data.id"];
      console.log(topic, "getting payment", paymentId);
      const payment = await mercadopago.payment.findById(paymentId);
      // console.log(payment);

      if (payment && payment.body && payment.body.order) {
        merchantOrder = await mercadopago.merchant_orders.findById(
          payment.body.order.id
        );
      }
      break;
    case "merchant_order":
      const orderId = query.id;
      console.log(topic, "getting merchant order", orderId);
      merchantOrder = await mercadopago.merchant_orders.findById(orderId);
      break;
  }

  console.log(merchantOrder.body.payments);

  var paidAmount = 0;
  merchantOrder.body.payments.forEach((payment) => {
    if (payment.status === "approved") {
      paidAmount += payment.transaction_amount;
    }
  });

  if (paidAmount >= merchantOrder.body.total_amount) {
    console.log("EL PAGO SE COMPLETO");
    // TODO MODIFICAR BASE DE DATOS
    // TODO ENVIAR EMAIL AL USUARIO
  } else {
    console.log("EL PAGO no SE COMPLETO");
  }

  res.send({
    message: "Notificación recibida correctamente.",
    query,
  });
};

module.exports = { notificacion };
