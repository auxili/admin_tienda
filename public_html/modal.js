/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//jquery-ui.min.js 
$(document).ready(function() {
jQuery('#a2').click (function() {

//como ocultar una capa PASO1
$('#dialog').css('visibility', ':visible')

        $('#dialog').dialog({
tittle:'titulo',
        show:'blind',
        hide:'explode',
        buttons{
'button01': function(){
//codigo boton
},
        'cancelar': function(){
$(this).dialog('close'); //mirar explicación de abajo
        },
        }
$('#dialog').css('visibility', ':hidden');
})
}
});
        /*
         * 1. selecciona los datos del formulario
         * 2. mandar los datos desde el serialize
         * 3. el secces lo que podría es mostrar (resgistro guardado o algo)
         * 4. Que cierre el formulario: 
         *           como hemos abierto la capa desde el dialog $(#micapa).dialog({
         *           lo que hay que hacer es algo como:
         *                   $(this).dialog('close')
         *    el jQgrid $('#nombre id tabla').trigger('reloadGrid');
         *    la llamada al modal es en el html un <a href="#" id='a2'>NUEVO</a>
         */