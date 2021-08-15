

const jobname = 'shuqi'
const $ = Env(jobname)


!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
    //nodejs运行
    await dailysign();
    await $.wait(1000);
    await vedioreward();
    await $.wait(1000);
    await vediorewarddraw();
    await $.wait(1000);
    await drawreward();
    await $.wait(1000);
    await read();
    await $.wait(1000);
    await share();
    await $.wait(1000);
    await receive();
    await $.wait(1000);
    await jsdailysign();
    await $.wait(1000);
    await jsvedioreward20();
    await $.wait(1000);
    await  jsvedioreward10();
    await $.wait(1000);
    await  jsshucheng();
    await $.wait(1000);
    await jsshare();
    await $.wait(1000);
    await jsread()
}


function receive() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.0.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.0.0) 1125x2436 Winding(WV_6) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=bCxLedRLOls1JDV7SC1arg%2BRtgLyo21t&msv=8.0.0&brand=Apple&imei=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw&skinColor=23B383&platform=iOS&ver=210107&mod=iPhoneXS&statusBarHeight=44.000000&skinVersion=1&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
    "Content-Length": "1229",
    "Accept-Language": "zh-cn"
};
         const body = "src=204&userId=2916901745&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1629068787&sqSv=1.0&sign=2c2acb044b04498358f5e430d7289311&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  



function share() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.0.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.0.0) 1125x2436 Winding(WV_6) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=bCxLedRLOls1JDV7SC1arg%2BRtgLyo21t&msv=8.0.0&brand=Apple&imei=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw&skinColor=23B383&platform=iOS&ver=210107&mod=iPhoneXS&statusBarHeight=44.000000&skinVersion=1&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
    "Content-Length": "1867",
    "Accept-Language": "zh-cn"
};
         const body = "actTaskId=304&wua=HIVW_rFCYW%2F75f%2F0UT9GG2FnV2A2NMl18v8cypDXyPzwHoXpHvM9Sj8x9Xaer90X3Ex3xEFnbWBSmpOTP0HMTLFIlOqL8ieZCImaGK6ml%2BdD%2BrnCif2BwON5qd0r0wK9ilMbf3dRIP20XdiGR09pEgcnz%2BIBdBfSFQi1Yvro3jk7%2BC4KEmYX5z%2F97AsNcqlLU3lbM9S54BUslgjjZAbo99vwMihUQ2nNMBBv68WbHgIfoHNVk%2BG78VXGWVe0AirKtUZr7et0fx5yAgBCbHY9AJr4eqTprqzc12xdF8ABdk1%2FjvdmEXlG5gsSyAzKD5FYRCCVDwcXHbYOmVwGSzLFJNaYwDw%3D%3D&ua=&miniWua=HHnB_do1QttZtzGDlGXrbYgiv%2Bq4BdvuNZTvRZZIUolmgFDFfhGjvF0uVJRSdZ4fSZ5inFjxFosy%2BqkiMhmAwQb%2BxaXBLMMQqgMV2PjQgIZeQQAlPUHAcmu0yucFW%2FaxKWHc2&userId=2916901745&umidtoken=bCxLedRLOls1JDV7SC1arg%2BRtgLyo21t&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1629068621&sqSv=1.0&sign=51d6207fa28759325222146e2be4a0a3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

function jsread() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.6&ustatus=1&umidtoken=wGRLAd1LOjxByTV7SSyOvpA4qSfDtolT&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000";
         const headers = {
    "Cookie": "isg=BLy8y1cg8VYBisUd1W4whMJzh15utWDf1ibuiJY9WafvYRzrvsWNbVLBRw8ZMpg3; cna=BXqeGVTd73sCAatTLPUxYOJB",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
    "Content-Length": "603",
    "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
};
         const body = "actId=355&miniWua=HHnB_c/ctO11SSNODDkG3RkNbzMkUI8EWCg/PA5SjzH7YwOUBhR9NOI3WOKepUeKY0UGAtKwawndI2MzObr1L3XdWOjNF4k155i8%2BWcrsTNbqHkk2sy3bYyrPU7hMMDK/zgMd&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1629066304&userId=2916901745&wua=ktgi_aLfYfZH9LUibJBQjBTegTnJOd903oB6hZUaJ4lDIQTGmCCNaidE7Q0abSs8D8/SI%2BT/LHAdRQ8Nn6hCo6VExvP4aQk1kDqIzMdFbDOE22TOz6zs9w2cjgkzQ/wKQYdBscVMMkuP7zWnx5ZpyqzZAlr5gTRHxaKKKU5IRNMPzatgeT/erhUaZkwt%2BwOBr9ng4MQJ2SWybvKd3M9Dw0riw3coH0UR6BVLPMf0UgW1cxM9kYzRb7ddDyleCp%2BRoXmczfn1DvsRSJaRFwnAAu8NcgK9iXFaEFsw6f3LUG7nZGVGr67Pe0uDsLt1c%2BiaER7JV";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await jsread();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

