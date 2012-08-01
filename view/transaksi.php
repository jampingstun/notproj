<!--<div class="container">
    <div class="row">-->
        <div class="span9">
            <div class="well" style="background-color: white;">
                <div class="page-header">
                    <h3>Form Data Pemohon <br/><small> Masukkan Data Identitas Pemohon</small></h3>
                </div>
                <br/>
        <form class="form-horizontal" method="POST" style="padding-right: 0%;">
                <div class="page-header">
                    <h3>Identitas Transaksi</h3>
                </div>
            <div class="accordion" id="accordion1">
            <div class="accordion-group">
              <div class="accordion-heading">
                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse1" style="background-color:whitesmoke;">
                  Masukkan Data
                </a>
              </div>
              <div id="collapse1" class="accordion-body collapse in">
                <div class="accordion-inner">
                    <div class="control-group">
                    <label class="control-label" for="select01">ID Pemohon</label>
                    <div class="controls">
                    <select name="f[grouppemohon]">
                        <option>something</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    </div>
                </div>
                    
                    <div class="control-group">
                    <label class="control-label" for="select01">Group Transaksi</label>
                    <div class="controls">
                    <select name="f[grouptransaksi]">
                        <option>something</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    </div>
                </div>
                    
                    <div class="control-group">
                    <label class="control-label">Jumlah Berkas</label>
                    <div class="controls">
                    <input type="text" class="input" name="f[notelp]"">
                    </div>
                    </div> 
                    
                    <div class="control-group">
                    <label class="control-label">Judul</label>
                    <div class="controls">
                    <input type="text" class="input" name="f[notelp]">
                    </div>
                    </div> 
                    
                    <div class="control-group">
                    <label class="control-label">Tanggal Masuk</label>
                    <div class="controls">
                    <div class="input-append date" id="dp3" name="f[tglmasuk]" data-date="1-01-2012" data-date-format="dd-mm-yyyy" onclick="datet()">
                    <input class="span2" size="16" type="text" value="1-01-2012">
                    <span class="add-on"><i class="icon-th"></i></span>
                    </div>
                     <script>
                      function datet(){
                         $('#dp3').datepicker();
                         //$('#dp3').datepicker('show');                          
                      }
                    </script>
                    </div>
                    </div>
                    
            </div>
        </div>
            </div>
                
                <div class="page-header">
                    <h3>Data Transaksi</h3>
                </div>
            <div class="accordion" id="accordion1">
            <div class="accordion-group">
              <div class="accordion-heading">
                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse1" style="background-color:whitesmoke;">
                  Masukkan Data
                </a>
              </div>
              <div id="collapse1" class="accordion-body collapse in">
                <div class="accordion-inner">
                    
                    <div class="control-group">
                    <label class="control-label">Status</label>
                    <div class="controls">
                     <label class="checkbox">
                     <input type="checkbox" name="f[selesai]"> Selesai
                     </label>
                    </div>
                    </div>
                  
                    <div class="control-group">
                    <label class="control-label">Jumlah Berkas Selesai</label>
                    <div class="controls">
                    <input type="text" class="input" name="f[jmlberkasselesai]">
                    </div>
                    </div> 
                    
                    <div class="control-group">
                    <label class="control-label">Harga</label>
                    <div class="controls">
                    <input type="text" class="input" name="f[harga]">
                    </div>
                    </div> 
                    
                    <div class="control-group">
                    <label class="control-label">Status</label>
                    <div class="controls">
                     <label class="checkbox">
                     <input type="checkbox" name="f[bayar]"> Sudah Bayar
                     </label>
                    </div>
                    </div>
                    
                    <div class="control-group">
                    <label class="control-label">Tanggal Selesai</label>
                    <div class="controls">
                    <div class="input-append date" id="dp4" name="f[tglselesai]" data-date="1-01-2012" data-date-format="dd-mm-yyyy" onclick="dates()">
                    <input class="span2" size="16" type="text" value="1-01-2012">
                    <span class="add-on"><i class="icon-th"></i></span>
                    </div>
                     <script>
                      function dates(){
                         $('#dp4').datepicker();
                         //$('#dp3').datepicker('show');                          
                      }
                    </script>
                    </div>
                    </div>
                    
            </div>
        </div>
                
    </div>
</div>
                                            
             <br/>
             <br/>
            <div class="form-actions">
                <input type="submit" class="btn btn-primary" name="simpan" value="simpan"/>
                    <a onclick="history.go(-1)" class="btn">Batal</a>
            </div>
        </form>
            </div>
        </div>
    </div><!--
</div>-->
