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



    jQuery("#form_insert").click(function() {
        $("#dialog").css('visibility', 'visible');
        $("#dialog").dialog({
            modal: true,
            title: "Producto nuevo",
            show: "blind",
            hide: "show",
            buttons: {
                'Save': function() {
                    var datos = $("#new_product_data").serialize();
                    alert(datos);
                    $.ajax({
                        dataType: 'json',
                        url: 'articulo_nuevo.php',
                        type: 'POST',
                        data: datos,
                        success: function(data) {
                            //alert(datos);
                            alert(data);
                            articulos(data);
                        }
                    });
                    $(this).dialog('close');
                    alert("antes del reload");
                    $("#collapse4").trigger("reloadGrid");
                    
                    articulos(data.codigo);
                    alert("despues del reload");

                },
                'Exit': function() {
                    //hacemos lo que se quiera y cerramos el dialog
                    $(this).dialog('close');
                }
            }
        });
    });
    $("#dialog").css('visibility', 'hidden');

    /*jQuery("#tblclientes").jqGrid({
        url: 'articulos_categorias.php',
        datatype: 'json',
        mtype: 'POST',
        colNames: ['ID', 'NOMBRE', 'PRECIO', 'CODIGO'],
        colModel: [
            {name: 'id', index: 'id', width: 50, resizable: false, align: "center"},
            {name: 'nombre', index: 'nombre', width: 160, resizable: false, sortable: true},
            {name: 'precio', index: 'precio', width: 150},
            {name: 'codigo', index: 'codigo', width: 120}
        ],
        pager: '#paginacion',
        rowNum: 10,
        rowList: [15, 30],
        sortname: 'id',
        sortorder: 'asc',
        viewrecords: true,
        caption: 'Listado de Clientes'
    });*/

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
                datos += '<tr><td>' + data[index].id + '</td><td>' + data[index].nombre + '</td><td>' + data[index].precio + '</td><td><img src=./assets/img/' + data[index].id + '.jpg' + '></td><td><a href=# id="form_insert2">Nuevo Producto</a><a href="javascript:modificararticulo(\'' + data[index].id + '\')"><i class="icon-edit"></i></a></td><td><a href="javascript:borrararticulo(\'' + data[index].id + '\')"><i class="icon-remove"></i></a></td></tr>';
            });
            datos += '</tbody></table></div>';
            $('#dataTable').html(datos);
        }
    });

}
function borrararticulo(id) {
    alert("Borrando articulo");

    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: 'borrararticulo.php?id=' + id,
        data: datos,
        success: function(data) {
            //alert(categoria);
            
        }
    });
    alert("categoria modificada"  + categoria)
    articulos(categoria);
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