
var myComponet = {
  template: '<h2>中日MUJI网站商品价格比较 作者：王晓川</h2>'
};

function convertToCnUrl(s) {
  var pattern = /https:\/\/www.muji.net\/store\/cmdty\/detail\/(\d+)/;
  groups = pattern.test(s)
  return 'http://www.muji.com.cn/cn/store/goods/' + RegExp.$1
}

function convertToJpUrl(s) {
  var pattern = /http:\/\/www.muji.com.cn\/cn\/store\/goods\/(\d+)/;
  groups = pattern.test(s)
  return 'https://www.muji.net/store/cmdty/detail/' + RegExp.$1
}

var app = new Vue({
  el: '#app',
  data: {
    author: 'wangxiaochuan',
    urlJp: 'https://www.muji.net/store/cmdty/detail/4549738797371',
    urlCn: '',
    priceJp:'100',
    priceChangeUrl:'https://zh.coinmill.com/CNY_JPY.html'
  },
  components: {
    'my-component': myComponet
  },
  methods: {
    jpToCn: function () {
      var url = convertToCnUrl(this.urlJp);
      if (url) {
        this.urlCn = url
      }
    },
    cnToJp: function () {
      var url = convertToJpUrl(this.urlCn);
      if (url) {
        this.urlJp = url;
      }
    },
    getCnPriceUrl: function () {
      price = this.priceJp.replace(',', '').trim();
      this.priceChangeUrl = 'https://zh.coinmill.com/CNY_JPY.html#JPY=' + price;
      window.open(this.priceChangeUrl);
    }
  }
})

