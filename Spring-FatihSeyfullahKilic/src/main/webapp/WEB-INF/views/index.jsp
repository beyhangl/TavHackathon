 <%@ page pageEncoding="UTF-8" %> 
<%@ taglib  uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
  <head>
  	<link rel="icon" type="image/png" href="/secure/votech.jpeg" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>TAV Hackathon - Votech</title>

    <!-- Bootstrap -->
    <link href="/secure/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/secure/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="/secure/css/nprogress.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="/secure/css/custom.min.css" rel="stylesheet">
    
    <link rel="stylesheet" href="/secure/css/chosen.css">
    
    
    <link href="/secure/datatables-plugins/dataTables.bootstrap.css" rel="stylesheet">
    <link href="/secure/datatables-responsive/dataTables.responsive.css" rel="stylesheet"> 
    <link href="https://cdn.datatables.net/buttons/1.2.4/css/buttons.dataTables.min.css" rel="stylesheet">
    
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css" rel="stylesheet" type="text/css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css" rel="stylesheet" type="text/css">

	<link href="/secure/css/loading.css" rel="stylesheet" type="text/css"/>
	<link href="/secure/datatables/css/select.dataTables.min.css" rel="stylesheet" type="text/css"/>
	
	  <link href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css" rel="stylesheet" type="text/css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css" rel="stylesheet" type="text/css">
	
	  <link rel="stylesheet" href="/secure/css/style2.css">
  	<link rel="stylesheet" href="/secure/css/prism.css"> 
  	    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.1/css/bootstrap-select.css" />
	<script type="text/javascript" src="/secure/js/jquery.min.js"></script>
	<sitemesh:write property='head'/>
  </head>

  <body class="nav-sm">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="/" class="site_title"><i class="fa fa-moon-o"></i> <span>Votech</span></a>
            </div>

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <div class="profile clearfix">
              <div class="profile_pic">
                <img src="/secure/img/user.png" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Welcome</span>
                <h2>
                </h2>
              </div>
              <div class="clearfix"></div>
            </div>
            <!-- /menu profile quick info -->

            <br />

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <h3>Menu</h3>
                <ul class="nav side-menu">
                
                 <li><a><i class="fa fa-table"></i> Flights <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="eventsEkle">Add</a></li>
                      <li><a href="events">List</a></li>
                    </ul>
                  </li>
                    
                    
                
                
   
                  
                </ul>
              </div>


            </div>
            <!-- /sidebar menu -->

                        <!-- /menu footer buttons -->
          </div>
        </div>

        <!-- top navigation -->
      <div class="top_nav">
          <div class="nav_menu">
            <nav>
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>

              <ul class="nav navbar-nav navbar-right">
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="/secure/img/user.png" alt="" >
                    
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="/admin/logout"><i class="fa fa-sign-out pull-right"></i> Çıkış Yap</a></li>
                  </ul>
                </li>
			    </ul>
                
      
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">
          	<sitemesh:write property='body'/>
        </div>
        <!-- /page content -->

        <!-- footer content -->
          <div class="clearfix"></div>
        <!-- /footer content -->
      </div>
    </div>
    
    <script type="text/javascript">
   	 //document.getElementById("menu1").style.display = "none";
    
    </script>
	
	
    <!-- jQuery --><script type="text/javascript" src="/secure/js/bootstrap.min.js"></script>
    
    <script type="text/javascript" src="/secure/js/fastclick.js"></script>
    <script type="text/javascript" src="/secure/js/nprogress.js"></script>
    <script type="text/javascript" src="/secure/js/custom.min.js"></script>
     <script src="/secure/js//bootstrap-select.js"></script>
    <script type="text/javascript" src="/secure/js/jquery.searchabledropdown-1.0.8.min.js"></script>
	

    
    <!-- DataTables JavaScript -->
    <script src="/secure/datatables/js/jquery.dataTables.min.js"></script>
    <script src="/secure/datatables-plugins/dataTables.bootstrap.min.js"></script>
    <script src="/secure/datatables-responsive/dataTables.responsive.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.13.1/jquery.validate.min.js"></script>
    <script src="/secure/js/task.js"></script>
    
    <script src="https://cdn.datatables.net/buttons/1.2.4/js/dataTables.buttons.min.js"></script>
    <script src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
    <script src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts.js"></script>
    <script src="//cdn.datatables.net/buttons/1.2.4/js/buttons.html5.min.js"></script>
    
   	
   	<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.js"></script>
   	<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.min.js"></script>
   	<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
    
	<script type="text/javascript" src="/secure/datatables/js/dataTables.select.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.js"></script>
   	<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.min.js"></script>
   	<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
   	<script src="/secure/js/chosen.jquery.js" type="text/javascript"></script>
   	
   	<script src="/secure/js/prism.js" type="text/javascript" charset="utf-8"></script>
  <script src="/secure/js/init.js" type="text/javascript" charset="utf-8"></script>
	
	<script type="text/javascript">
	$(document).ready(function() {
		<c:if test="${not empty msg}">
	    var	paramOne ="<c:out value='${msg}'/>";   
	    swal("Sonuç!", paramOne );
	    </c:if>
	});
</script>
	
	</body>
</html>
