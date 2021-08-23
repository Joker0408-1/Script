
  const senku=init()
  const url = "https://vsurvey.cxmt.com:8011/Survey/joinResult";
  const body = "submitdata=1%24S210820017%7D15%24E03107%7D27%24%E5%91%A8%E5%87%AF%7D33%24%E5%90%A6%7D34%24(%E8%B7%B3%E8%BF%87)%7D35%24%E6%97%A0%E5%BC%82%E5%B8%B8%7D49%24%E6%98%AF%7D50%24d6gh";
  const headers = {
    "Origin": "https://vsurvey.cxmt.com:8011",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Cookie": "ip_=%2C; Hm_lpvt_4df34cb0d9d0657878e0e811b589d22f=1629691390; Hm_lvt_4df34cb0d9d0657878e0e811b589d22f=1629691390; Hm_lpvt_d166fc62aa563fb6f83eee5dab090a33=1629691386; Hm_lvt_d166fc62aa563fb6f83eee5dab090a33=1629691159; ASP.NET_SessionId=xccwvzlux3wv15xpch3r4ftq",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Host": "vsurvey.cxmt.com:8011",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.10(0x18000a29) NetType/4G Language/zh_CN",
    "Referer": "https://vsurvey.cxmt.com:8011/Pages/nCoVDaySurvey.html?t=1629691389050&_f=/Pages/nCoVDaySurvey.html",
    "Accept-Language": "zh-cn",
    "X-Requested-With": "XMLHttpRequest",
    "Accept": "text/plain, */*; q=0.01"
};
  const request = {
      url: url,
      headers: headers,
      body: body
  };
  
  senku.post(request, function(error, response, data) {
      try {
      	senku.log(data)
          const res=JSON.parse(data)
          //这里是以后要写的代码,大概几行就写完了
          senku.done();
          
      } catch(e) {
          senku.log(e)
          senku.done();
      }
  });
  
  function init() {
    isSurge = () => {
        return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
        return undefined === this.$task ? false : true
    }
    getdata = (key) => {
        if (isSurge()) return $persistentStore.read(key)
        if (isQuanX()) return $prefs.valueForKey(key)
    }
    setdata = (key, val) => {
        if (isSurge()) return $persistentStore.write(key, val)
        if (isQuanX()) return $prefs.setValueForKey(key, val)
    }
    msg = (title, subtitle, body) => {
        if (isSurge()) $notification.post(title, subtitle, body)
        if (isQuanX()) $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
        if (isSurge()) {
            $httpClient.get(url, cb)
        }
        if (isQuanX()) {
            url.method = 'GET'
            $task.fetch(url).then((resp) => cb(null, resp, resp.body))
        }
    }
    post = (url, cb) => {
        if (isSurge()) {
            $httpClient.post(url, cb)
        }
        if (isQuanX()) {
            url.method = 'POST'
            $task.fetch(url).then((resp) => cb(null, resp, resp.body))
        }
    }
    done = (value = {}) => {
        $done(value)
    }
    return {
        isSurge,
        isQuanX,
        msg,
        log,
        getdata,
        setdata,
        get,
        post,
        done
    }
}
  
