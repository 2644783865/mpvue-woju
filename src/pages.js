// pages.js

const usingComponents = {
  "van-button": "/static/dist/button/index",
  "van-toast": "/static/dist/toast/index",
  "van-tag": "/static/dist/tag/index",
  "van-icon": "/static/dist/icon/index",

  "van-row": "/static/dist/row/index",
  "van-col": "/static/dist/col/index",
  "van-cell": "/static/dist/cell/index",
  "van-switch-cell": "/static/dist/switch-cell/index",
  "van-panel": "/static/dist/panel/index",

  "van-card": "/static/dist/card/index",

  "van-tabbar": "/static/dist/tabbar/index",
  "van-tabbar-item": "/static/dist/tabbar-item/index",
  "van-goods-action": "/static/dist/goods-action/index",
  "van-goods-action-icon": "/static/dist/goods-action-icon/index",
  "van-goods-action-button": "/static/dist/goods-action-button/index",
  "demo-block": "/static/demo-block/index"
}

module.exports = [{
    path: 'pages/index/index',
    config: {
      navigationBarTitleText: '',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {})
    }
  },
  {
    path: 'pages/index/cart',
    config: {
      navigationBarTitleText: '',
      usingComponents: Object.assign({}, usingComponents, {
        "van-submit-bar": "/static/dist/submit-bar/index"
      })
    }
  },
  {
    path: 'pages/index/my',
    config: {
      navigationBarTitleText: '',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {})
    }
  },
  {
    path: 'pages/index/choosePartner',
    config: {
      navigationBarTitleText: '',
      usingComponents: Object.assign({}, usingComponents, {})

    }
  },
  {
    path: 'pages/item/itemDetail',
    config: {
      navigationBarTitleText: '',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {
        "wxparser": "plugin://wxparserPlugin/wxparser"
      })
    }
  },
  {
    path: 'pages/index/address',
    config: {
      navigationBarTitleText: '',
      usingComponents: Object.assign({}, usingComponents, {
        "van-search": "/static/dist/search/index"
      })
    }
  },
  {
    path: 'pages/shop/addItem',
    config: {
      navigationBarTitleText: '新建商品',
      usingComponents: Object.assign({}, usingComponents, {
        "van-field": "/static/dist/field/index",
        "van-checkbox": "/static/dist/checkbox/index",
        "van-checkbox-group": "/static/dist/checkbox-group/index",
        "van-dialog": "/static/dist/dialog/index",
      })
    }
  },
  {
    path: 'pages/logs/logs',
    config: {
      navigationBarTitleText: '',
      usingComponents: Object.assign({}, usingComponents, {})
    }
  },
  {
    path: 'pages/shop/buyItems',
    config: {
      navigationBarTitleText: '店铺商品列表',
      usingComponents: Object.assign({}, usingComponents, {})
    }
  },
  {
    path: 'pages/shop/orders',
    config: {
      navigationBarTitleText: '店铺订单',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {})
    }
  }
]