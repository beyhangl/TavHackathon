<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib  uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<html>
	<head>
	  <meta charset="utf-8" http-equiv="refresh" content="110">
	  </head>  
<body>
<div class="row" >
        
          
          <div class="col-md-12 col-sm-12 col-xs-12">



              <div class="row">

                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="x_panel">
                    <div class="x_title">
                      <h2> Last Seen Passengers... <small></small></h2>
                      <ul class="nav navbar-right panel_toolbox">
                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                        </li>
                      </ul>
                      <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                      <div class="dashboard-widget-content">
                       	<table  class="table table-striped table-bordered" id="dataTables-dashboard">
						 <thead>
						 	<tr>
						 		<th>Image </th>
						 		<th colspan="2">Details</th>
						 	</tr>
						 </thead>
						 <tbody>
						 	<c:forEach items="${userList}" var="user">
						 		<tr>
<td rowspan="3" width="20%"> <img src="/image/admin/${user.id}.jpeg"   height="200" width="200"> </td>
<td> <font size="6"> ${user.name }</font>  </td>
<td> </td>
</tr>
<tr>
<td> <img src="http://capetown-internationalairport.co.za/images/flights.svg"   height="42" width="42">  <font size="6">  ${user.flightno }  </font></td>
<td><img src="/image/admin/gate.jpeg"   height="42" width="42"> <font size="6">   ${user.gate} </font> </td>
</tr>
<tr>
<td> <img src="http://www.virgocommunications.net/images/icon_3.png"   height="42" width="42"> <font size="6"> ${user.cam_description } </font> </td>
<td>  <img src="http://images.all-free-download.com/images/graphiclarge/blue_background_clock_icon_vector_280580.jpg" height="42" width="42" >  <font size="6">  ${user.cam_coordinate}   </font> </td>
</tr>
 
 
						 	</c:forEach>
						 	
						 
						 </tbody>		 
						 </table>
                        
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            	
            	
            	
         
            </div>
          
          
          
        
          </div>
          

</body>
</html>