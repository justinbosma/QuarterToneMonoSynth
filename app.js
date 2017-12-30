// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var globals = (function(){
    var pm = {};
    pm.colSelected = 0;
    pm.numColumns = 24;
    pm.frequency = 220;
    pm.masterGain = audioCtx.createGain();
    pm.masterGain.gain.value = 1;

    pm.osc1 = audioCtx.createOscillator();
    pm.osc1.type = 'sine';
    pm.osc1.frequency.value = pm.frequency;
    pm.gain1 = audioCtx.createGain();
    pm.gain1.gain.value = 0;
    pm.osc1.connect(pm.gain1);
    pm.gain1.connect(pm.masterGain);

    pm.osc2 = audioCtx.createOscillator();
    pm.osc2.type = 'sine';
    pm.osc2.frequency.value = pm.frequency*(28/27);
    pm.gain2 = audioCtx.createGain();
    pm.gain2.gain.value = 0;
    pm.osc2.connect(pm.gain2);
    pm.gain2.connect(pm.masterGain);

    pm.osc3= audioCtx.createOscillator();
    pm.osc3.type = 'sine';
    pm.osc3.frequency.value = pm.frequency*(16/15);
    pm.gain3 = audioCtx.createGain();
    pm.gain3.gain.value = 0;
    pm.osc3.connect(pm.gain3);
    pm.gain3.connect(pm.masterGain);

    pm.osc4= audioCtx.createOscillator();
    pm.osc4.type = 'sine';
    pm.osc4.frequency.value = pm.frequency*(11/10);
    pm.gain4 = audioCtx.createGain();
    pm.gain4.gain.value = 0;
    pm.osc4.connect(pm.gain4);
    pm.gain4.connect(pm.masterGain);

    pm.osc5 = audioCtx.createOscillator();
    pm.osc5.type = 'sine';
    pm.osc5.frequency.value = pm.frequency*(9/8);
    pm.gain5 = audioCtx.createGain();
    pm.gain5.gain.value = 0;
    pm.osc5.connect(pm.gain5);
    pm.gain5.connect(pm.masterGain);

    pm.osc6 = audioCtx.createOscillator();
    pm.osc6.type = 'sine';
    pm.osc6.frequency.value = pm.frequency*(8/7);
    pm.gain6 = audioCtx.createGain();
    pm.gain6.gain.value = 0;
    pm.osc6.connect(pm.gain6);
    pm.gain6.connect(pm.masterGain);

    pm.osc7 = audioCtx.createOscillator();
    pm.osc7.type = 'sine';
    pm.osc7.frequency.value = pm.frequency*(6/5);
    pm.gain7 = audioCtx.createGain();
    pm.gain7.gain.value = 0;
    pm.osc7.connect(pm.gain7);
    pm.gain7.connect(pm.masterGain);

    pm.osc8 = audioCtx.createOscillator();
    pm.osc8.type = 'sine';
    pm.osc8.frequency.value = pm.frequency*(11/9);
    pm.gain8 = audioCtx.createGain();
    pm.gain8.gain.value = 0;
    pm.osc8.connect(pm.gain8);
    pm.gain8.connect(pm.masterGain);

    pm.osc9 = audioCtx.createOscillator();
    pm.osc9.type = 'sine';
    pm.osc9.frequency.value = pm.frequency*(5/4);
    pm.gain9 = audioCtx.createGain();
    pm.gain9.gain.value = 0;
    pm.osc9.connect(pm.gain9);
    pm.gain9.connect(pm.masterGain);

    pm.osc10 = audioCtx.createOscillator();
    pm.osc10.type = 'sine';
    pm.osc10.frequency.value = pm.frequency*(9/7);
    pm.gain10 = audioCtx.createGain();
    pm.gain10.gain.value = 0;
    pm.osc10.connect(pm.gain10);
    pm.gain10.connect(pm.masterGain);

    pm.osc11 = audioCtx.createOscillator();
    pm.osc11.type = 'sine';
    pm.osc11.frequency.value = pm.frequency*(4/3);
    pm.gain11 = audioCtx.createGain();
    pm.gain11.gain.value = 0;
    pm.osc11.connect(pm.gain11);
    pm.gain11.connect(pm.masterGain);

    pm.osc12 = audioCtx.createOscillator();
    pm.osc12.type = 'sine';
    pm.osc12.frequency.value = pm.frequency*(11/8);
    pm.gain12 = audioCtx.createGain();
    pm.gain12.gain.value = 0;
    pm.osc12.connect(pm.gain12);
    pm.gain12.connect(pm.masterGain);

    pm.osc13= audioCtx.createOscillator();
    pm.osc13.type = 'sine';
    pm.osc13.frequency.value = pm.frequency*(7/5);
    pm.gain13 = audioCtx.createGain();
    pm.gain13.gain.value = 0;
    pm.osc13.connect(pm.gain13);
    pm.gain13.connect(pm.masterGain);

    pm.osc14= audioCtx.createOscillator();
    pm.osc14.type = 'sine';
    pm.osc14.frequency.value = pm.frequency*(16/11);
    pm.gain14 = audioCtx.createGain();
    pm.gain14.gain.value = 0;
    pm.osc14.connect(pm.gain14);
    pm.gain14.connect(pm.masterGain);

    pm.osc15 = audioCtx.createOscillator();
    pm.osc15.type = 'sine';
    pm.osc15.frequency.value = pm.frequency*(3/2);
    pm.gain15 = audioCtx.createGain();
    pm.gain15.gain.value = 0;
    pm.osc15.connect(pm.gain15);
    pm.gain15.connect(pm.masterGain);

    pm.osc16 = audioCtx.createOscillator();
    pm.osc16.type = 'sine';
    pm.osc16.frequency.value = pm.frequency*(14/9);
    pm.gain16 = audioCtx.createGain();
    pm.gain16.gain.value = 0;
    pm.osc16.connect(pm.gain16);
    pm.gain16.connect(pm.masterGain);

    pm.osc17 = audioCtx.createOscillator();
    pm.osc17.type = 'sine';
    pm.osc17.frequency.value = pm.frequency*(8/5);
    pm.gain17 = audioCtx.createGain();
    pm.gain17.gain.value = 0;
    pm.osc17.connect(pm.gain17);
    pm.gain17.connect(pm.masterGain);

    pm.osc18 = audioCtx.createOscillator();
    pm.osc18.type = 'sine';
    pm.osc18.frequency.value = pm.frequency*(18/11);
    pm.gain18 = audioCtx.createGain();
    pm.gain18.gain.value = 0;
    pm.osc18.connect(pm.gain18);
    pm.gain18.connect(pm.masterGain);

    pm.osc19 = audioCtx.createOscillator();
    pm.osc19.type = 'sine';
    pm.osc19.frequency.value = pm.frequency*(5/3);
    pm.gain19 = audioCtx.createGain();
    pm.gain19.gain.value = 0;
    pm.osc19.connect(pm.gain19);
    pm.gain19.connect(pm.masterGain);

    pm.osc20 = audioCtx.createOscillator();
    pm.osc20.type = 'sine';
    pm.osc20.frequency.value = pm.frequency*(7/4);
    pm.gain20 = audioCtx.createGain();
    pm.gain20.gain.value = 0;
    pm.osc20.connect(pm.gain20);
    pm.gain20.connect(pm.masterGain);

    pm.osc21 = audioCtx.createOscillator();
    pm.osc21.type = 'sine';
    pm.osc21.frequency.value = pm.frequency*(9/5);
    pm.gain21 = audioCtx.createGain();
    pm.gain21.gain.value = 0;
    pm.osc21.connect(pm.gain21);
    pm.gain21.connect(pm.masterGain);

    pm.osc22 = audioCtx.createOscillator();
    pm.osc22.type = 'sine';
    pm.osc22.frequency.value = pm.frequency*(11/6);
    pm.gain22 = audioCtx.createGain();
    pm.gain22.gain.value = 0;
    pm.osc22.connect(pm.gain22);
    pm.gain22.connect(pm.masterGain);

    pm.osc23 = audioCtx.createOscillator();
    pm.osc23.type = 'sine';
    pm.osc23.frequency.value = pm.frequency*(15/8);
    pm.gain23 = audioCtx.createGain();
    pm.gain23.gain.value = 0;
    pm.osc23.connect(pm.gain23);
    pm.gain23.connect(pm.masterGain);

    pm.osc24 = audioCtx.createOscillator();
    pm.osc24.type = 'sine';
    pm.osc24.frequency.value = pm.frequency*(27/14);
    pm.gain24 = audioCtx.createGain();
    pm.gain24.gain.value = 0;
    pm.osc24.connect(pm.gain24);
    pm.gain24.connect(pm.masterGain);

    pm.masterGain.connect(audioCtx.destination);
	return pm;
})();
function start() {
	globals.osc1.start();
	globals.osc2.start();
	globals.osc3.start();
	globals.osc4.start();
	globals.osc5.start();
	globals.osc6.start();
	globals.osc7.start();
	globals.osc8.start();
	globals.osc9.start();
	globals.osc10.start();
    globals.osc11.start();
    globals.osc12.start();
    globals.osc13.start();
    globals.osc14.start();
    globals.osc15.start();
    globals.osc16.start();
    globals.osc17.start();
    globals.osc18.start();
    globals.osc19.start();
    globals.osc20.start();
    globals.osc21.start();
    globals.osc22.start();
    globals.osc23.start();
    globals.osc24.start();
};

