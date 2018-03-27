<template>
  <div class="hello">
    <div class="item-section">
      <div class="item-section_header">
        <h2><img v-bind:src="brannerImag" alt=""></h2>
      </div>
      <!--
      <ul>
        <li v-for="item in items"  class="flag" role="link" href="{{item.itemLink}}">
          <a class="figure flag-item" href="{{item.itemLink}}">
            <img src="{{item.imgSrc}}" alt=""> </a>
          <div class="figcaption flag-item">
            <div class="flag-title">
              <a href="{{item.itemLink}}" title="">{{item.poductName}}</a>
            </div>
            <div class="flag-price">
              <span>双11价</span>
              <strong>¥{{item.price}}</strong>
              <small>({{item.preferential}})</small>
            </div>
            <div class="flag-type">{{item.activityType}}</div>
            <a class="flag-btn" href="{{item.shopLink}}">{{item.activeName}}</a>
          </div>
        </li>
      </ul>
      -->
    </div>
    <!--
    <swiper v-ref:swiper
            direction="vertical"
            :mousewheel-control="true"
            :performance-mode="false"
            :pagination-visible="true"
            :pagination-clickable="true"
            :loop="true"
            @slide-change-start="onSlideChangeStart"
            @slide-change-end="onSlideChangeEnd">
      <div>

      </div>
      <div>Page 2</div>
      <div>Page 3</div>
    </swiper>
    -->
  </div>
</template>

<script>
  import Vue from 'vue'
  import Swiper from 'vue-swiper'

