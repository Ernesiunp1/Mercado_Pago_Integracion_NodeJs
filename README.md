## Integracion de mercadopago para Nodejs

```bash
Debes descargar ngrok y ejecutarlo para que te generar una mascara https debido a que la api de mercadopago no devuelve respuesta a una url que no sea segura: esa direccion https que te entrega ngrok debes remplazarla en el .env NGROK_TOKEN

```


### 1 - Ejecutar ngrok en una terminal
```Bash
$ ./ngrok  ngrok http 4500 (4500 o el numero de puerto que desee exponerlo)
```

### 2 - Reamplazar en las variables de entorno NGROK
```
NGROK_TOKEN = "https://fc7d-2800-e2-1f00-3c32-a4d9-f1d2-6214-75d7.ngrok-free.app"
```


### 3 - Reamplazar en el .env el ACCESS_TOKEN que te da mercadolibre bien sea de prueba o produccion
```
ACCESS_TOKEN = "APP_USR-2487199746571596-071015-20268f5a71e8d5f10d45b99eb-1416"
```

### 4 - Ejecutar en la Terminal

```bash
$ nodemon app.js

```


### 5 - Peticiones

```
A partir de este momento al levantar nodemo y ngrok podras realizar petiones a mercadopago en el endpoint 

 http://localhost:3000/api/generar
```


