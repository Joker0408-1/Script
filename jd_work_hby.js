let common = require("./function/common");
let $ = new common.env('京东1111红包雨');
let min = 3,
    help = $.config[$.filename(__filename)] || Math.min(min, $.config.JdMain) || min
$.setOptions({
    headers: {
        'content-type': 'application/json',
        'user-agent': 'jdapp;iPhone;9.4.6;14.2;965af808880443e4c1306a54afdd5d5ae771de46;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,4;addressid/;supportBestPay/0;appBuild/167618;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'referer': 'https://happy.m.jd.com/babelDiy/Zeus/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html',
    }
});
$.readme = `
0 20-23 * * * task ${$.runfile}
`
eval(common.eval.mainEval($));
async function prepare() {
    $.thread=1
}
async function main(p) {
    let cookie = p.cookie
       await $.curl({
                'url': `https://api.m.jd.com/client.action`,
                'form': `functionId=hby_lottery&appid=publicUseApi&body={"babelProjectId":"01070253","babelPageId":"3121352"}&t=1635773601055&client=wh5&clientVersion=1.0.0&sid=d4a53500bd7c0c8ea5d79fb565a88a6w&uuid=cf7d37dca8a734567c142227f504a8e2aff131e7&area=16_1341_1347_44750&networkType=wifi&ext={"prstate":"0"}`,
                cookie
            },'s'
        )
        console.log(p.user, $.s.data.result);
        try {
            $.notices($.s.data.result.hbInfo.discount, p.user)
        } catch (e) {
        }
}
