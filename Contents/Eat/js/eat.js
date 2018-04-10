//-----------------------------------------------------
//Redirects to homepage after 1 minute of not interaction
//-----------------------------------------------------

function redirect(){
    window.location.href = "../../maincontents.htm";
}
var initial=setTimeout(redirect,60000);

$(document).click(function(event) {
    clearTimeout( initial );
    initial=setTimeout(redirect,60000);
});
//-----------------------------------------------------


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

    }
location.reload();
}



var Hotel_en = new Array ( );
Hotel_en[0] = new Array ( "800 Degrees Pizza"," 800 Degrees Pizza – a Los Angeles based concept – offers traditional Neapolitan pizza baked in an 800 degree real wood-burning oven. Passengers can order from a few favorite combinations, or can personalize their pizza and create their own masterpiece!", "images/hotels/0.jpeg" , "offers");
Hotel_en[1] = new Array ( "Planet Hollywood","  Planet Hollywood grills up appetizers, burgers, entrees, and more.", "images/hotels/1.jpeg" , "offers");
Hotel_en[2] = new Array ( "Earl of Sandwich","Earl of Sandwich is well known for their toasted sandwiches.", "images/hotels/2.jpeg" , "offers");
Hotel_en[3] = new Array ( "Treat me Sweet","Shop for a variety of candy at Treat Me Sweet.", "images/hotels/3.jpeg" , "offers");
Hotel_en[4] = new Array ( "KFC"," KFC is known worldwide for their fried chicken.", "images/hotels/4.jpeg" , "offers");
Hotel_en[5] = new Array ( "Wpizza by Wolfgang Puck","Grab some quick Italian and a cocktail at Wpizza by Wolfgang Puck.", "images/hotels/5.jpeg" , "offers");
Hotel_en[6] = new Array ( "Cantina Laredo","Have a cocktail with your burrito and queso at Cantina Laredo, a trendy Mexican cafe.", "images/hotels/6.jpeg" , "offers");
Hotel_en[7] = new Array ( "Vanilla Bake Shop","The Vanilla Bake Shop is the place to pick up macaroons, desserts, a healthy fruit cup or a sandwich.", "images/hotels/7.jpeg" , "offers");
Hotel_en[8] = new Array ( "Petrossian Caviar & Champagne Bar"," Visit Petrossian Caviar and Champagne Bar for a full service restaurant and bar serving fine foods and spirits.", "images/hotels/8.jpeg" , "offers");
Hotel_en[9] = new Array ( "Larder at Tavern"," Larder at Tavern serves up tasty sandwiches and various bakery items. There's also a farmers market section offering various organic products.", "images/hotels/9.jpeg" , "offers");
Hotel_en[10] = new Array ( "Border Grill"," Border Grill is known as a great place to eat, have a beer, margarita or cocktails at the bar while watching TV.", "images/hotels/10.jpeg" , "offers");
Hotel_en[11] = new Array ( "Chaya Sushi","  Chaya is a favorite with travelers who want to enjoy fresh sushi, rice balls and other Asian dishes.", "images/hotels/11.jpeg" , "offers");
Hotel_en[12] = new Array ( "Drink.LA","", "images/hotels/12.jpeg" , "offers");
Hotel_en[13] = new Array ( "Starbucks Evening","Starbucks Evenings has all of the wonderful coffee drinks they're known for plus appetizers, beer and wine.", "images/hotels/13.jpeg" , "offers");
Hotel_en[14] = new Array ( "Vino Volo","Vino Volo offers various small plates and wines. They also sell bottles to go.", "images/hotels/14.jpeg" , "offers");
Hotel_en[15] = new Array ( "Ink.sack"," Ink.sack serves up a long list of classic sandwiches as well as some eclectic options.", "images/hotels/15.jpeg" , "offers");
Hotel_en[16] = new Array ( "Umami Burger"," Eat at Umami Burger if you want a handcrafted, grass fed burger, and other tasty menu items.", "images/hotels/16.jpeg" , "offers");
Hotel_en[17] = new Array ( "Panda Express"," Since 1983, Panda Express has pioneered the quick-service Chinese food market and quickly became the quick serve Asian cuisine of choice for consumers and developers. Nearly 30 years and 1,500 stores later, Panda Express continues to provide quality Chine", "images/hotels/17.jpeg" , "offers");
Hotel_en[18] = new Array ( "Scoreboard LA"," Enjoy a pre-flight drink at Scoreboard LA and accompany it with a sandwich or hot dog.", "images/hotels/18.jpeg" , "offers");
Hotel_en[19] = new Array ( "LAMILL Coffee"," Get buzzed at Lamill Coffee, a chic newcomer to the coffee scene from Los Angeles’ trendy Siverlake neighborhood. Located post-security in TBIT, Lamill introduces a fresh, new culinary approach to coffee that goes far beyond standard coffeehouse fare.", "images/hotels/19.jpeg" , "offers");
Hotel_en[20] = new Array ( "James' Beach","James Beach Restaurant & Bar is a local favorite with a long list of cocktails and savory tacos.", "images/hotels/20.jpeg" , "offers");
Hotel_en[21] = new Array ( "Pinkberry","An airport favorite, Pinkberry is a go-to place for frozen yogurt with all the toppings.", "images/hotels/21.jpeg" , "offers");
Hotel_en[22] = new Array ( "The Coffee Bean & Tea Leaf","Born and brewed in Southern California since 1963, The Coffee Bean & Tea Leaf delivers the taste and aroma of the world’s best coffees and teas. In addition to coffee & tea, this location has an extensive line of bakery and food grab & go items.", "images/hotels/22.jpeg" , "offers");
Hotel_en[23] = new Array ( "LAX Essentials","", "images/hotels/23.jpeg" , "offers");


