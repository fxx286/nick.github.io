console.log("加载完成");
/* 
    配置当前项目引入的模块
*/
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "parabola": "parabola",
        //引入banner图效果
        "nav": "nav",
        "goodsList": "goodsList"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
        //声明当前模块不遵从AMD
        "parabola": {
			exports: "_"
		}
    }
})

require(["nav", "goodsList"], function(nav, goodsList){
    nav.topNavDownload();
    nav.topNavTab();
    nav.searchTab(); 
    nav.allGoodsTab();
    // //侧边栏加载
    nav.leftNavDownload();
    // //给侧边栏添加移入移出效果
    nav.leftNavTab();

    //加载列表商品
    goodsList.download();   
    goodsList.banner();

})

function setCookie(key,value,day){
    // key 表示 cookie的键
    // value 表示 cookie的值
    // day 表示多少天过期，不传默认回话时效
    if(day){
        var time = new Date();//当前时间
        time.setTime(time.getTime()-8*60*60*1000+day*24*60*60*1000);//day天以后
        document.cookie=key+"="+value+";expires="+time;
    }else{
        document.cookie = key+"="+value;
    }
}

function removeCookie(key){
    // key 表示 cookie的键
    setCookie(key,1,-1)
}

function getCookie(key){
    // key 表示 cookie的键
    var str = document.cookie;
    // 把str变成一个数组，数组的每个元素都是一个“key=value”
    var arr = str.split("; ");
    // 我想获取key对应的值
    for(var i=0;i<arr.length;i++){
        // 遍历到的每一个元素arr[i] = "key=value"
        // 把这个"key=value"变成[key,value]
        var temp = arr[i].split('=');
        if(temp[0]==key){
            return temp[1];
        }
    }

}

$('html, body').ready(function() {
    if (document.cookie) {
        var str = document.cookie;
        var arr = str.split("; ")
        var temp = arr[0].split('=');
        // if(temp[0]==key){
        //     return temp[1];
        // }
        var name = temp[1];
        console.log(temp);
        console.log(name);
        $('#J_siteUserInfo').empty()
        $('#J_siteUserInfo').append(`<a href="#" class = 'link' >${name}</a>`)
    }    
}   
)

function setCookie(key,value,day){
    // key 表示 cookie的键
    // value 表示 cookie的值
    // day 表示多少天过期，不传默认回话时效
    if(day){
        var time = new Date();//当前时间
        time.setTime(time.getTime()-8*60*60*1000+day*24*60*60*1000);//day天以后
        document.cookie=key+"="+value+";expires="+time;
    }else{
        document.cookie = key+"="+value;
    }
}

function removeCookie(key){
    // key 表示 cookie的键
    setCookie(key,1,-1)
}

function getCookie(key){
    // key 表示 cookie的键
    var str = document.cookie;
    // 把str变成一个数组，数组的每个元素都是一个“key=value”
    var arr = str.split("; ");
    // 我想获取key对应的值
    for(var i=0;i<arr.length;i++){
        // 遍历到的每一个元素arr[i] = "key=value"
        // 把这个"key=value"变成[key,value]
        var temp = arr[i].split('=');
        if(temp[0]==key){
            return temp[1];
        }
    }

}

$('html, body').ready(function() {
    if (document.cookie) {
        var str = document.cookie;
        var arr = str.split("; ")
        var temp = arr[0].split('=');
        // if(temp[0]==key){
        //     return temp[1];
        // }
        var name = temp[1];
        console.log(temp);
        console.log(name);
        $('#J_siteUserInfo').empty()
        $('#J_siteUserInfo').append(`<a href="#" class = 'link' >${name}</a>`)
    }    
}   
)