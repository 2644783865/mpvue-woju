import api from '../utils/api';

export const actions = {

  //我的页面进入
  get_setting: ({
    commit
  }, v) => {
    return new Promise((resolve, reject) => {
      api.get_setting()
        .then(res => {
          commit("SET_MY_SHOP", res.myShops);
          commit("SET_MY_ORDER", res.myOrders);
          commit("SET_PARTNER", res.partner);
          return resolve();
        })
        .catch(err => reject(err));
    })

  },
  //选中团长
  select_partner: (context, v) => {
    return new Promise((resolve, reject) => {
      context.commit("SET_SELECT_PARTNER", v)
      resolve()
    });
  },

  //加入购物车
  add_to_cart: ({
    commit
  }, v) => {
    // console.log("ADD_TO_CART", v)
    return new Promise((resolve, reject) => {
      commit("ADD_TO_CART", v)
      resolve;
    });
  },

  getOrders: ({
    commit
  }, v) => api.getOrders(v).then(res => {
    commit("SET_ORDERS", res);
  }),

  getShopBuyItems: ({
    commit
  }, v) => api.getShopBuyItems(v).then(res => {
    commit("SET_SHOP_BUYITEMS", {
      shopId: v,
      payload: res
    });
  })
}

export default actions;
