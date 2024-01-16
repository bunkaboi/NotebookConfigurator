

let colors = ['rgba(0, 0, 0, 0.95)', 'white', '#C7BC8E', '#4B542D', '#666D6E', '#0C2340', '#0048AA', 
'#428CA8', '#6CC7E3', '#007EB1', '#00525F', '#00A294', '#50AE30', '#94C129', '#FFE000'
, '#E94D11', '#E3000E', '#B70059', '#6F0E38', '#D54A90', '#3D2784', '#EF7968'
, '#456A98', '#93B083', '#F0CACE', '#7C6559', '#417288', '#6FC5CD', '#F59D23'
, '#FFF8A6', '#D4C7E3', '#00849E', '#6D806C', '#CA412C', '#CCCDC8', '#00392F'
, '#CCE7D3', '#C5A16D', '#A7A9AC', '#E08C5B', '#261F7D', '#0071D6', '#E63D2B'
, '#FFB880']

let colorNames = ['Schwarz', 'Weiß', 'Sand', 'Army', 'Anthrazit', 'Marine', 'Königsblau'
, 'Nordic Blue', 'Ice Blue', 'Azur', 'Pacific Green', 'Smaragd', 'Fresh Green', 'Limone'
, 'Zitrone', 'Orange', 'Rot', 'Beere', 'Port Red', 'New Pink', 'Violett'
, 'Bellini', 'Denim', 'Salbei', 'Puder', 'Warm Earth', 'Stone Blue', 'Aquamarine'
, 'Rising Sun', 'Vanilla', 'Lilac', 'Ocean', 'Oliv', 'Fox Red', 'Light Grey'
, 'Forest Green', 'Mint Green', 'Gold', 'Silber', 'Kupfer', 'Ink', 'Sky', 'Lobster', 'Apricot']


function render() {
    let content = document.getElementById('content');

    content.innerHTML = ``;
    
    content.innerHTML = /* HTML */`
    <div id="container" class="container">

        <div id="menu" class="menu">
            
        </div>
            
        <div class="notebook-pagemarker-penloop-container">
            <div class="notebook-pagemarker-container">
                
                <div id="notebook" class="notebook">
                    <div class="foldShadow"></div>
                    <div class="margins">
                        <img onload="fromBottom()" id="moveLogo" class="imgLogo" src="./img/EPS.svg">
                        <div class="margin-container">
                            <div id="margin" class="margin"></div>
                            <div id="fromBottom">Text zu errechnen</div>
                        </div>
                    </div>
                    <div id="enclosureband" class="enclosureband"></div>
                </div>
                
                <div class="pagemarkers">
                    <div id="pagemarkerLeft" class="pagemarkerLeft">
                        <div id="stripes1"></div>
                        <div id="stripes2"></div>
                    </div>
                    <div id="pagemarkerRight" class="pagemarkerRight"></div>
                </div>
            </div>
        
            <div id="mockUpPenloop" class="penloop"></div>

    </div>
        <div class="size-container">
            <input id="Xposition" type="number" onclick="Xpos()" min="0" max="150" value="15">Abstand von unten
            <input id="Yposition" type="number" onclick="Ypos()" min="0" max="150" value="15">rechts/links
            <input id="widthLogo" type="number" onclick="widthLogo()" min="10" max="145" value="40">breite
            <div id="logoHeight"></div>
        </div>
    
    `;
    fromBottom();
    Xpos();
    Ypos();
    widthLogo();
    chooseColor();
    logoHeight();
    
    
}

function logoHeight(){
    document.getElementById('logoHeight').textContent = document.getElementById('moveLogo').scrollHeight * 0.2645;
}

function fromBottom(){
   
    let fromBtm = document.getElementById('margin').scrollHeight * 0.2645;

    document.getElementById('fromBottom').innerText = fromBtm.toFixed(0) +" mm";
}

function widthLogo(){
    let newX = document.getElementById('widthLogo').value;
 
    let imgWidth = document.getElementById('moveLogo').style;

    imgWidth.width = newX + "mm";
    
}

