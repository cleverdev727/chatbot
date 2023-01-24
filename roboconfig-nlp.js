//Developed By RoboNegotiator
//Version 3.0
//Developed On: 02/21/2020
//Configuration JS file for RoboNegotiator

var API_ENDPOINT = 'https://ui.robonegotiator.com';
var ASSET_PATH 	= 'https://mydemo.robonegotiator.com/js/plugins/new-js';
var ANALYTICS_ENDPOINT 	= 'https://dev6.robonegotiator.com/api/chatSession/faker';
var ANALYTICS_TOKEN 	= '2d47436625a76b11e5eca1b94e55e2aa98d5f725';
 // var minifiedScriptDirectory = ASSET_PATH ;
 // var minifiedScriptDirectory = "https://ttopy.com" ;
//  var minifiedScriptDirectory = "https://evening-gorge-78643.herokuapp.com" ; 
 var minifiedScriptDirectory = "https://robonegotiator-app.herokuapp.com" ; 
//  var minifiedScriptDirectory = 'https://quiet-escarpment-60086.herokuapp.com';//ASSET_PATH+'/v3';


var ROBO_PASS_COLOR 					= ROBO_PASS_COLOR || '#131f57';
var ROBO_LOGO_URL 						= ROBO_LOGO_URL || ((clientSetCategory == 'Hotels') ? ASSET_PATH+"/v3/assets/img/hotel-logo.png" : ROBO_LOGO_URL || ASSET_PATH+'/v2/assets/img/logo.png');
var ROBO_STORE_NAME 					= ROBO_STORE_NAME || ((clientSetCategory == 'Hotels') ? "Your Hotel Name" : ROBO_STORE_NAME || 'AutoDealCloser Chatbot');
var ROBO_PASS_TEXTCOLOR 				= ROBO_PASS_TEXTCOLOR || '#ffffff';
var ROBO_NEGOTIATION_MODE 				= ROBO_NEGOTIATION_MODE || 'auto';
var clientSetCategory 					= clientSetCategory || 'others';
var ROBO_API_KEY 						= ROBO_API_KEY || '70c8aa1d3aff53c74f24301d6b39bd0c60eedea9';
var ROBO_POWERED_BY 					= ROBO_POWERED_BY || 'Powered by: AutoDealCloser';
var ROBO_SELLER_EMAIL 					= ROBO_SELLER_EMAIL || "dshah@autodealcloser.com";
var ROBO_NEGOTIATION_MODE 				= ROBO_NEGOTIATION_MODE || "auto";
var ROBO_CURRENCY 						= ROBO_CURRENCY || 'USD';
var ROBO_SET_CURRENCY 					= ROBO_SET_CURRENCY || ROBO_CURRENCY;
var ROBO_QUANTITY 						= ROBO_QUANTITY || 1;
var is_cms 								= is_cms ||  1;
var ADD_TO_CART_BTN_IDENTIFIER_TYPE 	= ADD_TO_CART_BTN_IDENTIFIER_TYPE || "class";
var ADD_TO_CART_BTN_IDENTIFIER_NAME 	= ADD_TO_CART_BTN_IDENTIFIER_NAME || "single_add_to_cart_button";
var ROBO_PRODUCT_NAME_IDENTIFIER_TYPE 	= ROBO_PRODUCT_NAME_IDENTIFIER_TYPE || 'class'; //Optional
var ROBO_PRODUCT_NAME_IDENTIFIER_NAME 	= ROBO_PRODUCT_NAME_IDENTIFIER_NAME || 'product-title'; //Optional
var ROBO_BTN_CLASS 						= ROBO_BTN_CLASS || "button"; //Optional
var ROBO_BTN_PREFIX_ELEMENT 			= ROBO_BTN_PREFIX_ELEMENT || ""; //Optional
var ROBO_BTN_CUSTOM_TEXT 				= ROBO_BTN_CUSTOM_TEXT || "Start Buying Process"; //Optional
var ROBO_BTN_STYLE 						= ROBO_BTN_STYLE || "width:305px;height:50px;margin-top: 15px;color:#fff;background-color:#000080;"; //Optional
var USER_ROLE							= USER_ROLE || "buyer";
var CLIENT_NAME							= "";
var INTEGRATION_MODE					= INTEGRATION_MODE || "LIVE"; // SIMULATED
var SIMULATED_DATA						= SIMULATED_DATA || {"seller_lowest_deal_price": "9000.00","seller_deal_price": "10000.00"};
var SKIP_UPLOAD_DOCUMENTS				= SKIP_UPLOAD_DOCUMENTS || false;
var SIMPLIFIED_CHATBOT					= SIMPLIFIED_CHATBOT || false;
var LEGAL_ACKNOWLEDGEMENT				= LEGAL_ACKNOWLEDGEMENT || true;
var ALTERNATIVE_FLOW_SAME_SELLER 		= ALTERNATIVE_FLOW_SAME_SELLER || "yes";
var CHATBOT_FLOW 		                = CHATBOT_FLOW || "dialogflow"; //"predefined";