var Hotel_sp = new Array ( );
Hotel_sp[0] = new Array ( "800 Degrees Pizza","800 Degrees Pizza, un concepto basado en Los Ángeles, ofrece pizza napolitana tradicional horneada en un horno de leña real de 800 grados. Los pasajeros pueden ordenar de algunas combinaciones favoritas, o pueden personalizar su pizza y crear su propia obra maestra!", "images/hotels/0.jpeg" , "offers");
Hotel_sp[1] = new Array ( "Planet Hollywood","Planet Hollywood llena bocadillos, hamburguesas, entradas y más.", "images/hotels/1.jpeg" , "offers");
Hotel_sp[2] = new Array ( "Earl of Sandwich","Earl of Sandwich es famoso por sus sándwiches tostados.", "images/hotels/2.jpeg" , "offers");
Hotel_sp[3] = new Array ( "Treat me Sweet","Compre dulces variados en Treat Me Sweet.", "images/hotels/3.jpeg" , "offers");
Hotel_sp[4] = new Array ( "KFC","KFC es conocido mundialmente por su pollo frito.", "images/hotels/4.jpeg" , "offers");
Hotel_sp[5] = new Array ( "Wpizza by Wolfgang Puck","Toma un rápido Italiano y un cóctel en Wpizza by Wolfgang Puck.", "images/hotels/5.jpeg" , "offers");
Hotel_sp[6] = new Array ( "Cantina Laredo","Tome un cóctel con su burrito y queso en Cantina Laredo, un moderno café Mexicano.", "images/hotels/6.jpeg" , "offers");
Hotel_sp[7] = new Array ( "Vanilla Bake Shop","The Vanilla Bake Shop es el lugar para recoger macarrones, postres, The Vanilla Bake Shop es el lugar para recoger macarrones, postres, una taza de fruta saludable o un sándwich.", "images/hotels/7.jpeg" , "offers");
Hotel_sp[8] = new Array ( "Petrossian Caviar & Champagne Bar","Visite Petrossian Caviar & Champagne Bar para disfrutar de un servicio completo de restaurante y bar que sirve excelentes bebidas y licores.", "images/hotels/8.jpeg" , "offers");
Hotel_sp[9] = new Array ( "Larder at Tavern","Larder at Tavern sirve sándwiches sabrosos y varios artículos de panadería. También hay una sección del mercado de agricultores que ofrece diversos productos orgánicos.", "images/hotels/9.jpeg" , "offers");
Hotel_sp[10] = new Array ( "Border Grill","Border Grill es conocido como un gran lugar para comer, tomar una cerveza, margarita o cócteles en el bar mientras mira la televisión.", "images/hotels/10.jpeg" , "offers");
Hotel_sp[11] = new Array ( "Chaya Sushi","Chaya es uno de los favoritos entre los viajeros que desean disfrutar de sushi fresco, bolas de arroz y otros platos Asiáticos.", "images/hotels/11.jpeg" , "offers");
Hotel_sp[12] = new Array ( "Drink.LA","", "images/hotels/12.jpeg" , "offers");
Hotel_sp[13] = new Array ( "Starbucks Evening","Starbucks Evenings tiene todas las maravillosas bebidas de café que son conocidas, además de aperitivos, cerveza y vino.", "images/hotels/13.jpeg" , "offers");
Hotel_sp[14] = new Array ( "Vino Volo","Vino Volo ofrece varios platos pequeños y vinos. También venden botellas para llevar.", "images/hotels/14.jpeg" , "offers");
Hotel_sp[15] = new Array ( "Ink.sack","Ink.sack sirve una larga lista de sándwiches clásicos, así como algunas opciones eclécticas.", "images/hotels/15.jpeg" , "offers");
Hotel_sp[16] = new Array ( "Umami Burger","Coma en Umami Burger si quiere una hamburguesa hecha a mano, alimentada con pasto y otros deliciosos platos del menú.", "images/hotels/16.jpeg" , "offers");
Hotel_sp[17] = new Array ( "Panda Express","Desde 1983, Panda Express ha sido pionera en el mercado de comida China de servicio rápido y rápidamente se convirtió en la cocina Asiática de elección rápida para consumidores y desarrolladores. Cerca de 30 años y 1.500 tiendas más tarde, Panda Express continúa brindando calidad Chine.", "images/hotels/17.jpeg" , "offers");
Hotel_sp[18] = new Array ( "Scoreboard LA","Disfrute de una bebida antes del vuelo en Scoreboard LA y acompáñela con un sándwich o un hot dog.", "images/hotels/18.jpeg" , "offers");
Hotel_sp[19] = new Array ( "LAMILL Coffee","Déjate llevar por Lamill Coffee, un recién llegado chic a la escena del café del moderno barrio de Siverlake de Los Ángeles. Ubicada después de la seguridad en TBIT, Lamill presenta un nuevo y novedoso enfoque culinario al café que va más allá de la tarifa estándar de los cafés.", "images/hotels/19.jpeg" , "offers");
Hotel_sp[20] = new Array ( "James' Beach","James Beach Restaurant & Bar es un favorito local con una larga lista de cócteles y tacos salados.", "images/hotels/20.jpeg" , "offers");
Hotel_sp[21] = new Array ( "Pinkberry","Un favorito del aeropuerto, Pinkberry es un lugar ideal para yogur helado con todos los ingredientes.", "images/hotels/21.jpeg" , "offers");
Hotel_sp[22] = new Array ( "The Coffee Bean & Tea Leaf","Nacido y elaborado en el sur de California desde 1963, The Coffee Bean & Tea Leaf ofrece el sabor y el aroma de los mejores cafés y tés del mundo. Además de café y té, esta ubicación cuenta con una extensa línea de artículos de panadería y comida para llevar.", "images/hotels/22.jpeg" , "offers");
Hotel_sp[23] = new Array ( "LAX Essentials","", "images/hotels/23.jpeg" , "offers");

