var MusED = require('mused-app-core');
var Keys = require('mused-buttons');


var Q,W,E,R,A,S,D,F,Z,X,C,V;

var template = [
    [
        {label:'1',code:'Digit1',eventType:'beatTrigger',eventData:['Q',"4n"]},
        {label:'2',code:'Digit2',eventType:'beatTrigger',eventData:['Q',"8n"]},
        {label:'3',code:'Digit3',eventType:'beatTrigger',eventData:['E',"4n"]},
        {label:'4',code:'Digit4',eventType:'beatTrigger',eventData:['E',"8n"]},
        {label:'5',code:'Digit5',eventType:'beatTrigger',eventData:['T',"4n"]},
        {label:'6',code:'Digit6',eventType:'beatTrigger',eventData:['T',"8n"]},
        {label:'7',code:'Digit7',eventType:'beatTrigger',eventData:['U',"4n"]},
        {label:'8',code:'Digit8',eventType:'beatTrigger',eventData:['U',"8n"]}
    ],
    [
        {label:'Q',code:'KeyQ',eventType:'beatTrigger',eventData:['Q',"8t"]},
        {label:'W',code:'KeyW',eventType:'beatTrigger',eventData:['Q',"16n"]},
        {label:'E',code:'KeyE',eventType:'beatTrigger',eventData:['E',"8t"]},
        {label:'R',code:'KeyR',eventType:'beatTrigger',eventData:['E',"16n"]},
        {label:'T',code:'KeyT',eventType:'beatTrigger',eventData:['T',"8t"]},
        {label:'Y',code:'KeyY',eventType:'beatTrigger',eventData:['T',"16n"]},
        {label:'U',code:'KeyU',eventType:'beatTrigger',eventData:['U',"8t"]},
        {label:'I',code:'KeyI',eventType:'beatTrigger',eventData:['U',"16n"]}
    ],
    [
        {label:'A',code:'KeyA',eventType:'beatTrigger',eventData:['Q',"6n"]},
        {label:'S',code:'KeyS',eventType:'beatTrigger',eventData:['Q',"12n"]},
        {label:'D',code:'KeyD',eventType:'beatTrigger',eventData:['E',"6n"]},
        {label:'F',code:'KeyF',eventType:'beatTrigger',eventData:['E',"12n"]},
        {label:'G',code:'KeyG',eventType:'beatTrigger',eventData:['T',"6n"]},
        {label:'H',code:'KeyH',eventType:'beatTrigger',eventData:['T',"12n"]},
        {label:'J',code:'KeyJ',eventType:'beatTrigger',eventData:['U',"6n"]},
        {label:'K',code:'KeyK',eventType:'beatTrigger',eventData:['U',"12n"]}
    ],
    [
        {label:'Z',code:'KeyZ',eventType:'beatTrigger',eventData:['Q',"16t"]},
        {label:'X',code:'KeyX',eventType:'beatTrigger',eventData:['Q',"24n"]},
        {label:'C',code:'KeyC',eventType:'beatTrigger',eventData:['E',"16t"]},
        {label:'V',code:'KeyV',eventType:'beatTrigger',eventData:['E',"24n"]},
        {label:'B',code:'KeyB',eventType:'beatTrigger',eventData:['T',"16t"]},
        {label:'N',code:'KeyN',eventType:'beatTrigger',eventData:['T',"24n"]},
        {label:'M',code:'KeyM',eventType:'beatTrigger',eventData:['U',"16t"]},
        {label:',',code:'Key,',eventType:'beatTrigger',eventData:['U',"24n"]}
    ]
];

// Flags
var keyCount;
var kitFlag = false;


Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};


var QWERTYBeats = function(options) {
    this.initUI();
};

QWERTYBeats.prototype = {
    initUI: function () {
        console.log('init');
        // Enable Audio

        Tone.Transport.start();
        Tone.Transport.bpm.value = 140;
        
        //Initialize Kit
        kit = new Kit('#drop1','#dropQ','#dropA','#dropZ','box1');

    //    Keyboard setup and callback functions
        var grid = new Keys(template);
        console.log(template);
        document.querySelector('.keyboard').appendChild(grid.domNode);

        grid.addListener('beatTrigger', function(eventdata) {
            //Key Press Function
            
            // console.log('playBeat',eventdata);
            kit[eventdata[0]].play(eventdata[1]);
        }, function(eventdata){
            //Key Release Function
            
            // console.log('stopBeat',eventdata);
            kit[eventdata[0]].stop();
        });



    }
};

MusED.Util.extend(QWERTYBeats, MusED.AppBase);

module.exports = QWERTYBeats;