if(typeof clientSetRoboUPCCode === 'undefined' && inputName === 'undefined')
{
	var inputName = 'upcCode';
}
if(typeof clientSetRoboUPCCode !== 'undefined')
{
	var ROBO_UPC_CODE = clientSetRoboUPCCode;
}
if(typeof inputName !== "undefined")
{
	var ROBO_UPC_CODE = document.querySelector("[name='"+inputName+"']").value;
}
if(typeof inputClass !== "undefined")
{
	var ROBO_UPC_CODE = document.getElementsByClassName(inputClass)[0].value;
}
if(typeof inputID !== "undefined")
{
	var ROBO_UPC_CODE = document.getElementById(inputID).value;
}
if(typeof htmlElementClass !== "undefined")
{
	var ROBO_UPC_CODE = document.getElementsByClassName(htmlElementClass)[0].innerText;
}
if(typeof htmlElementID !== "undefined")
{
	var ROBO_UPC_CODE = document.getElementById(htmlElementID).innerText;
}
if(ROBO_API_KEY === "b6a9bd1071d37d92d43c22131e0b16c8781d8b82")  // Since V12Software uses this API key, we want to change it to UI provisioned seller.
{
	ROBO_API_KEY = '81b8ed67b1692985c659b2bd6c05d36b94ebcf46';
}

if(ROBO_UPC_CODE == "1efd88ed5e21dff1c172312842eca1e2415fdb2d") 
{
	CLIENT_NAME = "AudiModesto";
}
if(location.hostname == "gears.robonegotiator.com") 
{
	ROBO_STORE_NAME = ROBO_STORE_NAME || "DRIVING GEARS NEGOTIATOR";
	CLIENT_NAME = "AudiModesto";
	SKIP_UPLOAD_DOCUMENTS = true;
}

var automobileKeywords = ['cars', 'vehicles',	'automobile', 'automotive', 'automobiles'];
console.log(`Robo VIN: ${ROBO_UPC_CODE}`)

// Settings required to initiate Chatbot
var roboConfigParams = {
	apiEndpoint: API_ENDPOINT,
	apiKey : ROBO_API_KEY,
	clientSetRoboUPCCode : ROBO_UPC_CODE,
	sellerEmail : ROBO_SELLER_EMAIL,
	mode : ROBO_NEGOTIATION_MODE,
	currency : ROBO_SET_CURRENCY,
	clientSetCategory: clientSetCategory,
	automobileKeywords: automobileKeywords,
	cartBtnIdentifierType: ADD_TO_CART_BTN_IDENTIFIER_TYPE,
	cartBtnIdentifierName: ADD_TO_CART_BTN_IDENTIFIER_NAME,
	productNameIdentifierType: ROBO_PRODUCT_NAME_IDENTIFIER_TYPE,
	productNameIdentifierName: ROBO_PRODUCT_NAME_IDENTIFIER_NAME,
	buttonClass: ROBO_BTN_CLASS,
	buttonPrefixElement: ROBO_BTN_PREFIX_ELEMENT,
	buttonStyle: ROBO_BTN_STYLE,
	buttonCustomText: ROBO_BTN_CUSTOM_TEXT,
	inputName: inputName,
	logoUrl: ROBO_LOGO_URL,
	storeName: ROBO_STORE_NAME,
	role: USER_ROLE,
	clientName: CLIENT_NAME,
	fakeServiceCalls: (INTEGRATION_MODE.toUpperCase() == "SIMULATED") ? true : false,
	simulatedData: SIMULATED_DATA,	
    legalAcknowledgement: LEGAL_ACKNOWLEDGEMENT,
	skipUploadDocuments: SKIP_UPLOAD_DOCUMENTS,
	chatSession: {
		url: ANALYTICS_ENDPOINT,
		token: ANALYTICS_TOKEN
	},
	simplifiedChatbot: SIMPLIFIED_CHATBOT,
	alternativeProductSameSeller: ALTERNATIVE_FLOW_SAME_SELLER
};

function loadScript(url, callback){
	var script = document.createElement("script")
	script.type = "text/javascript";

	if (script.readyState){  //IE
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" ||
					script.readyState == "complete"){
				script.onreadystatechange = null;
				if(typeof callback == 'function') callback();
			}
		};
	} else {  //Others
		script.onload = function(){
			if(typeof callback == 'function') callback();
		};
	}

	script.src = url;
	window.onload = function () {
		document.body.appendChild(script);
	}

	if(document.readyState === "complete" || document.readyState === "interactive") document.body.appendChild(script);
}

if(CHATBOT_FLOW == 'dialogflow') {
    loadScript(minifiedScriptDirectory + "/script.js", function() {
		init(roboConfigParams);
		console.log("CHECKED....1");
	});
} else {
    loadScript(minifiedScriptDirectory + "/assets/js/roboconfig.min.js", function(){
        var bot = new roboNegotiate();
        bot.init(roboConfigParams);
    });
}
