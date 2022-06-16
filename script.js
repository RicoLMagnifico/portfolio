const arz = ['#97233F', '#000000', '#FFB612', 'cardinals', 'arz'];
const atl = ['#A71930', '#000000', '#A5ACAF', 'falcons', 'atl'];
const bal = ['#241773', '#000000', '#9E7C0C', 'ravens', 'bal'];
const buf = ['#00338D', '#C60C30', '#FFFFFF', 'bills', 'buf'];
const car = ['#0085CA', '#101820', '#BFC0BF', 'panthers', 'car'];
const chi = ['#0B162A', '#C83803', '#FFFFFF', 'bears', 'chi'];
const cin = ['#FB4F14', '#000000', '#FFFFFF', 'bengals', 'cin'];
const cle = ['#311D00', '#FF3C00', '#FFFFFF', 'browns', 'cle'];
const dal = ['#041E42', '#869397', '#FFFFFF', 'cowboys', 'dal'];
const den = ['#FB4F14', '#002244', '#FFFFFF', 'broncos', 'den'];
const det = ['#0076B6', '#B0B7BC', '#000000', 'lions', 'det'];
const gb = ['#203731', '#FFB612', '#FFFFFF', 'packers', 'gb'];
const hou = ['#03202F', '#A71930', '#FFFFFF', 'texans', 'hou'];
const ind = ['#002C5F', '#A2AAAD', '#FFFFFF', 'colts', 'ind'];
const jac = ['#006778', '#D7A22A', '#9F792C', 'jaguars', 'jac'];
const kc = ['#E31837', '#FFB81C', '#FFFFFF', 'chiefs', 'kc'];
const lac = ['#0080C6', '#FFC20E', '#FFFFFF', 'chargers', 'lac'];
const lar = ['#003594', '#FFA300', '#FFD100', 'rams', 'lar'];
const mia = ['#008E97', '#FC4C02', '#005778', 'dolphins', 'mia'];
const min = ['#4F2683', '#FFC62F', '#FFFFFF', 'vikings', 'min'];
const ne = ['#002244', '#C60C30', '#B0B7BC', 'patriots', 'ne'];
const no = ['#D3BC8D', '#101820', '#FFFFFF', 'saints', 'no'];
const nyg = ['#0B2265', '#A71930', '#A5ACAF', 'giants', 'nyg'];
const nyj = ['#125740', '#000000', '#FFFFFF', 'jets', 'nyj'];
const lv = ['#000000', '#A5ACAF', '#FFFFFF', 'raiders', 'lv'];
const phi = ['#004C54', '#ACC0C6', '#000000', 'eagles', 'phi'];
const pit = ['#FFB612', '#000000', '#FFFFFF', 'steelers', 'pit'];
const sf = ['#AA0000', '#B3995D', '#FFFFFF', '49ers', 'sf'];
const sea = ['#002244', '#69BE28', '#A5ACAF', 'seahawks', 'sea'];
const tb = ['#D50A0A', '#FF7900', '#34302B', 'buccaneers', 'tb'];
const ten = ['#0C2340', '#4B92DB', '#C8102E', 'titans', 'ten'];
const was = ['#5A1414', '#FFB612', '#FFFFFF', 'commanders', 'was'];

let nflColors = [arz, atl, bal, buf, car, chi, cin, cle, dal, den, det, gb, hou, ind, jac, kc, lac, lar, mia, min, ne, no, nyg, nyj, lv, phi, pit, sf, sea, tb, ten, was];
var arrayTeam = 0;

function randTeam() {
    arrayTeam = nflColors[Math.floor(Math.random() * 32)];
    document.getElementById('card1').style.backgroundColor = arrayTeam[0];
    document.getElementById('card2').style.backgroundColor = arrayTeam[1];
    document.getElementById('card3').style.backgroundColor = arrayTeam[2];
    console.log(arrayTeam);
}

let response = document.getElementById('mySelect');


function rightWrong() {
    if (response.value === arrayTeam[4]) {
        alert("Correct! Try Another!")
    } else {
        alert("Incorrect! Try Again!")
    }
};

const button1 = document.getElementById('tryAnother');
const button2 = document.getElementById('answer');
button1.addEventListener('click', randTeam);
button2.addEventListener('click', rightWrong);
