
<!-- Navbar
    ================================================== -->
 <div class="navbar navbar-fixed-top">  
      <div class="navbar-inner">  
        <div class="container-fluid">  
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">  
            <span class="icon-bar"></span>  
            <span class="icon-bar"></span>  
            <span class="icon-bar"></span>  
          </a>  
          <a class="brand" href="#">NOTARIS PPAT</a>  
          <div class="nav-collapse">  
            <ul class="nav">   
            </ul>

          </div><!--/.nav-collapse -->  
        </div>  
      </div>  
    </div> 
    
    
 <!-- Login Form
    ================================================== -->
  <div style="margin-top:5em;">
  <div class="container">
      <div class="content">
          <div class="row">
            <form id="login" action="proses_login.php" method="post">
                <div class="login-form">
                  <h2>Login</h2>
                      <fieldset>
                          <div>
                              <input type="text" placeholder="Username" id="username" name="username">
                          </div>
                          <div>
                            <input style="width:152px;" type="password" placeholder="Password" id="password" name="password">
                            <button class=" btn btn-primary" type="submit" style="margin-bottom:9px;" onclick="masuk()">Login</button>
                          </div>
                          
                      </fieldset>
                </div>
            </form>
          </div>
      </div>
  </div>
  <?php
    $keluar = "$('.alert').hide()";
    if (!empty($_GET['error'])) {
        if($_GET['error']=='salah') {
            echo '<br />';
            echo '<div style="margin-left:38%; margin-right:38%;" class="alert alert-block alert-error fade in" id="pesan_error">';
            echo '<button type="button" class="close" onclick='.$keluar.'>×</button>';
            echo 'username dan password salah';
            echo '</div>';
        }
  }
  ?>
      

  
  </div>
