﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
   
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="UrlContent" runat="server">
    <!--文件区域-->
    <script src="<%=Url.Content("~/Common/grid.js?version=1.5") %>" type="text/javascript"></script>
    <script src="<%=Url.Content("~/Project/UserMoneyRecord/UserMoneyRecordLayout.js?version=1.5") %>"
        type="text/javascript"></script>
    <script src="<%=Url.Content("~/Project/UserMoneyRecord/UserMoneyRecord.js?version=1.5") %>" type="text/javascript"></script>
    <script src="<%=Url.Content("~/Common/comonfun.js?version=1.5") %>" type="text/javascript"></script>
</asp:Content>
