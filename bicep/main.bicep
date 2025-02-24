param appName string
param location string = resourceGroup().location
param appServicePlanSku string = 'F1'
param staticAppName string
param staticAppLocation string = 'East US'
param staticAppSku string = 'Free'
param vnetName string
param vnetAddressPrefix string = '10.0.0.0/16'

var appInsightsName = '${appName}-insights'

resource virtualNetwork 'Microsoft.Network/virtualNetworks@2020-06-01' = {
  name: vnetName
  location: location
  properties: {
    addressSpace: {
      addressPrefixes: [
        vnetAddressPrefix
      ]
    }
    subnets: [
      {
        name: 'default'
        properties: {
          addressPrefix: '10.0.0.0/24'
        }
      }
    ]
  }
}

resource appServicePlan 'Microsoft.Web/serverfarms@2021-01-01' = {
  name: appName
  location: location
  sku: {
    name: appServicePlanSku
  }
}

resource appInsights 'Microsoft.Insights/components@2020-02-02-preview' = {
  name: appInsightsName
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
  }
}

resource staticApp 'Microsoft.Web/staticSites@2020-12-01' = {
  name: staticAppName
  location: staticAppLocation
  sku: {
    name: staticAppSku
  }
  properties: {
    repositoryUrl: '<your-repository-url>'
    branch: '<your-branch>'
    buildProperties: {
      appLocation: '<app-location>'
      apiLocation: '<api-location>'
      appArtifactLocation: '<artifact-location>'
    }
  }
}

resource functionApp 'Microsoft.Web/sites@2021-01-01' = {
  name: appName
  location: location
  kind: 'functionapp'
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      appSettings: [
        {
          name: 'APPINSIGHTS_INSTRUMENTATIONKEY'
          value: appInsights.properties.InstrumentationKey
        }
        {
          name: 'WEBSITE_RUN_FROM_PACKAGE'
          value: '1'
        }
      ]
    }
  }
}