var id_pemohon;         // this will be our datastore
var id_grouppemohon;       // this will be our columnmodel
var tgldaftar;
var nama;
var alamat;
var tempat;
var tgllahir;
var agama;
var id_pemohon;
 
Ext.onReady(function(){
  Ext.QuickTips.init();
var Checkbox = new Ext.grid.CheckboxSelectionModel();	
PemohonDataStore = new Ext.data.Store({
      id: 'PemohonDataStore',
      proxy: new Ext.data.HttpProxy({
                url: 'controller/database.php',      // File to connect to
                method: 'POST'
            }),
            baseParams:{task: "LISTING"}, // this parameter asks for listing
      reader: new Ext.data.JsonReader({   
                  // we tell the datastore where to get his data from
        root: 'results',
        totalProperty: 'total',
        id: 'id'
      },[ 
        {name: 'id_pemohon', type: 'int', mapping: 'id_pemohon'},
        {name: 'id_grouppemohon', type: 'int', mapping: 'id_grouppemohon'},
        {name: 'tgldaftar', type: 'date', mapping: 'tgldaftar'},
        {name: 'nama', type: 'string', mapping: 'nama'},
        {name: 'alamat', type: 'string', mapping: 'alamat'},
        {name: 'tempat', type: 'string', mapping: 'tempat'},
        {name: 'tglahir', type: 'string', mapping: 'tglahir'},
        {name: 'agama', type: 'string', mapping: 'agama'},
        {name: 'pb_pemohon', type: 'int', mapping: 'pb_pemohon'}
      ]),
      sortInfo:{field: 'id_pemohon', direction: "ASC"}
    });
    
    PemohonColumnModel = new Ext.grid.ColumnModel(
    [   Checkbox,
        {
        header: 'ID Pemohon',
        readOnly: true,
        dataIndex: 'id_pemohon', // this is where the mapped name is important!
        width: 150,
        hidden: false
      },{
        header: 'ID Group Pemohon',
        dataIndex: 'id_grouppemohon',
        width: 150,
        editor: new Ext.form.TextField({  // rules about editing
            allowBlank: false,
            maxLength: 20,
            maskRe: /([a-zA-Z0-9\s]+)$/   // alphanumeric + spaces allowed
          })
      },{
        header: 'Tanggal Daftar',
        dataIndex: 'tgldaftar',
        width: 150,
        editor: new Ext.form.TextField({
          allowBlank: false,
          maxLength: 20,
          maskRe: /([a-zA-Z0-9\s]+)$/
          })
      },{
        header: 'Nama',
        dataIndex: 'nama',
        width: 150,
        readOnly: true                     // we don't necessarily want to see this...
      },{
        header: 'Alamat',
        dataIndex: 'alamat',
        width: 150,
        readOnly: true
      },{
        header: 'Tempat',
        dataIndex: 'tempat',
        width: 150,
        readOnly: true
      },{
        header: 'Tanggal Lahir',
        dataIndex: 'tglahir',
        width: 150,
        readOnly: true
      },{
        header: 'Agama',
        dataIndex: 'agama',
        width: 150,
        readOnly: true
      }
      ,{
        header: "PB Pemohon",
        dataIndex: 'pb_pemohon',
        width: 150,
        renderer: function(v){ return '$ ' + v; },   
                           // we tell Ext how to display the number
        editor: new Ext.form.NumberField({
          allowBlank: false,
          decimalSeparator : ',',
          allowDecimals: true,
          allowNegative: false,
          blankText: '0',
          maxLength: 11
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
		url:'controller/database.php?act=add',
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
            fieldLabel: 'ID Pemohon',
			anchor: '80%',
			name: 'id_pemohon'
        },
        {xtype: 'textfield',
            fieldLabel: 'ID Group Pemohon',
			anchor: '80%',
			name: 'id_grouppemohon'
        },
		
		{
            xtype: 'datefield',
            fieldLabel: 'Tanggal Daftar',			
			anchor: '80%',
			name: 'tgldaftar',
			format: 'm/d/Y'
        },
		{
            xtype: 'textfield',
            fieldLabel: 'Nama',			
			anchor: '80%',
			name: 'nama'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Alamat',			
			anchor: '80%',
			name: 'alamat'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Tempat',			
			anchor: '80%',
			name: 'tempat'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Tanggal Lahir',			
			anchor: '80%',
			name: 'tgllahir'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Agama',			
			anchor: '80%',
			name: 'agama'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'PB Pemohon',			
			anchor: '80%',
			name: 'pbpemohon'
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
	    height:400,       
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
	    url:'controller/database.php?act=edit',   
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
				'id_pemohon','id_grouppemohon','tgldaftar','nama','alamat','tempat','tglahir','agama','pb_pemohon'
			]
		}),
        items: 
		[
		new Ext.form.Hidden 
		({
			name: 'id_pemohon'					
		}),
		{
            xtype: 'textfield',
            fieldLabel: 'ID Pemohon',
			anchor: '80%',
			name: 'id_pemohon'
        },
        {xtype: 'textfield',
            fieldLabel: 'ID Group Pemohon',
			anchor: '80%',
			name: 'id_grouppemohon'
        },
		
		{
            xtype: 'datefield',
            fieldLabel: 'Tanggal Daftar',			
			anchor: '80%',
			name: 'tgldaftar',
			format: 'm/d/Y'
        },
		{
            xtype: 'textfield',
            fieldLabel: 'Nama',			
			anchor: '80%',
			name: 'nama'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Alamat',			
			anchor: '80%',
			name: 'alamat'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Tempat',			
			anchor: '80%',
			name: 'tempat'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Tanggal Lahir',			
			anchor: '80%',
			name: 'tgllahir'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Agama',			
			anchor: '80%',
			name: 'agama'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'PB Pemohon',			
			anchor: '80%',
			name: 'pb_pemohon'
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
	    height:400,       
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
						params:{del:rec.get("id_dokumentasi"),start:0,limit:10},
						callback: function(){
							
						}
					});store.remove(rec);
				}
			}
			
		}
	}
	
		  
	var EditorGrid =  new Ext.grid.EditorGridPanel({	    
		store: PemohonDataStore,
                title:'Data Pemohon',
                iconCls:'icon-grid',
		closable: true,
                loadMask: true,
		layout:'fit',
		autoWidth : true,
                height:350,
                autoScroll:true,
                stripeRows: true,
	    cm: PemohonColumnModel,		
		sm: Checkbox,
 
	    tbar:[	
			{
			    text: 'Tambah',		 
			    iconCls:'add',
			    handler: displayTambahForm
			},'-', 
	    
     		{
				text:'Edit',
				iconCls:'edit',
				handler: function()
				{
					 var m = EditorGrid.getSelectionModel().getSelections();
					 if(m.length > 0)
					 {
					    Edit.getForm().load({url:'controller/database.php?act=get&id_dokumentasi='+ m[0].get('id_dokumentasi'), waitMsg:'Loading'});
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
	 
  EditorGrid.render('dok');
  PemohonDataStore.load();      // Load the data
 
  });
