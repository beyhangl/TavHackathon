/**
 * 
 */


function eventChange()
{
	var value = $("#type").val();
	if(value == 2)
		{
			$("#firsatDiv").show();
		}
	else
		$("#firsatDiv").hide();

}

function stringify(array) {
      var result = '';
      for (var i = 0; i < array.length; i++) {
          if (i != 0)
              result += '&';
          result += array[i].name + '=' + array[i].value;
      }
      return result;
  }

$('#fakulteForm').on('submit', function(e) {
	
});

$("#fakulteEk").click(function(){
var form = $("#fakulteForm");
	
	var obj = {};
//	var params = stringify($(this).serializeArray());
//	
	
	var params = stringify(form.serializeArray());
    
    var splitParams = params.split('&');
    
    for(var i = 0, l = splitParams.length; i < l; i++) {
      var keyVal = splitParams[i].split('=');
      obj[keyVal[0]] = unescape(keyVal[1]);
    }
    
    var departments = [];
   
    var x = document.getElementById("multiselect_to");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {	
    	departments[i] = x.options[i].value;
    }
    
    obj["departments"] = departments;
    
    var getTaskData = JSON.stringify(obj);
    var duzenleme = true;
    if(obj.id == "" || obj.id == null)
    	duzenleme = false;
    
    console.log(obj);
    $.ajax({
    	url: "../admin/fakulteEkleNew",
    	data: getTaskData ,
    	contentType: "application/json; charset=utf-8",
        dataType: "json",
    	type: "POST",
    	success: function(response) {
    		
    		if(response == true)
    			{
    				if(duzenleme)
    					{
    					swal("Sonuç!", "Fakulte Basarılı Şekilde Güncellendi" );
    					}
    				else
    					{
    					swal("Sonuç!", "Fakulte Basarılı Şekilde Eklendi" );
    					}
    				console.log("eklendi");
        			
    			}
    		else
    			{
    			swal("Sonuç!", "Fakulte Eklenirken Hata Oluştu" );
    			}
    	}    	
    });
    
    
	
});

$('#btnExport')
.click(
		function() {
			var htmls = "";
            var uri = 'data:application/vnd.ms-excel;base64,';
            var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
            var base64 = function(s) {
                return window.btoa(unescape(encodeURIComponent(s)))
            };

            var format = function(s, c) {
                return s.replace(/{(\w+)}/g, function(m, p) {
                    return c[p];
                })
            };

            htmls = document.getElementById("listtable").innerHTML;

            var ctx = {
                worksheet : 'Worksheet',
                table : htmls
            }


            var link = document.createElement("a");
            document.body.appendChild(link); 
            link.download = "export.xls";
            link.href = uri + base64(format(template, ctx));
            link.click();
		});

$("#listeEkle").click(function(){
	
	   var company_id = document.getElementById("listcompany").value;
	   var text = document.getElementById("list").value;
	   
	   if(company_id == "" || text == ""){
		   swal("Sonuç!", "Lütfen secim yapınız" );
		   return false;
	   }
	   
	    $.ajax({
	    	url: "../admin/listeEkle",
	    	data:"company_id="+ company_id +"&list=" + text ,
	    	type: "POST",
	    	success: function(response) {
	    		
	    		if(response == true)
	    			{
	    				swal("Sonuç!", "Liste Basarılı Şekilde Eklendi" );  			
	    			}
	    		else
	    			{
	    				swal("Sonuç!", "Listeye Eklenirken hata oldu." ); 
	    			}
	    	}    	
	    });
	    
	    
		
	});


function openNewTab(tab)
{
	if(tab == null || tab == "")
		return;
	
	if(! tab.startsWith("http"))
		 {
		  var tab = "http://"+tab;
		 }
	var form = document.createElement("form");
    form.method = "GET";
    form.action = tab ;
    form.target = "_blank";
    document.body.appendChild(form);
    form.submit();
	
//	if(tab != null)
//		{
//		 if(! tab.startsWith("http"))
//			 {
//			  var tab = "http:\\"+tab;
//			 }
//		
//		  window.open(tab);
//		  window.focus();
//		}
//	else 
//		return false;
	}

var dt = $('#dataTables-example').DataTable({
        responsive: true,
        dom: 'lBfrtip',
        buttons: [
                  'copyHtml5',
                  'excelHtml5',
                  'pdfHtml5'
              ],
        "order": [[ 0, "desc" ]],
		"pageLength": 10,
	  	"language": {
		    "search": "Filtre:",
		    	"paginate": {
		            "first":      "İlk",
		            "last":       "Son",
		            "next":       "Sonraki",
		            "previous":   "Önceki"
		        },
		        "lengthMenu":     "_MENU_ adet kayıt görüntüle",
		        "info":           "_TOTAL_ kayıttan  _START_ - _END_ arası gösteriliyor",
		  }
        
    });