export default {
  el: '#app',
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      brannerImag: "http://gw.alicdn.com/mt/TB1PNLZKXXXXXaTXXXXXXXXXXXX-750-481.jpg",
      items:[
            {
            "itemLink": "##",
            "imgSrc": "https://placeimg.com/350/350/people/grayscale",
            "poductName":"Carter's1年式灰色长袖连体衣包脚爬服全棉鲸鱼男婴儿童装115G093",
            "price": "299.06",
            "preferential": "满400减100",
            "activityType": "1小时内热卖5885件",
            "shopLink":"##",
            "activeName": "马上抢！"
          },{
            "itemLink": "##",
            "imgSrc": "https://placeimg.com/350/350/people/grayscale",
            "poductName":"Nike耐克官方ZOOM KOBE VENOMENON 5 EP 科比男子篮球鞋815757",
            "price": "699.50",
            "preferential": "满300减150",
            "activityType": "6744人正在疯抢",
            "shopLink":"##",
            "activeName": "马上抢！"
          },{
            "itemLink": "##",
            "imgSrc": "https://placeimg.com/350/350/people/grayscale",
            "poductName":"现货【送皮套+钢膜+耳机】Xiaomi/小米 红米Note2手机note2",
            "price": "799.00",
            "preferential": "满300减150",
            "activityType": "7833人正在疯抢",
            "shopLink":"##",
            "activeName": "马上抢！"
          },{
            "itemLink": "##",
            "imgSrc": "https://placeimg.com/350/350/people/grayscale",
            "poductName":"ONLY2015秋装新品七分袖弹力修身针织衫女",
            "price": "299.00",
            "preferential": "满300减100",
            "activityType": "2379人想买",
            "shopLink":"##",
            "activeName": "马上抢！"
          },{
            "itemLink": "##",
            "imgSrc": "https://placeimg.com/350/350/people/grayscale",
            "poductName":"Levi's李维斯513春季男士修身直筒牛仔裤长裤",
            "price": "399.00",
            "preferential": "满300减100",
            "activityType": "预热期加购TOP1",
            "shopLink":"##",
            "activeName": "马上抢！"
          },{
            "itemLink": "##",
            "imgSrc": "https://placeimg.com/350/350/people/grayscale",
            "poductName":"Levi's李维斯513春季男士修身直筒牛仔裤长裤",
            "price": "399.00",
            "preferential": "满300减100",
            "activityType": "预热期加购TOP1",
            "shopLink":"##",
            "activeName": "马上抢！"
          }]
    }
  },
  methods: {
    onSlideChangeStart (currentPage) {
      console.log('onSlideChangeStart', currentPage);
    },
    onSlideChangeEnd (currentPage) {
      console.log('onSlideChangeEnd', currentPage);
    }
  }
}
</script>
<style lang="scss">
  @mixin font-dpr($font-size){
    font-size: $font-size;
    [data-dpr="2"] & {
      font-size: $font-size * 2;
    }
    [data-dpr="3"] & {
      font-size: $font-size * 3;
    }
  }
  @mixin px2rem($property,$px-values,$baseline-px:75px,$support-for-ie:false){
    $baseline-rem: $baseline-px / 1rem * 1;
    @if $support-for-ie {
      #{$property}: $px-values;
    }
    @if type-of($px-values) == "number"{
      #{$property}: $px-values / $baseline-rem;
    }
    @else {
      $rem-values:();
      @each $value in $px-values{
        @if $value == 0 or type-of($value) != "number"{
          $rem-values: append($rem-values, $value / $baseline-rem);
        }
      }
      #{$property}: $rem-values;
    }
  }
  .hello{
    width: 100%;
    height: 500px;
  }
  .swiper {
    position: relative;
    overflow: hidden;
    height: 100%;
    .swiper-wrap {
      display: flex;
      width: 100%;
      height: 100%;
      transition: all 0ms ease;
      div {
        overflow: hidden;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
      }
    }

    &.horizontal .swiper-wrap {
      flex-direction: row;
    }

    &.vertical .swiper-wrap {
      flex-direction: column;
    }

    .swiper-pagination {
      position: absolute;

      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #000000;
        opacity: .2;
        transition: all .5s ease;
      }

      .swiper-pagination-bullet.active {
        background: #007aff;
        opacity: 1;
      }
    }

    &.vertical .swiper-pagination {
      right: 10px;
      top: 50%;
      transform: translate3d(0, -50%, 0);

      .swiper-pagination-bullet {
        display: block;
        margin: 6px 0;
      }
    }

    &.horizontal .swiper-pagination {
      bottom: 10px;
      width: 100%;
      text-align: center;

      .swiper-pagination-bullet {
        display: inline-block;
        margin: 0 3px;
      }
    }
  }
  .item-section{
    min-height:100%;
    background-color:#ee0a3b;
    position:relative;
    @include font-dpr(12px);
    ul{padding:.133333rem}
    .flag{display:table;width:100%;margin-bottom:1px;background-color:#fff;
      .flag-item{display:table-cell;padding:.16rem 0;vertical-align:top;background-color:#fff;
        img{width:2.4rem;height:2.4rem;vertical-align:top;}
      }
      .figcaption{width:133.333333rem;padding-left:.2rem;padding-right:.2rem;position:relative;}
      .figure{width:2.4rem;height:2.4rem;}

      .flag-title {
        a {
          color: #333;
          line-height: 1.25;
          overflow: hidden;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          box-orient: vertical;
          display: -webkit-box;
          display: box;
        }
      }
      .flag-price{padding:.15rem 0 .2rem;
        strong{
          display:inline-block;
          vertical-align:middle;
          font-weight:700;
          color:#ee0a3b;
          font-size:16px;
          @include font-dpr(16px);
          margin-right:.16rem;
        }
        span {
          display: inline-block;
          background-color: #ee0a3b;
          vertical-align: middle;
          border-radius: .026667rem;
          padding: .026667rem .08rem .013333rem;
          color: #fff;
          font-weight: 700;
          margin-right: .066667rem;
          font-size: 11px;
          @include font-dpr(11px);
        }
        small {
          display: inline-block;
          vertical-align: middle;
          font-weight: 700;
          color: #ee0a3b;
          font-size: 12px;
          @include font-dpr(12px);
        }
      }
      .flag-type{color:#ff3600}
      .flag-btn{position:absolute;
        width:2.133333rem;
        height:.64rem;
        line-height:.64rem;
        background-color:#ee0a3b;
        text-align:center;
        color:#fff;
        font-weight:700;
        font-size:14px;
        @include font-dpr(12px);
        bottom:.133333rem;
        right:.2rem;
        border-radius:.026667rem;
      }

    }
    .item-section_header{
      text-align:center;
      img{
        @include px2rem(width,750px);
      }
    }
  }



</style>
