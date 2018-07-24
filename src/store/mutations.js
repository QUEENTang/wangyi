import {
  RECEIVE_HEADCATE,
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_CATELIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_TOPICLIST,
  RECEIVE_YXLOOK,
  RECEIVE_TENFIFTEEN,
  RECEIVE_RECOMMEND,
  RECEIVE_FINDMORE,
  RECEIVE_COLUMNS,
  RECEIVE_BANNERS,
  RECEIVE_ZHENPIN,
  RECEIVE_CATEGORY
} from "./mutation-types"

export default {
  [RECEIVE_HEADCATE] (state, {headCates}) {
    state.headCates = headCates;
  },
  [RECEIVE_FOCUSLIST] (state, {focusLists}) {
    state.focusLists = focusLists;
  },
  [RECEIVE_TAGLIST] (state, {tagLists}) {
    state.tagLists = tagLists
  },
  [RECEIVE_NEWITEMLIST] (state, {newItemLists}) {
    state.newItemLists = newItemLists;
  },
  [RECEIVE_POPULARITEMLIST] (state, {popularItemLists}) {
    state.popularItemLists = popularItemLists;
  },
  [RECEIVE_FLASHSALEINDEXVO] (state, {flashSaleIndexVO}) {
    state.flashSaleIndexVO = flashSaleIndexVO;
  },
  [RECEIVE_CATELIST] (state, {cateLists}) {
    state.cateLists = cateLists;
  },
  [RECEIVE_TOPICLIST] (state, {topicLists}) {
    state.topicLists = topicLists;
  },

  //识物
  [RECEIVE_BANNERS] (state, {banners}) {
    state.banners = banners;
  },
  [RECEIVE_COLUMNS] (state, {columns}) {
    state.columns = columns;
  },
  [RECEIVE_FINDMORE] (state, {findMore}) {
    state.findMore = findMore;
  },
  [RECEIVE_RECOMMEND] (state, {recommend}) {
    state.recommend = recommend;
  },
  [RECEIVE_TENFIFTEEN] (state, {tenfifteen}) {
    state.tenfifteen = tenfifteen;
  },
  [RECEIVE_YXLOOK] (state, {yxLook}) {
    state.yxLook = yxLook;
  },
  [RECEIVE_ZHENPIN] (state, {zhenpin}) {
    state.zhenpin = zhenpin;
  },


  [RECEIVE_CATEGORY] (state, {category}) {
    state.category = category;
  }
}