//var dt = $('#dataTables-example').DataTable();
////var table = $('#myTable').DataTable();
//
//dt.button().add( 0, {
//    action: function ( e, dt, button, config ) {
//        dt.ajax.reload();
//    },
//    text: 'Reload table'
//} );
//
//
//dt.settings = oSettings;
//dt.ajax.reload();
//console.log("settings :");
//console.log(oSettings);

$('#dataTables-promoList').DataTable({
    responsive: true,
    dom: 'lBfrtip',
    "order": [[ 1, "asc" ]],
    buttons: [
        'copyHtml5',
        'excelHtml5',
        'pdfHtml5'
    ],
    "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        if ( aData[4] == "0" )
        {
        	// $(nRow).addClass( 'important' );
        	 $(nRow).find('td:eq(4)').css('color', 'red');
        	 $(nRow).find('td:eq(4)').html('<b>Pasif</b>')
        }
        if ( aData[4] == "1" )
        {
        	// $(nRow).addClass( 'important' );
        	 $(nRow).find('td:eq(4)').css('color', 'green');
        	 $(nRow).find('td:eq(4)').html('<b>Aktif</b>')
        }
    },
	"pageLength": 10,
  	"language": {
	    "search": "Filtre:",
	    	"paginate": {
	            "first":      "İlk",
	            "last":       "Son",
	            "next":       "Sonraki",
	            "previous":   "Önceki"
	        },
	        "lengthMenu":     "_MENU_ adet kayıt görüntüle",
	        "info":           "_TOTAL_ kayıttan  _START_ - _END_ arası gösteriliyor",
	  }
    
});


$('#dataTables-dashboard').DataTable({
    responsive: true,
    dom: 'lBfrtip',
    "order": [[ 1, "asc" ]],
    buttons: [
        'copyHtml5',
        'excelHtml5',
        'pdfHtml5'
    ],
    "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        if ( aData[6] == "false")
        {
        	// $(nRow).addClass( 'important' );
        	 $(nRow).find('td:eq(6)').css('color', 'red');
        	 $(nRow).find('td:eq(6)').html('<b>Pasif</b>')
        }
        if ( aData[6] == "true")
        {
        	// $(nRow).addClass( 'important' );
        	 $(nRow).find('td:eq(6)').css('color', 'green');
        	 $(nRow).find('td:eq(6)').html('<b>Aktif</b>')
        }
    },
	"pageLength": 10,
  	"language": {
	    "search": "Filtre:",
	    	"paginate": {
	            "first":      "İlk",
	            "last":       "Son",
	            "next":       "Sonraki",
	            "previous":   "Önceki"
	        },
	        "lengthMenu":     "_MENU_ adet kayıt görüntüle",
	        "info":           "_TOTAL_ kayıttan  _START_ - _END_ arası gösteriliyor",
	  }
    
});




$('#dataTables-example2').DataTable({
    responsive: true,
    dom: 'lBfrtip',
    "order": [[ 1, "asc" ]],
    buttons: [
              {
                  text: 'My button',
                  action: function ( e, dt, node, config ) {
                      alert( 'Button activated' );
                  }
              }
          ],
    "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        if ( aData[5] == "0" )
        {
        	// $(nRow).addClass( 'important' );
        	 $(nRow).find('td:eq(5)').css('color', 'red');
        	 $(nRow).find('td:eq(5)').html('<b>Pasif</b>')
        }
        if ( aData[5] == "1" )
        {
        	// $(nRow).addClass( 'important' );
        	 $(nRow).find('td:eq(5)').css('color', 'green');
        	 $(nRow).find('td:eq(5)').html('<b>Aktif</b>')
        }
    },
	"pageLength": 10,
  	"language": {
	    "search": "Filtre:",
	    	"paginate": {
	            "first":      "İlk",
	            "last":       "Son",
	            "next":       "Sonraki",
	            "previous":   "Önceki"
	        },
	        "lengthMenu":     "_MENU_ adet kayıt görüntüle",
	        "info":           "_TOTAL_ kayıttan  _START_ - _END_ arası gösteriliyor",
	  }
    
});

