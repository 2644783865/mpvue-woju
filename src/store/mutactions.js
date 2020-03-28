export const mutations = {

  SET_MY_SHOP: (state, v) => state.myShops = v,

  SET_PARTNERSHOPS: (state, v) => state.partnerShops = v,

  SET_MY_BUYITEM_LIST: (state, v) => {
    console.log("SET_MY_BUYITEM_LIST")
    state.myBuyItems = v
  },

  SET_MY_ORDER: (state, v) => state.myOrders = v,

  USER_INFO: (state, v) => {
    // console.log("SET USERINFO TO", v)
    wx.setStorageSync("userInfo", v);
    state.userInfo = v
  },
  SET_ITEM: (state, v) => {
    console.log("SET_ITEM to" + v);
    wx.setStorageSync("currentItem", v);
    state.currentItem = v
  },
  PARTNER: (state, v) => {
    state.partner_list = v
  },
  //选中的团长
  SET_SELECT_PARTNER: (state, v) => {
    console.log("SET my_partner To", v)
    wx.setStorageSync("my_partner", v);
    state.my_partner = v;
  },
  //自己是不是团长
  SET_PARTNER: (state, v) => {
    console.log("我的团长信息", v);
    state.partner = v;
  },
  SET_BUYITEMLIST: (state, v) => {
    if (v && v.length > 0) {
      v.forEach(element => {
        element.Count = 0;
      });
      state.buyItems = v;
      wx.setStorageSync("SET_BUYITEMLIST", v);
    } else {
      state.buyItems = [];
      wx.setStorageSync("SET_BUYITEMLIST", []);
    }
  },
  SET_OPENID: (state, v) => {
    state.openid = v.openid;
    state.unionid = v.unionid;
    wx.setStorageSync("unionid", v.unionid);
    wx.setStorageSync("openid", v.openid);
    // console.log("OPENID:", v.openid, "UnionId", v.unionid)

  },
  SET_POSITION: (state, v) => {
    console.log("SOPENIDET_POSITION To", v)
    state.position = Object.assign({}, state.position, v);
    wx.setStorageSync("SET_POSITION", state.position);
  },

  SET_ORDERS: (state, v) => {
    console.log("SETORDERS", v);
    state.orders = v;
  },

  SET_SHOP_BUYITEMS: (state, {
    shopId,
    payload
  }) => {
    state.shopBuyItems = payload;
    console.log(state.shopBuyItems);
  },
  SET_REALNAMEINFO: (state, v) => state.realNameInfo = v,

  ADD_TO_CART: (state, v) => {
    console.log(v);
    //state.cartItems = [...state.cartItems.filter(z => z.Partner_Id != state.my_partner.Id), ...state.buyItems.filter(z => z.Count > 0 && z.Partner_Id == state.my_partner.Id)]
    // state.cartItems = [...state.buyItems.filter(z => z.Count > 0 && z.Partner_Id == state.my_partner.Id)]
    //如果是单品START
    if (v)
       state.cartItems = [v];
    else
       state.cartItems = [...state.buyItems.filter(z => z.Count > 0 && z.Partner_Id == state.my_partner.Id)];
    //单品END

    //原价
    state.totalPrice = state.cartItems.reduce((c, n) => {
      if(n.BuyItem.CountItems && n.BuyItem.CountItems.length>0)
      {
        return  n.BuyItem.CountItems.reduce((cc,nn) =>  cc  + (n.BuyItem * nn.Count) , 0) + n.Count
      }
      else{
        return c + (n.BuyItem.Price * n.Count)
      }
    } , 0);

    //购物车数量
    state.total = state.cartItems.reduce((c, n) => {
      if(n.BuyItem.CountItems && n.BuyItem.CountItems.length>0)
      {
        return  n.BuyItem.CountItems.reduce((cc,nn) => cc + nn.Count , 0) + n.Count
      }
      else{
        return c + n.Count
      }
    }, 0);

    //需支付的价格
    state.totalVipPrice = state.cartItems.reduce((c, n) =>{
      if(n.BuyItem.CountItems && n.BuyItem.CountItems.length>0)
      {
        return n.BuyItem.CountItems.reduce((cc,nn) => cc  + (nn.Price * nn.Count) , 0)
      }
      else{
        return c + (n.BuyItem.VipPrice * n.Count)
      }
    } , 0);
    console.log(state.cartItems, state.total, state.totalPrice, state.totalVipPrice);
  },

  ADD_SEARCHHISTORY: (state, v) => {
    //取前6个,去重
    state.searchHistory = Array.from(new Set([v, ...state.searchHistory.slice(0, 5)]));
    wx.setStorageSync("searchHistory", state.searchHistory);
  }
}
export default
mutations
;
