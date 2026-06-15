let readCount = 0;
let danger = 0;
const articles = {

    bodies: {

    category: "CRIME",

    
    title: "MULTIPLE BODIES FOUND IN — STATE",

    text: `

Multiple bodies were discovered across
— State during the past two weeks.

All victims were found with stab wounds.

Authorities have not confirmed a connection
between the incidents.

Local reports suggest one suspect may have
approached homes while posing as a delivery worker.

`,

    thoughts: ["うちの州で複数の遺体が見つかった。",
        "最近はこういうニュースが多い",

        "戸締りはしただろうか。"
        

    ]
},
   wildfire: {
    category: "LOCAL NEWS",

    title: "WILDFIRE SPREADS ACROSS REGION",

    text: `

A wildfire continued to spread across

several counties on Tuesday.

Officials issued evacuation warnings

for nearby communities.

No fatalities have been reported.

Strong winds are expected through

the end of the week.

`,

        thoughts: ["隣の州で山火事が広がっているらしい。",

            "煙の匂いはしなかった",

            "ここまでは来ないだろう。"

        ]

    },

   internet: {
    category: "SCIENCE",

        title: "STUDY LINKS INTERNET USE TO LOWER ATTENTION",
        text: `

A recent study suggests heavy internet use

may affect attention span.

Researchers observed participants over

a six-month period.

The study did not determine whether

internet use was the direct cause.

Further research is planned.

`,

        thoughts: ["インターネットの使いすぎは注意力を下げるらしい。",

            "最近、ずっとニュースを見ている。",

            "成績が下がった気がする。"

        ]

    },

    singer: {
        category: "ENTERTAINMENT",

        title: "BAND ANNOUNCES INDEFINITE HIATUS",
        text: `

The band announced an indefinite hiatus

through its official website.

No specific reason was provided.

Upcoming performances have been canceled.

Representatives declined further comment.

`,

        thoughts: [

            "あのバンドが活動休止だ。",
            
            "…",
    

            "最近聴いていなかった。"

        ]

    },

    romance: {
        category: "ENTERTAINMENT",
        title: "ACTORS SPOTTED TOGETHER IN LOS ANGELES",
 text: `

Two actors were seen leaving a restaurant

in Los Angeles on Friday night.

Representatives for both parties

declined to comment.

Neither has publicly addressed

the rumors.

`,
        thoughts: ["有名俳優の熱愛報道だ。",
            "どうでもいい。",]

    },

    hippo: {

        category: "LOCAL NEWS",

        title: "PYGMY HIPPO BORN AT CITY ZOO",

    

    text: `

A pygmy hippo was born at the city zoo

earlier this week.

Zoo staff reported that both mother

and calf are healthy.

The zoo plans to release photographs

later this month.

`,

        thoughts: [
            "『コビトカバの赤ちゃんが誕生』",
            "平和だ。",
            "こういうのでいいのに。",
        ]

    },

    movie: {

    category: "ENTERTAINMENT",

    title: "DIRECTOR'S NEW FILM TO OPEN NEXT MONTH",

    text: `

The director's latest film is scheduled
for release next month.

The project has been in development
for nearly three years.

Advance ticket sales begin Friday.

`,

    thoughts: [
        "あの監督の新作が来月公開されるらしい。",
        "前作は見た気がする。",
        "あまり興味はない。"

    ]

}
};

function readArticle(name){

    const article = articles[name];
    if(name === "bodies"){

        danger += 3;

    }

    if(name === "internet"){

        danger += 1;

    }

    if(name === "wildfire"){

        danger += 1;

    }

    if(!article){
        console.log(name + " not found");
        return;
    }

    document.getElementById("articleCategory").textContent =
        article.category;

    document.getElementById("articleTitle").textContent =
        article.title;

    const today = new Date();

    const months = [
        "January","February","March","April",
        "May","June","July","August",
        "September","October","November","December"
    ];

    const dateText =
        months[today.getMonth()] +
        " " +
        today.getDate() +
        ", 2004";

    document.getElementById("articleDate").textContent =
        dateText;

    document.getElementById("articleText").textContent =
        article.text;

    document.getElementById("article").style.display =
        "block";

    document.getElementById("browser").style.display =
        "none";
document.getElementById("backButton").style.display =
    "block";
    if(article.thoughts.length > 0){

    for(let i = 0; i < article.thoughts.length; i++){

    setTimeout(function(){

        addThought(article.thoughts[i]);

    }, i * 1500);

}
}

    readCount++;

    if(readCount >= 3){

        endScene();

    }

}

    


