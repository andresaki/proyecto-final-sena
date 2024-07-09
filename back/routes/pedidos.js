const express = require("express");
const router = express.Router();  



const { isAuthenticatedUser , authorizeRoles} = require("../middleware/auth");
const { newPedido, getPedido, AllPedidos, AllPedidosCliente, updatePedido } = require("../controller/pedidosController");


router.route('/pedidos').get( isAuthenticatedUser,AllPedidos);
router.route('/pedido/nuevo').post(isAuthenticatedUser, newPedido);
router.route('/pedido/:id').get(isAuthenticatedUser, getPedido);
router.route('/pedidosCliente/:id').get(isAuthenticatedUser, AllPedidosCliente);
router.route('/pedido/:id').put(isAuthenticatedUser, updatePedido);
// router.route('/pedido/:id').delete(isAuthenticatedUser, deleteProduct);

module.exports = router; 