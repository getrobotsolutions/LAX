


var speak = new Array( );


function LanguageChange(lang)
{
    if(lang === "english")
    {
        window.external.ChangeLanguage("en-gb");
        eraseCookie("CurrentLanguage");
        writeCookie("CurrentLanguage", "English", 30);
        document.getElementById("btn_english").style.backgroundColor = "white";
        document.getElementById("btn_english").style.color = "#0A99CF";
        document.getElementById("btn_spanish").style.backgroundColor = "#0A99CF";
        document.getElementById("btn_spanish").style.color = "white";
        document.getElementById("btn_chinese").style.backgroundColor = "#0A99CF";
        document.getElementById("btn_chinese").style.color = "white";

        document.getElementById("txt_eat").innerHTML = "Restaurants";
        document.getElementById("txt_shopping").innerHTML = "Shopping";
        document.getElementById("txt_maps").innerHTML = "Terminal Map";
        document.getElementById("txt_take_selfie").innerHTML = "Take a Selfie";
        document.getElementById("txt_robot_avatar").innerHTML = "Robot Avatar";
        document.getElementById("txt_robot_dance").innerHTML = "Robot Dance";


        speak[0] = "Enjoy your time at some of our great restaurants.";
        speak[1] = "Spend some time at some of our shops.";
        speak[2] = "Find your way in airport using our terminal Maps";
        speak[3] = "Please touch the camera icon below and Say Cheese!";
        speak[4] = "Smile you are about to become a robot.";
        speak[5] = "Get ready to dance along with me.";


    }
    else if (lang === "spanish")
    {
        window.external.ChangeLanguage("es-us");
        eraseCookie("CurrentLanguage");
        writeCookie("CurrentLanguage", "Spanish", 30);
        document.getElementById("btn_english").style.backgroundColor = "#0A99CF";
        document.getElementById("btn_english").style.color = "white";
        document.getElementById("btn_spanish").style.backgroundColor = "white";
        document.getElementById("btn_spanish").style.color = "#0A99CF";
        document.getElementById("btn_chinese").style.backgroundColor = "#0A99CF";
        document.getElementById("btn_chinese").style.color = "white";

        document.getElementById("txt_eat").innerHTML = "Restaurantes";
        document.getElementById("txt_shopping").innerHTML = "Compras";
        document.getElementById("txt_maps").innerHTML = "Mapa de la terminal";
        document.getElementById("txt_take_selfie").innerHTML = "Toma una selfie";
        document.getElementById("txt_robot_avatar").innerHTML = "Robot Avatar";
        document.getElementById("txt_robot_dance").innerHTML = "Robot Dance";



        speak[0] = "Disfruta de tu tiempo en algunos de nuestros excelentes restaurantes.";
        speak[1] = "Pase tiempo en algunas de nuestras tiendas.";
        speak[2] = "Encuentra tu camino en el aeropuerto usando nuestro terminal Mapas";
        speak[3] = "Toca el icono de la cámara a continuación y ¡Di queso!";
        speak[4] = "Sonríe, estás a punto de convertirte en un robot.";
        speak[5] = "Prepárate para bailar conmigo.";
    }

    else if(lang === "chinese")
    {
        window.external.ChangeLanguage("zh-cn");
        eraseCookie("CurrentLanguage");
        writeCookie("CurrentLanguage", "Chinese", 30);
        document.getElementById("btn_english").style.backgroundColor = "#0A99CF";
        document.getElementById("btn_english").style.color = "white";
        document.getElementById("btn_spanish").style.backgroundColor = "#0A99CF";
        document.getElementById("btn_spanish").style.color = "white";
        document.getElementById("btn_chinese").style.backgroundColor = "white";
        document.getElementById("btn_chinese").style.color = "#0A99CF";

        document.getElementById("txt_eat").innerHTML = "餐馆";
        document.getElementById("txt_shopping").innerHTML = "购物";
        document.getElementById("txt_maps").innerHTML = "终端地图";
        document.getElementById("txt_take_selfie").innerHTML = "采取自拍照";
        document.getElementById("txt_robot_avatar").innerHTML = "机器人头像";
        document.getElementById("txt_robot_dance").innerHTML = "机器人舞蹈";

        speak[0] = "在我们的一些很棒的餐厅享受您的时间。";
        speak[1] = "花点时间在我们的一些商店。";
        speak[2] = "使用我们的终端地图在机场找到您的方式";
        speak[3] = "请点击下面的相机图标，说奶酪！";
        speak[4] = "微笑你即将成为一个机器人。";
        speak[5] = "准备和我一起跳舞。";
    } // end if-else-ladder
} // end LanguageChange()

function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    switch (strContentsName)
    {
        case "Home":
           location.href = "../../maincontents.htm";
            break;
        case "Eats":
            PlaySpeech(speak[0]);
            location.href = "Contents/Eat/index.html";
            break;
        case "Shopping":
            PlaySpeech(speak[1]);
            location.href = "Contents/Shopping/index.html";
            break;
        case "Maps":
            PlaySpeech(speak[2]);
            break;
        case "Selfie":
            PlaySpeech(speak[3]);
            location.href = "Contents/Selfie/index.html";
            break;
        case "Avatar":
            PlaySpeech(speak[4]);
            location.href = "Contents/RobotAvatar/index.htm";
            break;
        case "Dance":
            PlaySpeech(speak[5]);
            break;
        case "Config":
            location.href = "Config/Config.htm";
            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall


function OnUserApproached()
{
    PlaySpeech("Hi, I'm Erin, thanks for traveling with us.  To get started, please press a button below.");
}



function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}

$(document).ready(function(){
    ShowTime();

    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
})


var city = "Los Angeles";
var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='f'";
var queryURL = "https://query.yahooapis.com/v1/public/yql?q="+ searchtext + "&format=json";

$.getJSON(queryURL, function (data) {

    var results = data.query.results;
    var firstResult = results.channel.item.condition;
    console.log(firstResult);


    var location = 'Unknown'; // not returned in response
    var temp = firstResult.temp;
    var text = firstResult.text;
    var image =  firstResult.code;
    var loc = 'https://s.yimg.com/zz/combo?a/i/us/we/52/'+image+'.gif' ;

    // $('#temp').append('The temperature is <strong>' + temp + '</strong><sup>°F</sup> Forecast calls for '+text);

    $('#condition').append(text);
    $('#temp').append(temp+ '</strong><sup>°F</sup>');

    $('#image-zoom').attr("src",loc);
});

function ShowTime()
{
    var dt = new Date();
    // formatAMPM(dt);
    document.getElementById("content_air") .innerHTML = formatAMPM(dt) ;
    document.getElementById("content_date") .innerHTML = formatDate(dt);

}
function formatAMPM(date) {

    var hours = date.getHours();
    var minutes = date.getMinutes();


    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var dayName = days[date.getDay()];

    //dayName = date.toString().split(' ')[0];
    hours = hours <10? '0' +hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = dayName + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
    //alert(strTime);
}

function formatDate(date){

    var m_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = m_names[date.getMonth()];
    var day = date.getDate();
    day = getGetOrdinal(day);

    var output = (month<10 ? '0' : '') + month + ' ' +(day<10 ? '0' : '') + day+', '+ date.getFullYear() ;
    return output;
}

function getGetOrdinal(n) {
    var s=["th","st","nd","rd"],
        v=n%100;
    return n+'<sup>'+(s[(v-20)%10]||s[v]||s[0])+'</sup>';
}