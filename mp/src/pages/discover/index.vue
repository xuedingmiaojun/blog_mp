<template>
  <div class="main">
    <div class="nav-box">
      <div class="module flex" @click="navTo(1)">
        <image class="module-pic" src="/static/images/cloud.png" mode="aspectFit" />
        <div class="info">
          <div class="title">标签云</div>
          <div class="desc">博客网站标签云</div>
        </div>
      </div>
      <div class="module flex" @click="navTo(2)">
        <image class="module-pic" src="/static/images/mygzh.png" mode="aspectFit" />
        <div class="info">
          <div class="title">公众号文章</div>
          <div class="desc">同步极客之路公众号历史文章</div>
        </div>
      </div>
      <div class="module flex" @click="navTo(3)">
        <image class="module-pic" src="/static/images/p-note.png" mode="aspectFit" />
        <div class="info">
          <div class="title">产品笔记</div>
          <div class="desc">关于互联网产品的一点记录</div>
        </div>
      </div>
      <div class="module flex" @click="navTo(4)">
        <image class="module-pic" src="/static/images/xcx.png" mode="aspectFit" />
        <div class="info">
          <div class="title">小程序开发专区</div>
          <div class="desc">关于小程序开发的经验记录</div>
        </div>
      </div>
      <div class="module flex" @click="navTo(5)">
        <image
          class="module-pic"
          src="http://cdn.xuedingmiao.com/science-lover.jpg"
          mode="aspectFit"
        />
        <div class="info">
          <div class="title">科技爱好者周刊</div>
          <div class="desc">每周值得分享的科技内容</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    navTo(id) {
      var url = ''
      switch (id) {
        case 1:
          url = '/pages/tags/main'
          break
        case 2:
          url = '/pages/wx_article/main'
          break
        case 3:
          url = '/pages/search_blog/main?key=' + encodeURIComponent('产品')
          break
        case 4:
          url = '/pages/search_blog/main?key=' + encodeURIComponent('小程序')
          break
        default:
      }
      if (id === 5) {
        wx.navigateToMiniProgram({
          appId: 'wx5f4026aae509f4ae',
          path: '',
          extraData: {},
          envVersion: 'develop',
          success(res) {
            // 打开成功
          },
        })
        return
      }
      mpvue.navigateTo({
        url: url,
      })
    },
  },
  onShow() {},
  onReachBottom() {},
  onShareAppMessage() {},
  onShareTimeline() {},
  mounted() {
    wx.showShareMenu({ menus: ['shareAppMessage', 'shareTimeline'] })
  },
}
</script>

<style lang="less" scoped>
page {
  background: #fff;
}
.main {
  padding: 0 10px;
  .nav-box {
    margin-top: 30rpx;
    .module {
      margin: 0 40rpx 40rpx 40rpx;
      box-shadow: 0 0 8rpx 0 rgba(0, 0, 0, 0.1);
      border-radius: 16rpx;
      align-content: flex-start;
      padding: 40rpx;
      .module-pic {
        width: 100rpx;
        height: 100rpx;
        border-radius: 100%;
      }
      .info {
        font-size: 24rpx;
        color: #757575;
        margin-left: 30rpx;
        .title {
          color: #212121;
          font-size: 28rpx;
          font-weight: bold;
          margin-bottom: 25rpx;
        }
      }
    }
  }
}
</style>
