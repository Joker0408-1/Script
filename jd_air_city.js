/*
const $ = new Env('城城分现金助力');
0,5 0 * * * https://raw.githubusercontent.com/Joker0408-1/Script/main/jd_air_city.js
*/
let common = require("./function/common");
let $ = new common.env('城城分现金助力');
let min = 3,
    help = $.config[$.filename(__filename)] || Math.min(min, $.config.JdMain) || min;
$.setOptions({
    headers: {
        'content-type': 'application/json',
        'user-agent': 'jdapp;iPhone;9.4.6;14.2;965af808880443e4c1306a54afdd5d5ae771de46;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone8,4;addressid/;supportBestPay/0;appBuild/167618;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'referer': 'https://happy.m.jd.com/babelDiy/Zeus/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html',
    }
});
$.readme = `
0 0 * * * task ${$.runfile}
exprot ${$.runfile}=2  #如需增加被助力账号,请自行修改环境变量
`
eval(common.eval.mainEval($));
async function prepare() {
    let params = {
        'url': 'https://api.m.jd.com/client.action',
        'form': 'functionId=city_getHomeData&body={"lbsCity":"","realLbsCity":"","inviteId":"","headImg":"","userName":""}&client=wh5&clientVersion=1.0.0&uuid=7b22d4690ef13716984dcfcf99998f36b41f6c51'
    }
    for (let i of cookies['help']) {
        $.setCookie(i);
        await $.curl(params)
        try {
            $.sharecode.push({
                'inviteId': $.source.data.result.userActBaseInfo.inviteId
            })
        } catch (e) {}
    }
}
async function main(id) {
    let params = {
        'url': 'https://api.m.jd.com/client.action',
        'form': `functionId=city_getHomeData&body={"lbsCity":"","realLbsCity":"","inviteId":"${id.inviteId}","headImg":"","userName":""}&client=wh5&clientVersion=1.0.0&uuid=7b01d4690ef13716984dcfcf96068f36b41f6c51`,
        'cookie':id.cookie
    }
    await $.curl(params,'s')
    console.log($.s.data.result.toasts||'可能是自己的号或账号过期了')
}