var Hotel_ch = new Array( );
Hotel_ch[0] = new Array ( "800度比萨","800度比萨是源自洛杉矶的美食餐厅，提供传统的那不勒斯比萨，这种比萨在800度烤箱中烤制，真正木炭明火烤出。顾客可以从几个广受欢迎的组合中选择，但为数不多。还可以个性化定制披萨，那样就能创造属于自己的佳作！", "images/hotels/0.jpeg" , "offers");
Hotel_ch[1] = new Array ( "好莱坞星球餐厅","好莱坞星球餐厅为旅客烹制开胃小吃、汉堡、主菜等等。", "images/hotels/1.jpeg" , "offers");
Hotel_ch[2] = new Array ( "三明治伯爵","三明治伯爵主打烤三明治，并因此而名声大噪。", "images/hotels/2.jpeg" , "offers");
Hotel_ch[3] = new Array ( "甜蜜蜜","在甜蜜蜜可以买到各种各样的糖果。", "images/hotels/3.jpeg" , "offers");
Hotel_ch[4] = new Array ( "肯德基","肯德基因炸鸡而誉满全球。", "images/hotels/4.jpeg" , "offers");
Hotel_ch[5] = new Array ( "沃尔夫冈·帕克开的W披萨店","在W披萨可以品尝到沃尔夫冈·帕克的快捷意大利菜和鸡尾酒。", "images/hotels/5.jpeg" , "offers");
Hotel_ch[6] = new Array ( "拉雷多酒吧","在拉雷多酒吧，一边喝鸡尾酒一边品尝玉米卷饼和干酪，还有时下流行的墨西哥咖啡。", "images/hotels/6.jpeg" , "offers");
Hotel_ch[7] = new Array ( "香草烘焙坊","在香草烘焙坊可以买到杏仁饼、甜点、有益健康的什锦水果以及三明治。", "images/hotels/7.jpeg" , "offers");
Hotel_ch[8] = new Array ( "裴卓仙鱼子酱及香槟酒吧","去裴卓仙鱼子酱及香槟酒吧可以享受到餐厅与酒吧的全方位服务，美酒佳肴不会少。", "images/hotels/8.jpeg" , "offers");
Hotel_ch[9] = new Array ( "食品柜酒馆","食品柜酒馆提供美味三明治和各种烘焙食品。另外有一个农产品集市，有各种有机产品。", "images/hotels/9.jpeg" , "offers");
Hotel_ch[10] = new Array ( "边境烧烤","边境烧烤是众所周知的美食胜地，可以在柜台旁小酌一杯啤酒，甚或玛格丽塔、鸡尾酒，同时可以看电视。", "images/hotels/10.jpeg" , "offers");
Hotel_ch[11] = new Array ( "茶屋寿司","在茶屋可以品尝到鲜美的寿司、饭团和其他亚洲菜肴，独受一些游客倾心。", "images/hotels/11.jpeg" , "offers");
Hotel_ch[12] = new Array ( "洛杉矶机场饮料店","", "images/hotels/12.jpeg" , "offers");
Hotel_ch[13] = new Array ( "星巴克","在星巴克，各种精美咖啡应有尽有，他们的开胃小吃、啤酒和葡萄酒也很受欢迎。", "images/hotels/13.jpeg" , "offers");
Hotel_ch[14] = new Array ( "沃洛餐厅酒吧","沃洛餐厅酒吧提供各种小菜和葡萄酒。另外也有外带瓶装。", "images/hotels/14.jpeg" , "offers");
Hotel_ch[15] = new Array ( "墨水三明治","墨水三明治提供经典三明治，且品种繁多，也有一些不常见品类。", "images/hotels/15.jpeg" , "offers");
Hotel_ch[16] = new Array ( "鲜味汉堡","如果你想吃手工草饲汉堡，那就来鲜味汉堡，还有其他美味菜肴。", "images/hotels/16.jpeg" , "offers");
Hotel_ch[17] = new Array ( "熊猫快餐","自从1983年创办以来，熊猫快餐开创了中式快餐市场，迅速成为消费者和开发人员的亚洲快餐之选。在30年里开了1500家店，熊猫快餐现在依旧为大家提供上等中餐。", "images/hotels/17.jpeg" , "offers");
Hotel_ch[18] = new Array ( "记分板餐厅","登机前可以在记分板餐厅小酌一杯，再配上一份三明治或者热狗。", "images/hotels/18.jpeg" , "offers");
Hotel_ch[19] = new Array ( "拉米尔咖啡","拉米尔咖啡源自时尚的洛杉矶银湖街区，这家新咖啡厅的时尚气息一定让你陶醉。拉米尔位于汤姆·布莱德利国际航站楼安检前，引入了全新的咖啡调制方法，和一般的咖啡屋大相径庭。", "images/hotels/19.jpeg" , "offers");
Hotel_ch[20] = new Array ( "詹姆斯的海滩","詹姆斯的海滩餐厅酒吧很受当地人欢迎，有品类繁多的鸡尾酒和美味玉米卷饼。", "images/hotels/20.jpeg" , "offers");
Hotel_ch[21] = new Array ( "粉红莓冰品店","粉红莓冰品店在机场大受欢迎，可以来一杯冰酸奶，加上各种配料。", "images/hotels/21.jpeg" , "offers");
Hotel_ch[22] = new Array ( "香啡缤","香啡缤于1963年在南加州创立，让大家可以品尝到世界上最优质咖啡与茶的口味和芳香。除了咖啡和茶，这里也有丰盛的烘焙食品，可以外带。", "images/hotels/22.jpeg" , "offers");
Hotel_ch[23] = new Array ( "洛杉矶机场必需品店","", "images/hotels/23.jpeg" , "offers");



