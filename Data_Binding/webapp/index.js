sap.ui.require(
  [
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/BindingMode",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (JSONModel, BindingMode, XMLView, ResourceModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
      var oProductModel = new JSONModel("./model/Products.json");
      sap.ui.getCore().setModel(oProductModel, "products");

      var oModel = new JSONModel({
        firstName: "Tam",
        lastName: "Nguyen",
        enabled: true,
        address: {
          street: "Disctrict 4",
          city: "Ho Chi Minh city",
          zip: "0205",
          country: "VietNam",
        },
        salesAmount: 12345.6789,
        currencyCode: "EUR",
        priceThreshold: 20,
      });

      oModel.setDefaultBindingMode(BindingMode.OneWay);

      sap.ui.getCore().setModel(oModel);

      // Create a resoure bundle for language specific text
      var oResourceModel = new ResourceModel({
        bundleName: "sap.ui.demo.db.i18n.i18n",
        supportedLocales: ["", "de"],
        fallbackLocale: "",
      });

      // Assign the model object to SAPUI5 core
      sap.ui.getCore().setModel(oResourceModel, "i18n");

      // Display XML view
      var oView = new XMLView({
        viewName: "sap.ui.demo.db.view.App",
      });

      // Register the view with the message manager
      sap.ui.getCore().getMessageManager().registerObject(oView, true);

      oView.placeAt("content");
    });
  }
);