function Xpos(){
    let newX = document.getElementById('Xposition').value;
 
    let imgPos = document.getElementById('moveLogo').style;

    imgPos.marginTop = newX + "mm";
    fromBottom();
}

function Ypos(){
    let newY = document.getElementById('Yposition').value;
 
    let imgPos = document.getElementById('moveLogo').style;

    imgPos.marginLeft = newY + "mm";
}


function changeColor() {
    let i = document.getElementById('cover').value;
    const color = colors[i];

    document.getElementById('notebook').style.backgroundColor = `${color}`;
    changeElastic();
    changePMLeft();
    changePMRight();
    changePenloop();
}

function changeElastic(){
    let j = document.getElementById('enclosure').value;
    const colorband = colors[j];

    let x = document.getElementById('cover').value;
    let book = colors[x];

    if (j == 'v') {
        document.getElementById('enclosureband').style.backgroundColor = `${book}`;
    }
    else {
        document.getElementById('enclosureband').style.backgroundColor = `${colorband}`;
    }
}

function changePMLeft(){
    let k = document.getElementById('pmLeft').value;
    const colorband = colors[k];

    let x = document.getElementById('cover').value;
    let book = colors[x];

    if (k == 'v') {
        document.getElementById('pagemarkerLeft').style.backgroundColor = `${book}`;
        document.getElementById('stripes1').classList.add('pagemarkerStripes');
        document.getElementById('stripes2').classList.add('pagemarkerStripes');
    }
    else {
        document.getElementById('pagemarkerLeft').style.backgroundColor = `${colorband}`;
        document.getElementById('stripes1').classList.remove('pagemarkerStripes');
        document.getElementById('stripes2').classList.remove('pagemarkerStripes');
    }   
}

function changePMRight(){
    let l = document.getElementById('pmRight').value;
    const colorband = colors[l];

    let x = document.getElementById('cover').value;
    let book = colors[x];

    if (l == 'v') {
        document.getElementById('pagemarkerRight').style.backgroundColor = `${book}`;
    }
    else {
    document.getElementById('pagemarkerRight').style.backgroundColor = `${colorband}`;
    }
}


function changePenloop(){
    let m = document.getElementById('penloop').value;
    const colorband = colors[m];

    let x = document.getElementById('cover').value;
    let book = colors[x];

    if (m == 'v') {
        document.getElementById('mockUpPenloop').style.backgroundColor = `${book}`;
    }
    else {
    document.getElementById('mockUpPenloop').style.backgroundColor = `${colorband}`;
    }
}


function testKausal(){
    document.getElementsByClassName('testA5')[3].classList.remove('noA5');
}