$('#dataTables-example3').DataTable({
    responsive: true,
    "ordering": false,
    dom: 'lBfrtip',
    buttons: [
        'copyHtml5',
        'excelHtml5',
        'pdfHtml5'
    ],
    "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        if ( aData[3] == "0" )
        {
        	// $(nRow).addClass( 'important' );
        	 $(nRow).find('td:eq(3)').css('color', 'red');
        	 $(nRow).find('td:eq(3)').html('<b>Pasif</b>')
        }
        if ( aData[3] == "1" )
        {
        	// $(nRow).addClass( 'important' );
        	 $(nRow).find('td:eq(3)').css('color', 'green');
        	 $(nRow).find('td:eq(3)').html('<b>Aktif</b>')
        }
    },
	"pageLength": 10,
  	"language": {
	    "search": "Filtre:",
	    	"paginate": {
	            "first":      "İlk",
	            "last":       "Son",
	            "next":       "Sonraki",
	            "previous":   "Önceki"
	        },
	        "lengthMenu":     "_MENU_ adet kayıt görüntüle",
	        "info":           "_TOTAL_ kayıttan  _START_ - _END_ arası gösteriliyor",
	  }
    
});

$('#dataTables-example4').DataTable({
    responsive: true,
    dom: 'lBfrtip',
    "order": [[ 2, "desc" ]],
    buttons: [
        'copyHtml5',
        'excelHtml5',
        'pdfHtml5'
    ],
    "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        if ( aData[3] == "0" )
        {
        	// $(nRow).addClass( 'important' );
        	 $(nRow).find('td:eq(3)').css('color', 'red');
        	 $(nRow).find('td:eq(3)').html('<b>Pasif</b>')
        }
        if ( aData[3] == "1" )
        {
        	// $(nRow).addClass( 'important' );
        	 $(nRow).find('td:eq(3)').css('color', 'green');
        	 $(nRow).find('td:eq(3)').html('<b>Aktif</b>')
        }
    },
	"pageLength": 25,
  	"language": {
	    "search": "Filtre:",
	    	"paginate": {
	            "first":      "İlk",
	            "last":       "Son",
	            "next":       "Sonraki",
	            "previous":   "Önceki"
	        },
	        "lengthMenu":     "_MENU_ adet kayıt görüntüle",
	        "info":           "_TOTAL_ kayıttan  _START_ - _END_ arası gösteriliyor",
	  }
    
});

function addOption(combo, val, txt)
{
	
//	var json = JSON.stringify(val);
	var string = window.location.pathname;
    var option = document.createElement('option');
    if(string.indexOf("event") !== -1)
    	option.value = val.id;
    else
    	option.value = val.name;
    
    option.title = val.name;
    option.appendChild(document.createTextNode(val.name));
    combo.appendChild(option);
}

function byId(e) {return document.getElementById(e);}

function emptyCombo(e)
{
    e.innerHTML = '';
}

function checkEtkinlik()
{
	var venue;
	venue = byId('etkinlikId');
	var selected = venue.options[venue.selectedIndex];
	var val = selected.value;
	var link = $('#link').val();
	
	if(link != '' && val != '')
		{
			swal("Sonuç!", "Lütfen Etkinlik yada Link Giriniz. Aynı anda ikisini girmeyiniz." );
			return false;
		
		}	
	}

function checkMekan()
{
	var venue;
	venue = byId('venue');
	
	var selected = venue.options[venue.selectedIndex];
	
	var name = selected.text;
	var val = selected.value;
	
	if(val == "-1")
		{
		 $.ajax({
			 	url: "./admin/save",
			 	data: "name=" + name,
			 	type: "GET",
			 	success: function(response) {
			 		if(response != null)
			 			{
			 				
			 				selected.value = response.id;
			 				venue.value = response.id;
			 				var form = $("#taskForm");
			 			}
			 	}
			 	});
		}
 
}

function stateUniChange(userUni)
{
	var combo1, combo2;
    combo1 = byId('university');
    combo2 = byId('company');
   
    
	
    var uni = combo1.value;
    $.ajax({
    	url: "../company/getByUniname",
    	data: "uni=" + uni +"&userUni=" + userUni,
    	type: "GET",
    	success: function(response) {
    		emptyCombo(combo2);
   		 var empty = {};
   		 empty.id="";
   		 empty.name  = "";
   		 addOption(combo2,empty,empty)
    		if(response == null || response == "")
    			{
    				return;
    			}
    		 
    		for(var int = 0 ; int < response.length ; int++)
    			{
    				addOption(combo2, response[int], response[int])
    			}
    	}    	
    });
    
	
	}