if(readCookie("CurrentLanguage") === "English")
{
  var Hotel = new Array ( );
   Hotel = Hotel_en ;
   document.getElementById("HotelName").innerHTML = "800 Degrees Pizza";
   document.getElementById("HotelDesc").innerHTML = " 800 Degrees Pizza – a Los Angeles based concept – offers traditional Neapolitan pizza baked in an 800 degree real wood-burning oven. Passengers can order from a few favorite combinations, or can personalize their pizza and create their own masterpiece!";
}
else if(readCookie("CurrentLanguage") === "Spanish")
{
   var Hotel = new Array ( );
   Hotel = Hotel_sp ;
    document.getElementById("HotelName").innerHTML = "800 Degrees Pizza";
    document.getElementById("HotelDesc").innerHTML = "800 Degrees Pizza, un concepto basado en Los Ángeles, ofrece pizza napolitana tradicional horneada en un horno de leña real de 800 grados. Los pasajeros pueden ordenar de algunas combinaciones favoritas, o pueden personalizar su pizza y crear su propia obra maestra!";
}
else if(readCookie("CurrentLanguage") === "Chinese")
{
    var Hotel = new Array( );
    Hotel = Hotel_ch;

    document.getElementById("HotelName").innerHTML = "800度比萨";
    document.getElementById("HotelDesc").innerHTML = "800度比萨是源自洛杉矶的美食餐厅，提供传统的那不勒斯比萨，这种比萨在800度烤箱中烤制，真正木炭明火烤出。顾客可以从几个广受欢迎的组合中选择，但为数不多。还可以个性化定制披萨，那样就能创造属于自己的佳作！";
}


