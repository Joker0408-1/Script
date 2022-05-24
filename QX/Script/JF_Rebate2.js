/*
## > 订阅
https://raw.githubusercontent.com/Joker0408-1/Script/main/QX/Boxjs/jf_boxjs.json
## > 重写
^https?://api\.m\.jd\.com/(client\.action|api)\?functionId=(wareBusiness|serverConfig|basicConfig|lite_wareBusiness|pingou_item) url script-response-body https://raw.githubusercontent.com/Joker0408-1/Script/main/QX/Script/JF_Rebate2.js
*/

function lowerMsgs(data) {
    const lower = data.lowerPriceyh;
    const lowerDate = dateFormat(data.lowerDateyh);
        const lowerMsg = "京东","〽️ 历史最低：¥" + String(lower) + "║" + `🗓 ${lowerDate}`;
    return lowerMsg;
}

function priceSummary(data) {
    let summary = "";
    let listPriceDetail = data.PriceRemark.ListPriceDetail.slice(0, 4);
    let list = listPriceDetail.concat(historySummary(data.single));
    list.forEach((item, index) => {
        if (item.Name == "双11价格") {
            item.Name = "双十一价格";
        } else if (item.Name == "618价格") {
            item.Name = "六一八价格";
        }
        let price = String(parseInt(item.Price.substr(1)));
        summary += `\n${item.Name}   ${isNaN(price) ? "-" : "¥" + price}   ${item.Date}   ${item.Difference}`;
    });
    return summary;
}

function historySummary(single) {
    const rexMatch = /\[.*?\]/g;
    const rexExec = /\[(.*),(.*),"(.*)".*\]/;
    let currentPrice, lowest30, lowest90, lowest180, lowest360;
    let list = single.jiagequshiyh.match(rexMatch);
    list = list.reverse().slice(0, 360);
    list.forEach((item, index) => {
        if (item.length > 0) {
            const result = rexExec.exec(item);
            const dateUTC = new Date(eval(result[1]));
            const date = dateUTC.format("yyyy-MM-dd");
            let price = parseFloat(result[2]);
            if (index == 0) {
                currentPrice = price;
                lowest30 = {
                    Name: "三十天最低",
                    Price: `¥${String(price)}`,
                    Date: date,
                    Difference: difference(currentPrice, price),
                    price,
                };
                lowest90 = {
                    Name: "九十天最低",
                    Price: `¥${String(price)}`,
                    Date: date,
                    Difference: difference(currentPrice, price),
                    price,
                };
                lowest180 = {
                    Name: "一百八最低",
                    Price: `¥${String(price)}`,
                    Date: date,
                    Difference: difference(currentPrice, price),
                    price,
                };
                lowest360 = {
                    Name: "三百六最低",
                    Price: `¥${String(price)}`,
                    Date: date,
                    Difference: difference(currentPrice, price),
                    price,
                };
            }
            if (index < 30 && price < lowest30.price) {
                lowest30.price = price;
                lowest30.Price = `¥${String(price)}`;
                lowest30.Date = date;
                lowest30.Difference = difference(currentPrice, price);
            }
            if (index < 90 && price < lowest90.price) {
                lowest90.price = price;
                lowest90.Price = `¥${String(price)}`;
                lowest90.Date = date;
                lowest90.Difference = difference(currentPrice, price);
            }
            if (index < 180 && price < lowest180.price) {
                lowest180.price = price;
                lowest180.Price = `¥${String(price)}`;
                lowest180.Date = date;
                lowest180.Difference = difference(currentPrice, price);
            }
            if (index < 360 && price < lowest360.price) {
                lowest360.price = price;
                lowest360.Price = `¥${String(price)}`;
                lowest360.Date = date;
                lowest360.Difference = difference(currentPrice, price);
            }
        }
    });
    return [lowest30, lowest90, lowest180];
}

function difference(currentPrice, price) {
    let difference = sub(currentPrice, price);
    if (difference == 0) {
        return "-";
    } else {
        return `${difference > 0 ? "↑" : "↓"}${String(difference)}`;
    }
}

function sub(arg1, arg2) {
    return add(arg1, -Number(arg2), arguments[2]);
}

function add(arg1, arg2) {
    (arg1 = arg1.toString()), (arg2 = arg2.toString());
    var arg1Arr = arg1.split("."),
        arg2Arr = arg2.split("."),
        d1 = arg1Arr.length == 2 ? arg1Arr[1] : "",
        d2 = arg2Arr.length == 2 ? arg2Arr[1] : "";
    var maxLen = Math.max(d1.length, d2.length);
    var m = Math.pow(10, maxLen);
    var result = Number(((arg1 * m + arg2 * m) / m).toFixed(maxLen));
    var d = arguments[2];
    return typeof d === "number" ? Number(result.toFixed(d)) : result;
}

function request_history_price(share_url) {
    return new Promise((resolve) => {
        let options = {
            url: "https://apapia-history.manmanbuy.com/ChromeWidgetServices/WidgetServices.ashx",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                "User-Agent":
                    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 - mmbWebBrowse - ios",
            },
            body: "methodName=getHistoryTrend&p_url=" + encodeURIComponent(share_url),
        };
        $tool.post(options, function (error, response, data) {
            if (!error) {
                data = JSON.parse(data);
                if (consolelog) console.log("Data:\n" + data);
                if (data.ok == 1 && data.single) {
                    const lower = lowerMsgs(data.single);
                    const detail = priceSummary(data);
                    const tip = data.PriceRemark.Tip;
                    let r = {};
                    r.lower_tip = `${lower}\n`;
                    r.historydetail = `${detail.substr(1)}`;
                    resolve(r);
                }
                if (data.ok == 0 && data.msg.length > 0) {
                    let e = `\n😤 该商品暂无历史价格`;
                    resolve(e);
                }
            } else {
                if (consolelog) console.log("JD History Error:\n" + error);
                resolve();
            }
        });
    });
}
