var admobid = {};
var showads = false;
var isTest = true;
var adloaded = false;
var adsType="";
var firstTime = 30000;
var secondTime = 30000;

// TODO: replace the following ad units with your own
admobid = { // for iOS
  banner: 'ca-app-pub-3954651014969068/7917730262',
  interstitial: 'ca-app-pub-3954651014969068/7170435437',
};

function showBanner() {
    admob.banner.config({
      id: admobid.banner,
      autoShow: true,
      bannerAtTop: true,
      isTesting: true
     })
  admob.banner.prepare();
}


function prepareInter() {
    if (admob) {
      admob.interstitial.config({ id: admobid.interstitial, autoShow: false });
      admob.interstitial.prepare();
    }
  }

function showInter() {
    if (admob) admob.interstitial.show();
  }
    
function initApp() {
  //if (!admob) { alert('admob plugin not ready'); return; }
     // Create banner
     
     loadEvents();
  }
