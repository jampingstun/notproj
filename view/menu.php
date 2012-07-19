<!-- Navbar ================================================== -->
<div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
            <ul class="nav pull-left">
<!--        menu kiri        -->
            </ul>
                <p class="brand" style="margin-left: 35%; margin-bottom: 0;"> NOTARIS & PPAT </p> 

                <ul class="nav pull-right">
<!--          menu kanan          -->
                </ul>
        </div>
      </div>
    </div>
    
    
<div class="container">
    <div class="row">
        <br /><br/><br/><br/>
    </div>
    <div class="row">
        <div class="span3">
            
                <ul class=" nav nav-tabs nav-stacked menu">
                    <li ><a style="padding-right: 17px;" class="disabled menuhead"><center><b>MENU</b></center></a></li>
                    <li><a href="#"><i class="icon-home"></i>&nbsp;&nbsp;<b>Home</b></a></li>
                    <li><a href="#" data-toggle="collapse" data-target="#Mpemohon"><i class="icon-user"></i>&nbsp;&nbsp;<b>Data Pemohon</b> </a></li>
                    <div  style="background-color: #f5f5f5;   border: 1px solid #eee; border: 1px solid rgba(0, 0, 0, 0.05);" >
                        <ul id="Mpemohon" class="submenu collapse ">
                            <li><a href="#"><i class="icon-plus-sign"></i>&nbsp; input pemohon</a></li>
                            <li><a href="#"><i class="icon-search"></i> &nbsp;lihat pemohon</a></li>     
                        </ul>
                    </div>
                    <li><a href="#" data-toggle="collapse" data-target="#Mtransaksi"><i class="icon-list-alt"></i>&nbsp;&nbsp;<b>Data Transaksi</b></a></li>
                    <div  style="background-color: #f5f5f5;   border: 1px solid #eee; border: 1px solid rgba(0, 0, 0, 0.05);" >    
                        <ul id="Mtransaksi" class="submenu collapse">
                            <li ><a href="#"><i class="icon-plus-sign"></i>&nbsp; input transaksi</a></li>
                            <li ><a href="#"><i class="icon-search"></i> &nbsp;lihat transaksi</a></li>                    
                        </ul>
                    </div>
                    <li><a class="disabled"><br/></a></li>
                </ul>
        </div>
        <div class="span9">
<!--     content goes here       -->
       <? include 'view/tgrouptransaksi.php';?>
        </div>
    </div>
</div>    