function clickCell(elmnt) {
	if(elmnt.classList.contains('inactive')) {
		elmnt.classList.remove('inactive');
		elmnt.style.background = 'yellow';
		elmnt.classList.add('active');
		var cell = elmnt.getAttribute('id');
		var cellSubString = cell.substr(0, cell.length - 2);
		var parent = elmnt.parentElement;
		var indexString = parent.getAttribute('id');
		var index = parseInt(indexString.charAt(indexString.length - 1));

        var oscVol = parseInt(cell.charAt(cell.length - 1));
        oscVol = oscVol*(1/9);
        var oscIndex = cellSubString.match(/\d+/);
        console.log(oscIndex[0]);

        switch(parseInt(oscIndex[0])) { //osc index 
            case 1:
                globals.gain1.gain.value = oscVol;
                break;
            case 2:
                globals.gain2.gain.value = oscVol;
                break;
            case 3:
                globals.gain3.gain.value = oscVol;
                break;
            case 4:
                globals.gain4.gain.value = oscVol;
                break;
            case 5:
                globals.gain5.gain.value = oscVol;
                break;
            case 6:
                globals.gain6.gain.value = oscVol;
                break;
            case 7:
                globals.gain7.gain.value = oscVol;
                break;
            case 8:
                globals.gain8.gain.value = oscVol;
                break;
            case 9:
                globals.gain9.gain.value = oscVol;
                break;
            case 10:
                globals.gain10.gain.value = oscVol;
                break;
            case 11:
                globals.gain11.gain.value = oscVol;
                break;
            case 12:
                globals.gain12.gain.value = oscVol;
                break;
            case 13:
                globals.gain13.gain.value = oscVol;
                break;
            case 14:
                globals.gain14.gain.value = oscVol;
                break;
            case 15:
                globals.gain15.gain.value = oscVol;
                break;
            case 16:
                globals.gain16.gain.value = oscVol;
                break;
            case 17:
                globals.gain17.gain.value = oscVol;
                break;
            case 18:
                globals.gain18.gain.value = oscVol;
                break;
            case 19:
                globals.gain19.gain.value = oscVol;
                break;
            case 20:
                globals.gain20.gain.value = oscVol;
                break;
            case 21:
                globals.gain21.gain.value = oscVol;
                break;
            case 22:
                globals.gain22.gain.value = oscVol;
                break;
            case 23:
                globals.gain23.gain.value = oscVol;
                break;
            case 24:
                globals.gain24.gain.value = oscVol;
                break;                
        }

		for(i = index - 1; i >= 0; i--) {
			var cellString = cellSubString + '_' + i;
			document.getElementById(cellString).style.background = 'yellow';
            document.getElementById(cellString).classList.remove('active');
            document.getElementById(cellString).classList.add('inactive');
			//console.log(i);
		};
		for(i = index + 1; i < 24; i++) {
			var cellString = cellSubString + '_' + i;
			document.getElementById(cellString).style.background = '#003C66';
            document.getElementById(cellString).classList.remove('active');
            document.getElementById(cellString).classList.add('inactive');
			//if(document.getElementById(cellString).contains('active')) {
				
			//}
			//console.log(i);
		};

	};

};

start();



//set all bottom row id active
//click on cell -> set that osc to that volume, set that cell and all below to yellow

//connect 