function addThought(text){

    const log =
        document.getElementById("log");

    const line =
        document.createElement("div");

    line.textContent = text;

    line.style.marginBottom = "18px";

    log.appendChild(line);

    line.style.marginBottom = "25px";

}






function endScene(){

    document.getElementById("browser").style.display =
        "none";

    document.getElementById("article").style.display =
        "none";

    document.getElementById("backButton").style.display =
        "none";

    document.getElementById("dialogueBox").style.display =
        "block";

    showDialogue(
    "BANG BANG BANG",
    "ドンドンドン"
);

setTimeout(function(){

    showDialogue(
        "Mom.",
        "母さん。"
    );

},6000);

    setTimeout(function(){

        showDialogue(
            "Your grades dropped again.",
            "また成績が下がったわね。"
        );

    },7000);

    setTimeout(function(){

        showDialogue(
            "I know.",
            "わかってる。"
        );

    },10000);

    setTimeout(function(){

        showDialogue(
            "You need to take school more seriously.",
            "もっと真面目にやりなさい。"
        );

    },12000);

    setTimeout(function(){

        showDialogue(
            "Can you leave?",
            "出ていってくれない？"
        );

    },13000);

    setTimeout(function(){

        showDialogue(
            "...",
            "……"
        );

    },16000);

    setTimeout(function(){

        showDialogue(
            "Fine.",
            "わかった。"
        );

    },19000);
if(danger >= 5){

    addThought("出て行かないほうがいいかも知れない。");

}
else if(danger >= 3){

    addThought("出ていくべきだろうか?");

}
    addThought("またこの話か。");

    setTimeout(function(){

        showDialogue(
            "",
            ""
        );

    },21000);

   setTimeout(function(){

    showDialogue(
        "Ding Dong",
        "ピンポーン"
    );

},25000);

setTimeout(function(){

    showDialogue(
        "Delivery.",
        "宅配便です。"
    );

},27000);

setTimeout(function(){

    addThought("何か頼んだだろうか……");

},30000);

setTimeout(function(){

    document.getElementById(
        "endingScreen"
    ).style.display = "flex";

},34000);



}

console.log("readArticle loaded");
function closeArticle(){

    document.getElementById("article").style.display =
        "none";

    document.getElementById("browser").style.display =
        "block";

    document.getElementById("backButton").style.display =
        "none";
}


function startGame(){
  

    document.getElementById("phone").style.display =
        "none";

    document.getElementById("dialogueBox").style.display =
        "block";

   

showDialogue(
    "I need to talk to you.",
    "話したいことがある"
);

setTimeout(function(){

    addThought("珍しい。");

},2000);

    
    setTimeout(function(){

        showDialogue(
            "Can we meet tonight?",
            "今夜会えないか？"
        );

    },4000);

    setTimeout(function(){

        addThought(
            "最近あいつのバンドのメンバーが辞めたらしい。"
        );

    },8000);

    setTimeout(function(){

    addThought(
        "精神的にかなり参っているようだ。"
    );

},10000);

setTimeout(function(){

    hideDialogue();

    document.getElementById("dialogueBox").style.display =
        "none";

    document.getElementById("browser").style.display =
        "block";

},12000);

}

function hideDialogue(){

    document.getElementById(
        "dialogueEnglish"
    ).textContent = "";

    document.getElementById(
        "dialogueJapanese"
    ).textContent = "";

}



function addDialogue(name,text){

    const log =
        document.getElementById("dialogueLog");

    const line =
        document.createElement("div");

    line.innerHTML =
        "<b>" + name + ":</b> " + text;

    log.appendChild(line);

}
function showDialogue(english, japanese){

    document.getElementById(
        "dialogueEnglish"
    ).textContent = english;

    document.getElementById(
        "dialogueJapanese"
    ).textContent = "（" + japanese + "）";

}