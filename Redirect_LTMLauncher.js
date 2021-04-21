// recognize platform
function platform_rec() {
    const Platform_useragent = navigator.userAgent;
    
    console.log(Platform_useragent);
    console.log(navigator.userAgent);
    console.log(navigator.vendor);
    console.log(navigator.platform);
    
    if (Platform_useragent.match(/android/i)) {
        console.log('android')
        return "android";
    }else if (Platform_useragent.match(/iPad|iPhone|iPod/i)) {
        console.log('ios');
        return "ios";
    }else{
        console.log('You need to use mobile phone');
    }
    
}

function navigateLTM(androidStoreId,appStoreId) {

    const platform = platform_rec();
    function AppStoreGO() {

        window.location.href = "linktomyasus://";
        setTimeout(function(){

            window.location.href = `itms-apps://apps.apple.com/us/app/link-to-myasus/id${appStoreId}`;
            window.location.href = `itms-apps://apps.apple.com/us/app/link-to-myasus/id${appStoreId}`; 

        },2000)
    }

    function AndroidStoreGO() {

        window.location.href = "linktomyasus://";
        //在使用「URL Scheme」跳轉的同時，通過定時器在一定時間之後跳轉到下載頁。倘若裝置上有安裝APP，就會跳到APP，否則在一定時間後就會跳到下載頁。
        setTimeout(function(){

            window.location.href = `https://play.google.com/store/apps/details?id=${androidStoreId}`;
            window.location.href = `https://play.google.com/store/apps/details?id=${androidStoreId}`;

        },2000)
    
    }
    
    if (platform === "ios") {
        AppStoreGO();
    } else if (platform === 'android') {
        AndroidStoreGO();
    } else{
        console.log('You need to use mobile phone');
    }
    
}

navigateLTM('com.asus.syncv2','1481035824')

let input_str = "linktomyasus://scan=1457489";
let Rec_Key = input_str.split('=')[1];
console.log(Rec_Key);