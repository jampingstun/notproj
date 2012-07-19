var id_transaksi;         // this will be our datastore
var tglmasuk;       // this will be our columnmodel
var id_pemohon;
var id_grouptr;
var judul;
var jmlberkas;
var status;
var jmlberkasselesai;
var harga;
var sudahbayar;
var tglselesai;
 
Ext.onReady(function(){
Ext.QuickTips.init();
var Checkbox = new Ext.grid.CheckboxSelectionModel();
//var scrl = new Ext.grid.determineScrollbars();
PemohonDataStore = new Ext.data.Store({
      id: 'PemohonDataStore',
      proxy: new Ext.data.HttpProxy({
                url: 'controller/transaksi.php',      // File to connect to
                method: 'POST'
            }),
            baseParams:
		{
		    orderby:'id_transaksi',
                    sort:'DESC'
	  
	    }, // this parameter asks for listing
      reader: new Ext.data.JsonReader({   
                  // we tell the datastore where to get his data from
        root: 'results',
        totalProperty: 'total',
        id: 'id'
      },[ 
        {name: 'id_transaksi', type: 'int', mapping: 'id_transaksi'},
        {name: 'tglmasuk', type: 'string', mapping: 'tglmasuk'},
        {name: 'id_pemohon', type: 'int', mapping: 'id_pemohon'},
        {name: 'id_grouptr', type: 'int', mapping: 'id_grouptr'},
        {name: 'judul', type: 'string', mapping: 'judul'},
        {name: 'jmlberkas', type: 'int', mapping: 'jmlberkas'},
        {name: 'status', type: 'int', mapping: 'status'},
        {name: 'jmlberkasselesai', type: 'int', mapping: 'jmlberkasselesai'},
        {name: 'harga', type: 'int', mapping: 'harga'},
        {name: 'sudahbayar', type: 'int', mapping: 'sudahbayar'},
        {name: 'tglselesai', type: 'string', mapping: 'tglselesai'}
      ]),
      sortInfo:{field: 'id_transaksi', direction: "ASC"}
    });
     PemohonDataStore.load({params:{start:0,limit:11,orderby:'id_transaksi',sort:'ASC'}});
    PemohonColumnModel = new Ext.grid.ColumnModel(
    [   Checkbox,
//        {
//        header: 'ID Transaksi',
//        readOnly: true,
//        dataIndex: 'id_transaksi', // this is where the mapped name is important!
//        width: 250,
//        locked   : true,
//        hidden: false
//      },
      {
        header: 'Tanggal Masuk',
        dataIndex: 'tglmasuk',
        width: 250,
        hidden: false
  
      },{
        header: 'ID Pemohon',
        dataIndex: 'id_pemohon',
        width: 150,
        editor: new Ext.form.TextField({
          allowBlank: false,
          maxLength: 20,
          maskRe: /([a-zA-Z0-9\s]+)$/
          })
      },{
        header: 'ID Group Transaksi',
        dataIndex: 'id_grouptr',
        width: 150,
        readOnly: true                     // we don't necessarily want to see this...
      },{
        header: 'Judul',
        dataIndex: 'judul',
        width: 250,
        readOnly: true
      },{
        header: 'Jumlah Berkas',
        dataIndex: 'jmlberkas',
        width: 150,
        readOnly: true
      },{
        header: 'Status',
        dataIndex: 'status',
        width: 150,
        readOnly: true
      },{
        header: 'Jumlah Berkas Selesai',
        dataIndex: 'jmlberkasselesai',
        width: 150,
        readOnly: true
      }
      ,{
        header: "Harga",
        dataIndex: 'harga',
        width: 250,
        readOnly: true
      },{
        header: 'Sudah Bayar',
        dataIndex: 'sudahbayar',
        width: 150,
        readOnly: true
      }
      ,{
        header: 'Tanggal Masuk',
        dataIndex: 'tglselesai',
        width: 250,
        editor: new Ext.form.TextField({  // rules about editing
            allowBlank: false,
            maxLength: 20,
            maskRe: /([a-zA-Z0-9\s]+)$/   // alphanumeric + spaces allowed
          })
      }]
    );
    PemohonColumnModel.defaultSortable= true;
 
  //// Load the data
    // Display our window
 
//});

//==================================================//
	//                             FORM TAMBAH DATA                               //
	//==================================================//
	var tambah = new Ext.FormPanel({
		url:'controller/transaksi.php?act=add',
		baseParams:{
			act:"add"
		},
        width: 450,         		
	autoheight:true,
        bodyStyle:'padding:5px 5px 0',		                
        labelWidth: 130,		
        defaults: {allowBlank: false},
		
        items: [
		{
            xtype: 'textfield',
            fieldLabel: 'ID Transaksi',
			anchor: '80%',
			name: 'id_transaksi'
        },
        {xtype: 'datefield',
            fieldLabel: 'Tanggal Masuk',
			anchor: '80%',
			name: 'tglmasuk',
                        format: 'Y-m-d'
        },
		
		{
            xtype: 'textfield',
            fieldLabel: 'ID Pemohon',			
			anchor: '80%',
			name: 'id_pemohon'
			
        },
		{
            xtype: 'textfield',
            fieldLabel: 'ID Group Transaksi',			
			anchor: '80%',
			name: 'id_grouptr'
        },{
            xtype: 'textfield',
            fieldLabel: 'Judul',			
			anchor: '80%',
			name: 'judul'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Jumlah Berkas',			
			anchor: '80%',
			name: 'jmlberkas'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'status',			
			anchor: '80%',
			name: 'status'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Jumlah Berkas Selesai',			
			anchor: '80%',
			name: 'jmlberkasselesai'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Harga',			
			anchor: '80%',
			name: 'harga'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Sudah Bayar',			
			anchor: '80%',
			name: 'sudahbayar'
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Tanggal Selesai',			
			anchor: '80%',
			name: 'tglselesai',
                        format: 'Y-m-d'
        }
		
		
			
		],
        buttons: [{
            text: 'Save',
            handler: function(){
              
			  tambah.getForm().submit({
	                               
				success: function(tambah, o)
				{ 							 
					PemohonDataStore.reload();
					TambahForm.hide();	
				},
						
				failure: function(tambah, o)
				{							 
					Ext.MessageBox.alert('Warning','Failur');    
				}     
	            });
                
            }
        },{
            text: 'Reset',
            handler: function()
			{
                tambah.getForm().reset();
            }
        }]
    });
 
       
	var TambahForm = new Ext.Window({      
	    title: 'Tambah Data',	  
	    closable:true,
            closeAction:'hide',	 
	    width:500,
	    height:500,       
            layout: 'fit',		       
		    
		listeners : {
			show : function () {
				tambah.getForm().reset();
			}
		},
		modal: true,
		items: tambah
	    });
		
	function displayTambahForm(){
	    if(!TambahForm.isVisible())
		{      
	       TambahForm.show();
	    } 
		else 
		{
	       TambahForm.toFront();
	    }
	  }
		
	//===================================================
	//                              FORM EDIT DATA                                      //
	//===================================================
	var Edit = new Ext.form.FormPanel({
	    url:'controller/transaksi.php?act=edit',   
		baseParams:{
			act:"edit"
		},		
		 
                width: 450,         		
                autoheight:true,
                bodyStyle:'padding:5px 5px 0',		                
                labelWidth: 130,		
		frame:true,        
		reader: new Ext.data.JsonReader ({
			root: 'results',
			totalProperty: 'total',
			id: 'id_pemohon',
			fields: [
				'id_transaksi','tglmasuk','id_pemohon','id_grouptr','judul','jmlberkas','status','jmlberkasselesai','harga','sudahbayar','tglselesai'
			]
		}),
        items: 
		[
		new Ext.form.Hidden 
		({
			//name: 'id_transaksi'					
		}),
		{
            xtype: 'textfield',
            fieldLabel: 'ID Transaksi',
			anchor: '80%',
                        readOnly: true,
			name: 'id_transaksi'
        },
        {xtype: 'datefield',
            fieldLabel: 'Tanggal Masuk',
			anchor: '80%',
			name: 'tglmasuk',
                        format: 'Y-m-d'
        },
		
		{
            xtype: 'textfield',
            fieldLabel: 'ID Pemohon',			
			anchor: '80%',
			name: 'id_pemohon'
			
        },
		{
            xtype: 'textfield',
            fieldLabel: 'ID Group Transaksi',			
			anchor: '80%',
			name: 'id_grouptr'
        },{
            xtype: 'textfield',
            fieldLabel: 'Judul',			
			anchor: '80%',
			name: 'judul'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Jumlah Berkas',			
			anchor: '80%',
			name: 'jmlberkas'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'status',			
			anchor: '80%',
			name: 'status'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Jumlah Berkas Selesai',			
			anchor: '80%',
			name: 'jmlberkasselesai'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Harga',			
			anchor: '80%',
			name: 'harga'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Sudah Bayar',			
			anchor: '80%',
			name: 'sudahbayar'
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Tanggal Selesai',			
			anchor: '80%',
			name: 'tglselesai',
                        format: 'Y-m-d'
        }				
		],
		
		buttons: [{
            text: 'SAVE',
			handler:function()
			{
				Edit.getForm().submit
				({
					waitMsg:'Simpan Data...',
					
					success: function(form, action) 
					{
						Ext.MessageBox.alert('Succcess', 'Edit Data Berhasil');
						PemohonDataStore.load({params:{start:0,limit:11}});
						EditForm.hide();
						Edit.getForm().reset();
					},
															
					failure: function(form, action)
					{
						Ext.MessageBox.alert('Error', 'Edit Data Gagal');
						Edit.getForm().reset();
					}
					
				})
			}
        },
		{
            text: 'Cancel',
			handler: function()
			{
				EditForm.hide();
			}
        }]
	});
	var EditForm = new Ext.Window({
            title: 'Edit Input',
            closable:true,
            closeAction:'hide',	 
	    width:500,
	    height:500,       
            layout: 'fit',		
            modal: true,		
        items: [
			Edit
		]
    });
    function del(btn)
                {
		if(btn == 'yes')
		{
			var m = EditorGrid.getSelectionModel().getSelections();
			var store = EditorGrid.getStore();
			
			for(var i=0; i< m.length; i++){
				var rec = m[i];
				if(rec){
					PemohonDataStore.load({
						params:{del:rec.get("id_transaksi"),start:0,limit:10},
						callback: function(){	
						}
					});store.remove(rec);
				}
			}
			
		}
	}
        
		  
	var EditorGrid =  new Ext.grid.GridPanel({	    
		store: PemohonDataStore,
                title:'Data Transaksi',
                iconCls:'icon-grid',
		closable: true,
                loadMask: true,
                autoWidth : true,
                height:350,
                layout:'fit',
                autoScroll:true,
                stripeRows: true,
                cm: PemohonColumnModel,		
		sm: Checkbox,
 
	    tbar:[	
			{
			    text: 'Tambah',		 
                            iconCls:'add',
                            tooltip:'Tambah data baru',
			    handler: displayTambahForm
			},'-', 
	    
     		{
				text:'Edit',
				iconCls:'edit',
                                tooltip:'Edit data yang dipilih',
				handler: function()
				{
					 var m = EditorGrid.getSelectionModel().getSelections();
					 if(m.length > 0)
					 {
					    Edit.getForm().load({url:'controller/transaksi.php?act=get&id_transaksi='+ m[0].get('id_transaksi'), waitMsg:'Loading'});
						EditForm.show();			 
					 }
					 else
					 {
						Ext.MessageBox.alert('Warning', 'Pilih Salah Satu Yang Mau Anda Edit');
					 }
				}
		 
			},'-', 
			
			{
				text:'Hapus',
				iconCls:'remove',
                                tooltip:'Hapus data yang dipilih',
				handler: function()
				{
					var m = EditorGrid.getSelectionModel().getSelections();
					if(m.length > 0)
					{
						Ext.MessageBox.confirm('Konfirmasi', 'Apakah Anda Yakin Menghapus Field Ini?' , del);						
					}
					else
					{
						Ext.MessageBox.alert('Warning', 'Pilih Salah Satu Yang Mau Anda Hapus');
					}
				}
			
			}
 		],
	    viewConfig: {
            forceFit:true
        },	    
        
	 collapsible: true,
        animCollapse: true,
        
	    
	  
	    bbar: new Ext.PagingToolbar({
            pageSize: 11,
            store: PemohonDataStore,
            displayInfo: true,
            displayMsg: 'Menampilkan data {0} - {1} dari {2}',
            emptyMsg: "Tidak ada data"
        })
	    });
  EditorGrid.render('dok');      // Load the data
 
  });
