// Js de productos Modifica para clientes y pedidos
$(document).ready(function() {
   
    $.ajax({
        dataType: 'json',
        url: 'categorias.php',
        success: function(data) {
            datos = '';
            $.each(data, function(index) {
                datos += '<li><a href="javascript:articulos(\'' + data[index].id + '\', \'' + data[index].nombre + '\')">' + data[index].nombre + '</a></li>';
            });
            datos += '</ul>';
            $('#articulos-nav').html(datos);
        }
    });
    jQuery("#a2").click(function() {


        $("#dialog").css('visibility', 'visible');

        $("#dialog").dialog({
            modal: true,
            title: "Datos nuevo cliente",
            show: "blind",
            hide: "explode",
            buttons: {
                'Save': function() {
                    var datos = $("#frmcliente").serialize();
                    alert(datos);
                    $.ajax({
                        dataType: 'json',
                        url: 'articulo_nuevo.php',
                        type: 'POST',
                        data: datos,
                        success: function(data) {
                            alert(data.codigo);
                        }
                    });
                    $(this).dialog('close');
                    $('#tblclientes').trigger('reloadGrid');

                },
                'Exit': function() {
                    //hacemos lo que se quiera y cerramos el dialog
                    $(this).dialog('close');
                }
            }
        });
    });
    $("#dialog").css('visibility', 'hidden');

    //$("#id_new").val("1000");
});
function articulos(categoria, nombre) {
    //alert("Pulsado " + categoria);
    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: 'articulos_categorias.php?id=' + categoria,
        success: function(data) {
            datos = '<thead><tr><th>ID_Producto</th><th>Nombre</th><th>Precio</th><th>Vista Previa</th></tr></thead><tbody>';
            $.each(data, function(index) {
                datos += '<tr><td>' + data[index].id + '</td><td>' + data[index].nombre + '</td><td>' + data[index].precio + '</td><td><img src=./assets/img/' + data[index].id + '.jpg' + '></td><td><a href="javascript:modificararticulo(\'' + data[index].id + '\')"><i class="icon-edit"></i></a></td><td><a href="javascript:borrararticulo(\'' + data[index].id + '\')"><i class="icon-remove"></i></a></td></tr>';
            });
            datos += '</tbody></table></div>';
            $('#dataTable').html(datos);
        }
    });
}
function borrararticulo(categoria) {
    alert("Borrando articulo");

    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: 'borrararticulo.php?id=' + categoria,
        data: datos,
        success: function(data) {
            alert(data.codigo);
        }
    });
}
function modificararticulo(categoria) {
    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: 'modificararticulo.php?id=' + categoria,
        success: function(data) {
            $.each(data, function(index) {
                $("#id").val(data[index].id);
                $("#nombre").val(data[index].nombre);
                $("#precio").val(data[index].precio);
                $("#codigo").val(data[index].codigo);
                datos = data[index].id + data[index].nombre + data[index].precio;
            });
        }
    });
}
function modificaraphp() {
    datos = $('#articulomodificar').serialize();
    alert(datos);
    $.ajax({
        dataType: 'json',
        url: 'modificaraphp.php',
        type: 'POST',
        data: datos,
        success: function(data) {
            alert(data.codigo);
        }
    });
}