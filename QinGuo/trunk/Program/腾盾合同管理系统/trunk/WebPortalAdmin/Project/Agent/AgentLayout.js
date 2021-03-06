﻿//单位管理
Ext.onReady(function () {

    var className = ''; //页面类名
    if (this.frameElement) {
        className = this.frameElement.name
    }
    //转义列
    var Member = Ext.data.Record.create([
              { name: "Id", type: "string", mapping: "Id" },
              { name: "Name", type: "string", mapping: "Name" },
              { name: "Address", type: "string", mapping: "Address" },
              { name: "Code", type: "string", mapping: "Code" },
              { name: "Order", type: "string", mapping: "Order" },
              { name: "Status", type: "string", mapping: "Status" },
              { name: "UserName", type: "string", mapping: "UserName" },
              { name: "CreateTime", type: "datetime", mapping: "CreateTime" },
              { name: "CityName", type: "string", mapping: "CityName" },
              { name: "Province", type: "string", mapping: "Province" },
              { name: "CityId", type: "string", mapping: "CityId" },
              { name: "LinkUser", type: "string", mapping: "LinkUser" },
              { name: "Phone", type: "string", mapping: "Phone" },
              { name: "AreaId", type: "string", mapping: "AreaId" },
              { name: "UserName", type: "string", mapping: "UserName" },
              { name: "LoginName", type: "string", mapping: "LoginName" },
               { name: "LicenseNumber", type: "string", mapping: "LicenseNumber" }
    ]);
    //数据源
    var store = GridStore(Member, '/Agent/SearchData', className);


    //快捷查询,如果不需要,可以不用定义
    searchData = [['全查询', ''], ['单位名称', 'Name'], ['单位地址', 'Address'], ['联系人', 'LinkUser'], ['联系电话', 'Phone']];
    var grid = new Ext.grid.GridPanel({
        region: 'center',
        layout: 'fit',
        id: 'gg',
        store: store,
        stripeRows: true, //隔行颜色不同
        border: false,
        loadMask: { msg: '数据请求中，请稍后...' },
        columns: [
                new Ext.grid.RowNumberer({ header: '', width: 25 }), //设置行号
               {
               header: "单位名称",
               dataIndex: 'Name',
               width: 120,
               sortable: false,
               menuDisabled: true
           },
           {
               header: "单位地址",
               dataIndex: 'Address',
               width: 160,
               sortable: false,
               menuDisabled: true
           },
                {
                    header: "联系人",
                    dataIndex: 'LinkUser',
                    width: 80,
                    sortable: false,
                    menuDisabled: true,
                    renderer: IsNull
                },
                 {
                     header: "单位电话",
                     dataIndex: 'Phone',
                     flex: 1,
                     sortable: false,
                     menuDisabled: true,
                     renderer: IsNull
                 },
                  {
                      header: "管理员名",
                      dataIndex: 'UserName',
                      width: 60,
                      sortable: false,
                      menuDisabled: true
                  },
                 {
                     header: "登录帐号",
                     dataIndex: 'LoginName',
                     width: 90,
                     sortable: false,
                     menuDisabled: true
                 },
                  {
                      header: '状态',
                      sortable: false,
                      dataIndex: 'Status',
                      menuDisabled: true,
                      width: 70,
                      renderer: formartEnableOrDisable
                  },
                {
                    header: '添加时间',
                    sortable: false,
                    dataIndex: 'CreateTime',
                    flex: 4,
                    menuDisabled: true
                }
                ],
        tbar: tbar(className),
        bbar: bbar(store), //分页工具条
        viewConfig: {
            forceFit: true,
            enableRowBody: true,
            scrollOffset: 0 //不加这个的话，会在grid的最右边有个空白，留作滚动条的位置
        }
    });
    grid.addListener('rowdblclick', dbGridClick);
    //默认选中第一行
    grid.store.on("load", function () {
        grid.getSelectionModel().selectFirstRow(); //用这个就可以了，前提是你要有SelectionModel的实现
    });
    //viewport
    var viewport = new Ext.Viewport({
        layout: 'border',
        items: [grid],
        listeners: {
            afterrender: function () {

            }
        }
    });
});










