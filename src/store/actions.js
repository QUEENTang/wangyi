import {
  RECEIVE_HEADCATE,
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_CATELIST,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_TOPICLIST,
  RECEIVE_BANNERS,
  RECEIVE_COLUMNS,
  RECEIVE_FINDMORE,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEEN,
  RECEIVE_YXLOOK,
  RECEIVE_ZHENPIN,
  RECEIVE_CATEGORY
} from "./mutation-types"

import {
  reqHeadCateList,
  reqFocusList,
  reqTagList,
  reqCateList,
  reqFlashSaleIndexVO,
  reqNewItemList,
  reqPopularItemList,
  reqTopicList,
  reqBanner,
  reqColumn,
  reqFindMore,
  reqRecommend,
  reqTenfifteen,
  reqYxLook,
  reqZhenpin,
  reqCategory
} from "../api"


export default {
  async getHeadCateList ({commit}) {
    const result = await reqHeadCateList();
    if(result.code === 0) {
      const headCates = result.data;
      commit(RECEIVE_HEADCATE, {headCates})
    }
  },

  async getFocusList ({commit}) {
    const result = await reqFocusList();
    if(result.code === 0) {
      const focusLists = result.data;
      commit(RECEIVE_FOCUSLIST, {focusLists})
    }
  },

  async getTagList ({commit}) {
    const result = await reqTagList();
    if(result.code === 0) {
      const tagLists = result.data;
      commit(RECEIVE_TAGLIST, {tagLists})
    }
  },
  async getNewItemList ({commit}) {
    const result = await reqNewItemList();
    if(result.code === 0) {
      const newItemLists = result.data;
      commit(RECEIVE_NEWITEMLIST, {newItemLists})
    }
  },

  async getPopularItemList ({commit}) {
    const result = await reqPopularItemList();
    if(result.code === 0) {
      const popularItemLists = result.data;
      commit(RECEIVE_POPULARITEMLIST, {popularItemLists})
    }
  },

  async getFlashSaleIndexVO ({commit}) {
    const result = await reqFlashSaleIndexVO();
    if(result.code === 0) {
      const flashSaleIndexVO = result.data;
      commit(RECEIVE_FLASHSALEINDEXVO, {flashSaleIndexVO})
    }
  },

  async getTopicList ({commit}) {
    const result = await reqTopicList();
    if(result.code === 0) {
      const topicLists = result.data;
      commit(RECEIVE_TOPICLIST, {topicLists})
    }
  },

  async getCateList ({commit}) {
    const result = await reqCateList();
    if(result.code === 0) {
      const cateLists = result.data;
      commit(RECEIVE_CATELIST, {cateLists})
    }
  },

  //识物
  async getBanner ({commit}) {
    const result = await reqBanner();
    if(result.code === 0) {
      const banners = result.data;
      commit(RECEIVE_BANNERS, {banners})
    }
  },
  async getColumn ({commit}) {
    const result = await reqColumn();
    if(result.code === 0) {
      const columns = result.data;
      commit(RECEIVE_COLUMNS, {columns})
    }
  },
  async getFindMore ({commit}) {
    const result = await reqFindMore();
    if(result.code === 0) {
      const findMore = result.data;
      commit(RECEIVE_FINDMORE, {findMore})
    }
  },
  async getRecommend ({commit}) {
    const result = await reqRecommend();
    if(result.code === 0) {
      const recommend = result.data;
      commit(RECEIVE_RECOMMEND, {recommend})
    }
  },
  async getTenfifteen ({commit}) {
    const result = await reqTenfifteen();
    if(result.code === 0) {
      const tenfifteen = result.data;
      commit(RECEIVE_TENFIFTEEN, {tenfifteen})
    }
  },
  async getYxLook ({commit}) {
    const result = await reqYxLook();
    if(result.code === 0) {
      const yxLook = result.data;
      commit(RECEIVE_YXLOOK, {yxLook})
    }
  },
  async getZhenpin ({commit}) {
    const result = await reqZhenpin();
    if(result.code === 0) {
      const zhenpin = result.data;
      commit(RECEIVE_ZHENPIN, {zhenpin})
    }
  },


  async getCategory ({commit}) {
    const result = await reqCategory();
    if(result.code === 0) {
      const category = result.data;
      commit(RECEIVE_CATEGORY, {category})
    }
  }

}

