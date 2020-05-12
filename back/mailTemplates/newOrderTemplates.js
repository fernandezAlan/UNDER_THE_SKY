function mailParaAdmins(
  orderInfo,
  userOrder,
  emailClients,
  productsInOrder,
  pde,
  entrega
) {
  console.log("este es el usuario", userOrder);
  console.log("products in order", productsInOrder);
  console.log("orderinfo", orderInfo);
  console.log("punto de encuentro", pde);
  console.log("direccion de entrega", entrega);

  return `

  <h2>Nuevo pedido #${orderInfo.id}</h2>
            <h3>Cliente: ${userOrder.firstName} ${userOrder.lastName}</h3>
            <p>
            ${emailClients.map((email) => {
              return ` ${email} <br>` 
            })}
            </p>
            
            <div>
            <div  style="    
                    border: 0.5px solid;

                    height: auto;
                    padding: 0.5rem;
                    width:fit-content;
                    background-color: #f1f1f1;
                    border-color: #a09d95;
                    border-radius: 5px;
                    text-align:center;
                    ">
            <h3><strong>Detalles de la compra</strong></h3>
                  ${productsInOrder.map((producto) => {
                    return `     
                    
                    <div  style="    
                    height: auto;
                    padding: 0.5rem;
                    background-color: #ededed;
                    margin: auto;
                    width:fit-content;
                    border-radius: 5px;
                    ">
      
                        <h3 style="margin-block-start: 0.15em; margin-block-end: 0.15em;">
                            <br>Producto Nº:${producto.id}
                        </h3>
                        <h4 style="margin-block-start: 0.15em; margin-block-end: 0.15em;">
                            Información:
                        </h4>

                        <p style="margin-block-start: 0.15em; margin-block-end: 0.15em;">
                                <b>Nombre o frase:</b>${producto.name}
                            <br>
                                <b>Fecha:</b>${producto.date}
                            <br>
                                <b>Hora:</b>${producto.time}
                            <br>
                                <b>Lugar:</b>${producto.content}
                            <br>
                                <b>Idioma:</b>${producto.language}
                        </p>
                        
                        <h4 style="margin-block-start: 0.15em; margin-block-end: 0.15em;">
                            <b>Variables:</b>
                        </h4>
                        <p style="margin-block-start: 0.15em; margin-block-end: 0.15em;">
                                <b>${producto.digital?"Digital":"Impreso"}</b>
                                <br>
                                <b>Estilo:</b>${producto.styleInfo}
                            <br>
                                <b>Marco:</b>${producto.frame}
                            <br>
                                <b>Tamaño:</b>${producto.size}
                            <br>
                                <b>Precio:</b>${producto.price}
                            <br>
                                <b>Cantidad:</b>${producto.quantity}
                          
                        </p>
                        <h4 style="margin-block-start: 0.15em; margin-block-end: 0.15em;">
                            <b>Subtotal:</b>${producto.quantity * producto.price}
                        </h4>
                    </div>
                    

                     `
                  })}

                  </div>

            </div>

            
                <br>
                <div style="width:100%" >
                <h3><strong>Total a cobrar </strong>${orderInfo.totalPrice}</h3>

                <h4 style="margin-block-start: 0.15em; margin-block-end: 0.15em;">
                <b>${
                    Object.keys(pde).length === 0
                    ? 'Envío a domicilio'
                    : 'Entrega en PDE'}</b>
            </h4>
                ${
                  Object.keys(pde).length === 0
                    ? " "
                    : `<p> <strong> Dirección entrega:</strong> <br>
                      <strong>Lugar: </strong> ${pde.place} <br>
                        <strong>Dirección: </strong> ${pde.address} <br>
                        <strong>Barrio: </strong> ${pde.neighborhood} <br>
                        <strong>Horario: </strong> ${pde.Attention} <br>
                       
                        </p><br>`
                } 
              
                 
                  ${
                    Object.keys(entrega).length === 0
                      ? " "
                      : `<p> <strong> Dirección de envío:</strong> <br>
                        <strong>Dirección: </strong> ${entrega.address} <br>
                        <strong>Ciudad: </strong> ${entrega.city} <br>
                        <strong>Provincia: </strong> ${entrega.state} <br>
                        <strong>Pais: </strong> ${entrega.country} <br>
                        <strong>CP: </strong> ${entrega.postCode} <br>
                        </p><br>`
                  }
              
              
              
              </div>
            
            `;
}

module.exports.mailParaAdmins = mailParaAdmins;