for (var i = 0; i< Hotel.length; i++) { 

  var HotelName = Hotel[i][0]; 
  //$('.myList').append('<a href="#" calss = "HotelName" style = "margin: 40px;"> ' + HotelName + '</a><br><br>');
 // $('#theList li:last-child').append('<li style="display:none;color:green;">' + HotelName + '</li>');
        
  var ul = document.getElementById("dynamic-list");
  var li = document.createElement("li");
  //  li.setAttribute('id',HotelName);
    li.appendChild(document.createTextNode(HotelName));
    ul.appendChild(li);      
}


  $('ul.listul li:even').addClass('even');
  $('ul.listul li:odd').addClass('odd');


 $("ul[id*=dynamic-list] li").click(function () {
               

              var HotelName = $(this).text()    
              getHodetlDetails(HotelName);

            });



function getHodetlDetails(HotelName) {

  for (var i = 0; i< Hotel.length; i++) { 

       if(HotelName.trim() === Hotel[i][0].trim()){
      
        var  HotelDesc= Hotel[i][1];
        var  HotelImag= Hotel[i][2];
        var  HotelOffers = Hotel[i][3];

      }


    }

$("#mapBtn").attr('dir',HotelOffers);
   document.getElementById("icon").src= HotelImag;
  document.getElementById("HotelName").innerHTML = HotelName;
  document.getElementById("HotelDesc").innerHTML = HotelDesc;





}


$(document).ready(function(){

   $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });

  $("#btn").click(function () {
    ShowPopup($("#btn").attr('dir'));

    //$("$list1").show();

  });
  $("#mapBtn").click(function () {
    ShowPopup($("#mapBtn").attr('dir'));

    //$("$list1").show();

  });

});


function ShowPopup(src){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
  
  document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
}

function ShowPopupARS(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);

    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();

    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
}