function chooseColor() {
    document.getElementById('menu').innerHTML = /* HTML */`
        <div class="menuFrame">
        <div id="menuCover" class="menuPoint">Cover:</div>
           <select name="cover" id="cover" class="selectbox" onclick="changeColor()">
                <option>Auswahl...</option>
                
                <option value="0" >Schwarz</option>
                <option value="1" >Weiß</option>
                <option value="2" >Sand</option>
                <option value="3" >Army</option>
                <option value="4">Anthrazit</option>
                <option value="5">Marine</option>
                <option value="6">Königsblau</option>
                <option value="7">Nordic Blue</option>
                <option value="8">Ice Blue</option>
                <option value="9">Azur</option>
                <option value="10">Pacific Green</option>
                <option value="11">Smaragd</option>
                <option value="12">Fresh Green</option>
                <option value="13">Limone</option>
                <option value="14">Zitrone</option>
                <option value="15">Orange</option>
                <option value="16">Rot</option>
                <option value="17">Beere</option>
                <option value="18">Port Red</option>
                <option value="19">New Pink</option>
                <option value="20">Violett</option>
                <option value="21">Bellini</option>
                <option value="22">Denim</option>
                <option value="23">Salbei</option>
                <option value="24">Puder</option>
                <option value="25">Warm Earth</option>
                <option value="26">Stone Blue</option>
                <option value="27">Aquamarine</option>
                <option value="28">Rising Sun</option>
                <option value="29">Vanilla</option>
                <option value="30">Lilac</option>
                <option value="31">Ocean</option>
                <option value="32">Oliv</option>
                <option value="33">Fox Red</option>
                <option value="34">Light Grey</option>
                <option value="35">Forest Green</option>
                <option value="36">Mint Green</option>
                <option value="37">Gold</option>
                <option value="38">Silber</option>
                <option value="39">Kupfer</option>
                <option value="40">Ink</option>
                <option value="41">Sky</option>
                <option value="42">Lobster</option>
                <option value="43">Apricot</option>

            </select>
            </div>

            <div class="menuFrame">
            <div class="menuPoint">Verschlussgummi:</div>
            <select name="enclosure" id="enclosure" class="selectbox" onclick="changeElastic()">
                <option value="v">Buchfarbe</option>
                <option value="0">Schwarz</option>
                <option value="1">Weiß</option>
                <option value="2">Sand</option>
                <option value="3">Army</option>
                <option value="4">Anthrazit</option>
                <option value="5">Marine</option>
                <option value="6">Königsblau</option>
                <option value="7">Nordic Blue</option>
                <option value="8">Ice Blue</option>
                <option value="9">Azur</option>
                <option value="10">Pacific Green</option>
                <option value="11">Smaragd</option>
                <option value="12">Fresh Green</option>
                <option value="13">Limone</option>
                <option value="14">Zitrone</option>
                <option value="15">Orange</option>
                <option value="16">Rot</option>
                <option value="17">Beere</option>
                <option value="18">Port Red</option>
                <option value="19">New Pink</option>
                <option value="20">Violett</option>
                <option value="21">Bellini</option>
                <option value="22">Denim</option>
                <option value="23">Salbei</option>
                <option value="24">Puder</option>
                <option value="25">Warm Earth</option>
                <option value="26">Stone Blue</option>
                <option value="27">Aquamarine</option>
                <option value="28">Rising Sun</option>
                <option value="29">Vanilla</option>
                <option value="30">Lilac</option>
                <option value="31">Ocean</option>
                <option value="32">Oliv</option>
                <option value="33">Fox Red</option>
                <option value="34">Light Grey</option>
                <option value="35">Forest Green</option>
                <option value="36">Mint Green</option>
                <option value="37">Gold</option>
                <option value="38">Silber</option>
                <option value="39">Kupfer</option>
                <option value="40">Ink</option>
                <option value="41">Sky</option>
                <option value="42">Lobster</option>
                <option value="43">Apricot</option>
            </select>
            </div>

            <div class="menuFrame">
            <div class="menuPoint">Lesezeichen 1:</div>
            <select name="pmLeft" id="pmLeft" class="selectbox" onclick="changePMLeft()">
                <option value="v">Buchfarbe</option>
                <option value="0">Schwarz</option>
                <option value="1">Weiß</option>
                <option value="2">Sand</option>
                <option value="3">Army</option>
                <option value="4">Anthrazit</option>
                <option value="5">Marine</option>
                <option value="6">Königsblau</option>
                <option value="7">Nordic Blue</option>
                <option value="8">Ice Blue</option>
                <option value="9">Azur</option>
                <option value="10">Pacific Green</option>
                <option value="11">Smaragd</option>
                <option value="12">Fresh Green</option>
                <option value="13">Limone</option>
                <option value="14">Zitrone</option>
                <option value="15">Orange</option>
                <option value="16">Rot</option>
                <option value="17">Beere</option>
                <option value="18">Port Red</option>
                <option value="19">New Pink</option>
                <option value="20">Violett</option>
                <option value="21">Bellini</option>
                <option value="22">Denim</option>
                <option value="23">Salbei</option>
                <option value="24">Puder</option>
                <option value="25">Warm Earth</option>
                <option value="26">Stone Blue</option>
                <option value="27">Aquamarine</option>
                <option value="28">Rising Sun</option>
                <option value="29">Vanilla</option>
                <option value="30">Lilac</option>
                <option value="31">Ocean</option>
                <option value="32">Oliv</option>
                <option value="33">Fox Red</option>
                <option value="34">Light Grey</option>
                <option value="35">Forest Green</option>
                <option value="36">Mint Green</option>
                <option value="37">Gold</option>
                <option value="38">Silber</option>
                <option value="39">Kupfer</option>
                <option value="40">Ink</option>
                <option value="41">Sky</option>
                <option value="42">Lobster</option>
                <option value="43">Apricot</option>
            </select>
            </div>

            <div class="menuFrame">
            <div class="menuPoint">Lesezeichen 2:</div>
            <select name="pmRight" id="pmRight" class="selectbox" onclick="changePMRight()">
                <option value="v">Buchfarbe</option>
                <option value="0">Schwarz</option>
                <option value="1">Weiß</option>
                <option value="2">Sand</option>
                <option value="3">Army</option>
                <option value="4">Anthrazit</option>
                <option value="5">Marine</option>
                <option value="6">Königsblau</option>
                <option value="7">Nordic Blue</option>
                <option value="8">Ice Blue</option>
                <option value="9">Azur</option>
                <option value="10">Pacific Green</option>
                <option value="11">Smaragd</option>
                <option value="12">Fresh Green</option>
                <option value="13">Limone</option>
                <option value="14">Zitrone</option>
                <option value="15">Orange</option>
                <option value="16">Rot</option>
                <option value="17">Beere</option>
                <option value="18">Port Red</option>
                <option value="19">New Pink</option>
                <option value="20">Violett</option>
                <option value="21">Bellini</option>
                <option value="22">Denim</option>
                <option value="23">Salbei</option>
                <option value="24">Puder</option>
                <option value="25">Warm Earth</option>
                <option value="26">Stone Blue</option>
                <option value="27">Aquamarine</option>
                <option value="28">Rising Sun</option>
                <option value="29">Vanilla</option>
                <option value="30">Lilac</option>
                <option value="31">Ocean</option>
                <option value="32">Oliv</option>
                <option value="33">Fox Red</option>
                <option value="34">Light Grey</option>
                <option value="35">Forest Green</option>
                <option value="36">Mint Green</option>
                <option value="37">Gold</option>
                <option value="38">Silber</option>
                <option value="39">Kupfer</option>
                <option value="40">Ink</option>
                <option value="41">Sky</option>
                <option value="42">Lobster</option>
                <option value="43">Apricot</option>
            </select>
            </div>

            <div class="menuFrame">
            <div class="menuPoint">Penloop:</div>
            <select name="penloop" id="penloop" class="selectbox" onclick="changePenloop()">
                <option value="v">Buchfarbe</option>
                <option value="0">Schwarz</option>
                <option value="1">Weiß</option>
                <option value="2">Sand</option>
                <option value="3">Army</option>
                <option value="4">Anthrazit</option>
                <option value="5">Marine</option>
                <option value="6">Königsblau</option>
                <option value="7">Nordic Blue</option>
                <option value="8">Ice Blue</option>
                <option value="9">Azur</option>
                <option value="10">Pacific Green</option>
                <option value="11">Smaragd</option>
                <option value="12">Fresh Green</option>
                <option value="13">Limone</option>
                <option value="14">Zitrone</option>
                <option value="15">Orange</option>
                <option value="16">Rot</option>
                <option value="17">Beere</option>
                <option value="18">Port Red</option>
                <option value="19">New Pink</option>
                <option value="20">Violett</option>
                <option value="21">Bellini</option>
                <option value="22">Denim</option>
                <option value="23">Salbei</option>
                <option value="24">Puder</option>
                <option value="25">Warm Earth</option>
                <option value="26">Stone Blue</option>
                <option value="27">Aquamarine</option>
                <option value="28">Rising Sun</option>
                <option value="29">Vanilla</option>
                <option value="30">Lilac</option>
                <option value="31">Ocean</option>
                <option value="32">Oliv</option>
                <option value="33">Fox Red</option>
                <option value="34">Light Grey</option>
                <option value="35">Forest Green</option>
                <option value="36">Mint Green</option>
                <option value="37">Gold</option>
                <option value="38">Silber</option>
                <option value="39">Kupfer</option>
                <option value="40">Ink</option>
                <option value="41">Sky</option>
                <option value="42">Lobster</option>
                <option value="43">Apricot</option>
            </select>
            </div>

`;
}