function read() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BDIyVn-9h1VRsrtp7nV3yEDjiXwUwzZdhviC__wLa-Xtj_aJ5FO0byale60z5K71; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DXblVsgqHUiwDAN7BcQnm2A/p%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzMDkxMCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMjUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.XflxZv-XcfSRCM8xOPe9cTov51UPtAsEGN8uNnu59Gl-GykDa9PiD6hLSmBft0gUKXmJZ-jUuql5wFtceuB8zw%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=707&key=sq_app_ad&miniWua=HHnB_U3vcrUclZBGI8xgdUJ8toyc%2Bcu3V7L6584b4LJIqAo9rKD4xOidudtaDEkcZkA34sDtTnXBwQcsP06dfIT%2BwJny1aqZ4O0U9X4YOywUGltpZN1pnlmCAZT/aayksQ%2BsR&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D68E7080F23E0123C177D2F090C22836&timestamp=1629014445&userId=2916901745&wua=HIVW_5GYaKaLjxLSXInwlxv92LU3UYSySyk5Zb1vIqiSKppZ3k/5ybmHegQJtI6SFnGMca6CRW8KEDuZTBpJG3oWo9wQTHmeBIvTt1/3VesMgxwl/6ump9ia7jvKwqSpZjY7Hq5JON%2Bzk/QhpAfitngKoSxhPKHLDAzpbRZTU06Vs7egZTirraGpMjB9685eeUXqfQt%2BAo%2BaRqFym8u40CdVOPOALEMLGQGGCmQFS9VolpMGFfhS4Iw4vELFzXblrumStKtxJZPnJw7EJ7px/sw9POkjSsxGRc2IEwjcocqaYJ2ueMxvhZzim/Cvk8v2wOFKbIewXvqnvtCG/mnPdf8grdg%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await read();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function timeupload() {
    return new Promise((resolve, reject) => {
        const url = "https://jcollection.shuqireader.com/collection/iosapi/reading/upload";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BBgYkueLzeNc6OFnwPftXvbB40KqAXyLn_CVz1IJV9MG7Y7X-hHiGkGHIaNdZjRj; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "jcollection.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%253D999%2526idfa%253D00000000-0000-0000-0000-000000000000%2526ustatus%253D1%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%2526user_id%253D2916901745%2526sn%253D9FFC2945934B0127160C769D23FE8D9606CB0FAE%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%2526skinVersionPrefix%253D1%2526appVer%253D4.3.0.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzNDc2MiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxNjM2Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.pQFbLw8WrDYjlNnOeO7kfBHqW7-LZyZjZ-Mwk03SWaYrfQ2QspcF26DKI4wsmDChqyHv3SJ_GxVlhObZu1Yvsw%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210107%2526mod%253DiPhoneXS%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1125x2436%2526soft_id%253D21%2526utdid%253DXblVsgqHUiwDAN7BcQnm2A%252Fp%2526utype%253Dvip%2526sdk%253D14.6&key=and_log&readingList=%5B%7B%22startTime%22%3A1629016791%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227370011%22%2C%22readChapterId%22%3A938736%2C%22readingLen%22%3A6%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=67E3DB2C6F946BEF9D018989F4B3AEFC&timestamp=1629016797&user_id=2916901745";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsshare() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "1802",
            "Accept-Language": "zh-cn"
        };
        const body = "actTaskId=327&wua=ktgi_3Tz5Q%2FQuk9FImWbBSzUm%2FN%2Bk4wjoUc%2B%2Bg1Aj6lUFVL4lg3uSd%2FFuCjVsuYudoADGIvP9utkK8wQV%2BSY%2FQypkIEXr8KOinM0h8%2BeI2NF8dXcFW0t5WNRr1YiNpqryTfNciZIeB4IJ3KjlIMxZo7eKxxIbJcAkJ3k6bIiLp0cknSAZrNfPzAOkdHsAojTkuy2LdZKlH2A%2FDactl2%2FpOAJ%2BGNKuJ9rpztz9vudqBp%2FRntPQGQtY3D8iXwr8hf2wAQLUPDq6JiL61j1hOpkWTNlVMnxPvdUN%2Fe342gejaSHVv5zf8cb9Nwn5kyeWB24%2FCSL1b%2Bc8sX%2FUJMphr1cVo%2BQkqA%3D%3D&ua=&miniWua=HHnB_7DYrUuJn7%2BnkozmoMtJTDJ9slmM%2BjM1PYHVyaLHA7ICaKM0PxVvZBwHm7AMjlluCye8qqlxYykLPLjpzWyFR3%2BvBeJc3%2BcAY%2BMqUnpglCzESxBZZ0QEXM0ikiHUP3cuv&userId=2916901745&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629016036&sqSv=1.0&sign=5c6651e003dcf4d7104c01a870581bce&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.6%26ustatus%3D1%26umidtoken%3DCJFLLxhLOp%252Bu3zV7QyKs806Y%252BvW9YrOA%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function jsshucheng() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000";
        const headers = {
            "Cookie": "isg=BOHh2SrJJKggsYjKICUFi094-qn7jlWAS31jv0O28ennqgp8i999UQGgCFgsee24; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Content-Length": "100",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2916901745";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function jsvedioreward10() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BMHBbsFARAgBa6gqAIVl62-Y2gnb7jXga-9oWCMW0EiKCsXcaz76sNhA6PhMGc0Y; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DCJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26sdk%3D14.6&deliveryId=897&key=sq_app_ad&miniWua=HHnB_3SMWpVcrf%2BGigHsqHAbaMwFZjmFYm/nSWDLJ5MCjNLvVFtYMwQJEaFFm5sFGqFQ0hCqOXKk1d1MBbmEzQRNjNAGg/HPQe%2B6SZQCZa%2BgRylsfQ7NHm//jwtWr%2BOe89EbQ&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=A1C6AC2353277A8E0CD35370A39ADDC8&timestamp=1629015720&userId=2916901745&user_id=2916901745&wua=ktgi_KWcfFAwrcl4kSYsk%2BqAf/XvZ/3UoOoaWSR4pkDOU%2BdxQ06K5q11k4BjdoLwZrrwIoEXsz66a/JsDq8xM%2Bgr2YNlBWtoiubDDvcF2Y//B0d9uYQ7ATL88qSRS46doPR8iY7rBdy6084VMi5wrcgNAocBn%2BAJCaKjZASokU4TZf5WgBWpdN/0ln4keyqPUnrOPOUDPWqxXO2lBuVr0BkGEBrGhBBWDrFw945P93o62quEBP/nvJLLX8/6g9kQHOIQLh1FWqxgUGfXYgQrQ/3en%2B9mDDgySVVXu48iTcTAg93zZ03Nz3/KdAP1/nUcR6b4O";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await jsvedioreward10();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsvedioreward20() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BGVlQ4WMaHwfsIy2RLnZ3-MMfiWfohk0V9tMJGdKLxyNfojwL_LUBu9cDGQI5THs; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DCJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26sdk%3D14.6&deliveryId=980&key=sq_app_ad&miniWua=HHnB_%2BNXh03V1/aLva2aESnRsb3Vid9f3uBac5KaDmUx%2BeF4aO8r%2BPK%2BdtIDQRNlAiX9%2BBzgBl4kySlkbugT19uUSqowDQD76xTiKbyQKaO4obKaLgr18733BJewaxPOMO905&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=CE4FF05F51CF37FE111372001FDFCA39&timestamp=1629015259&userId=2916901745&user_id=2916901745&wua=ktgi_T5TSslcG8S40FfQ7ghBeeMC00V1KvqIp3gVIa4J/GYX9idgk6SrlViY7Odxg/clKzJwVYES6U77CB3B1Ml5OX%2Bei%2Bd0Af1k4zhg64iDJt5Jt0j8pCFz3AY94ki%2B%2BHnmSyR4a2Kd/RfCQXKhf7FSmTiB5vAHhPrb3aSL7vRoiX3EpPgU96iMXDIx0V9NW1PtH0YPwoRFOiYR4BQPEBq6qsOFbJ7TRkFti4RCqJs9uQr4y8MRtC%2BG85cCrnouExTP6mcVVftnplrkTTJYQwIS5CnV4uZilnd949q8be2eXJ1MzsyYBCpKbb7PW3il1df6j";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await jsvedioreward20();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}






function jsdailysign() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000",
            "Accept-Language": "zh-cn"
        };
        const body = "clientTimestamp=1629015222&position=601&signInType=1&wua=ktgi_8VRO4TruIk1p8M2lu4SpGEzaHDS8yDsvLX9ElOXbMfnd1LjNgtGaPI9uVGeguslQPCNovWQkeiNgYg045ifWzfTHH2HwwhOb0hB07utbFqcSDMCzPCnYkR2%2BKfo%2FvaTJEFwsY1u0piLOQPACgubCVhTE4tZhr2w5PB7PWngoJMmoveydRzSmypRS%2BsTvsR0eHR%2F8hNUKFo%2FB304Uui%2Fl%2FqJVEbdF5nDyK2BwgjoLR5d7edxLKMtgNunW9TbJ%2BGLV9iHCjiM6pv5brTvZuFJu%2B46iDUpPEDt5cqlctf1U3reO4Km%2FMcUX8GVq2rua0lWG&ua=&miniWua=HHnB_JDcbWxm1YICXHWnp2SwR5LW6W%2BQYNxFuxH3SNK5LQbvFKM7QJvQAXETokQrv30zErou7AkieajiRMjjBA5pdxkMJ0MU1GDHFr0PjpKRa7scWxaK%2BM3XD%2FCXy2muXzZkp&userId=2916901745&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629015222&sqSv=1.0&sign=2533cb79da6874c1555fac73e7072980&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.6%26ustatus%3D1%26umidtoken%3DCJFLLxhLOp%252Bu3zV7QyKs806Y%252BvW9YrOA%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}





function dailysign() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.4.8.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.4.8.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.4.8.0&personalized=1&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g&skinColor=23B383&platform=iOS&sqiOSUniqDeviceId=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&mod=iPhoneXS&ver=210802&skinVersion=1&skinActiveColor=0F9970&statusBarHeight=44.000000&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "2001",
            "Accept-Language": "zh-cn"
        };
        const body = "clientTimestamp=1629010657&position=501&signInType=1&wua=HIVW_SHrM3h2JkyoYAgn3ql4jRIy6b5g0AnUJP7I1U6aGiqQwA7oQSEgNZ%2BN8ALcrbeN4XfImFmU1WLw8hUDUw9LnTfLTpFLXlvQ7pL60uQzr1OUk%2FVboon34vSD%2BAMypmhGyIcxJajORk537gVeUjDdXi5pLnj7mjsDnE0Jgi%2BqvbFilG0C4vBwfZfzT6yZd5aCjTbUJt2VTLriJX2IHHpUU5i2RwkWrPKZoGWbO4OQT6YRO5jYlBnBqfkxhutQ5oqgiEBD3rUuIiDWIoSIfupc9V4yo4VSWtNoWZak20EZ0K7Q%3D&ua=&miniWua=HHnB_JuqDlmNVLuGpc0My162gs8NWXyFaoSc%2Ffuhz57T9z99RDkHNb3iTg0Mut4vnmWNqLe4O693LbAnypX9tSUb2rujnJ%2FHEvKQwHjqiROdCX8xtNN4%2Fawu6U5lPFEqVB2OhG%2FQzrnvjELSdHQ7p6VpG1Sd%2FjW68m3We4H0W1YLzWXI%3D&userId=2916901745&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.4.8.0&placeId=111111&timestamp=1629010657&sqSv=1.0&sign=3105bea087cff4a2b140b79cf27dfa64&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%252Bz6if%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g%26skinColor%3D23B383%26platform%3D1%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function vedioreward() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Cookie": "isg=BM3NNdD9kLRAWDSP2IG93I_O1u1HqgF8r-4-zw9SJGTVBvi41_ozTCLcdBxg3Rk0; cna=gpWWGVA23WQCAatTLPVfwY5n",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.4.8 (iPhone; iOS 14.6; Scale/3.00)",
            "Content-Length": "1866",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g%26skinColor%3D23B383%26platform%3DiOS%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=807&isTeenMode=0&key=sq_app_gateway&miniWua=HHnB_qLYPGXagNcq2Y6prgdCFXZx3WOUBwdwg%2BXl%2Bnda6Ds%2BocSlJLNJ50d/XU4VRgBpwxyboqHzX52kFtUQy6LxFvNVfobQISPqyYf9Jh25XEgcKT641beUfHeCBi%2B0DS2wjq4PMG1w/qgcDgG6Az/2rAgUGNMw%2B/RLnpNGTqqACvwE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=DAAF009A5B3344A9BCACFD16017DC9BF&sqSv=1.0&timestamp=1629011002&userId=2916901745&user_id=2916901745&wua=HIVW_rmcpb1k/uoNgnVkVFAntsRHoZtMkzGdCdkFglEWO7Vx/RvXhndHGP3tSBMRueSV7F94HNEOydfsSbO7J7ODMj2NbO/yUSPsNXSCiaP8SqKMrgfdTyWPjs2t%2BtchkC3R5QLUw80z1eACA7sNE7AKQ2eOM5Fxa/J9Zh14l9FMfpY7mPxSrhAZguaeHVpHUtO13rqsD9yuPlipWbC9/7gFNeFiqqiYuUvIBsWHdPD0cj71qKMBPMkO3tmwErIz2y7fwFFVrEXHoFMPhUx5uQRay/ylOCkc5iJXWdD%2BPi3cxmMk%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await vedioreward();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function vediorewarddraw() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BH19CiJtwISVr2R_CPHtzL9eht13GrFs2C5WmD_CulQDdp6oB2vsPZBkJCwwbckk; cna=gpWWGVA23WQCAatTLPVfwY5n",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.4.8 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg%26skinColor%3D23B383%26platform%3DiOS%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=711&isTeenMode=0&key=sq_app_gateway&miniWua=HHnB_bBxn8d7NWxOVNOSvYo7gGzkJxardjOvcGILDwj8BBWVMYmPB70uOeoYigaWwwn0HU%2B2za9N6zrn/OGDuPKkFCJl2KZOQ6ORF4RgevIiPl3%2B74zDQGieveM9M71Yya1nzQX%2B5/MSjgXWi/%2BWeq1Igum%2BzNhpF/oQjfTMV/sRPOA0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F023D1069E5FC39A612549DA0F33F90D&sqSv=1.0&timestamp=1629011566&userId=2916901745&user_id=2916901745&wua=HIVW_G/y9maGmZVNRTVU%2B5Ide1U21mXtTEMdAqWMYlz3l38qPuvmmqeRLpRdKTPjiIu/sJULHtAZbn0/wX6y1QcBz/fgisruR5X2IreAtjpClpiGpaDJygMpCQWs1H%2BVyPQZzRM8eixNAzZNkjfRt3O/Z56y7H6FAjf6N/7WfLfYnTH6HfbX7uZaAJA5m6gDvgtyGBvlvz9tlsWWqcs4VcgAIJP0WCNQQNx/rKOjwwsPwO7V%2Bd81ZLT/EwKv8P1QgzsbwbZY%2BiCLL1rlTzO5hugrYwiMEPB%2BfCWj93xzeTuOJGNI%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await vediorewarddraw();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function drawreward() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Leto(JSBridgeVersion/3.0) AliApp(shuqi/4.4.8.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.4.8.0) 1125x2436 Winding(WV_29) WK",
            "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.4.8.0&personalized=1&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg&skinColor=23B383&platform=iOS&sqiOSUniqDeviceId=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&mod=iPhoneXS&ver=210802&skinVersion=1&skinActiveColor=0F9970&statusBarHeight=44.000000&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Accept-Language": "zh-cn"
        };
        const body = "wua=HIVW_TB8cyKJuhWjB2xlQurypI5kuvo%2F9AD711q3jpJQCWsJNv4fq7zpFB1wtzj5oyVV06fN7qncBgRyAiZ%2Bq34MNU1q2hO6Ybas%2BaH9laokU2sLg6itc9c%2BB642cbshDYUOQTvv1JosGC2scvgd0Q30DR3N3ZvTRx2M9AbfWcTGz%2Fa6BNhLrDakmYc%2FleyEDs838jt1OCA3PNoJJvfgt9tYlmu94wFjuoKdwAzIGlJU7ksaPbA%2Fyz7BLv%2FLxJS5pikvxr0Q4qrGqJFD85O3XCnupN0D1%2BE54zVXC%2Fgg6Pe5bIQs%3D&ua=&userId=2916901745&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1629011857&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b3243867382bdca486cef64931b847b8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%252Bz6if%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg%26skinColor%3D23B383%26platform%3D1%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.availableNum > 0)
                    {
                         await drawreward();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}







function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}
