//音乐播放部分
const songPlay = document.getElementById('song-play');
const songIcons = document.querySelector('.song-icons');
const lyricsBG = document.getElementById('lyrics');
const music = new Audio('assets/song.mp3');
let isPlaying = false;
music.loop = true;
music.volume = 0.8;

songPlay.addEventListener('mouseover', function() {
    if (isPlaying) {
        songIcons.src = 'assets/pause.svg';
    }
    else {
        songIcons.src = 'assets/play.svg';
    }
});

songPlay.addEventListener('mouseout', function() {
    songIcons.src = 'assets/music.svg'
});


// 歌词显示部分
lyrics = {
    "time1": 1,
    "text1": "作词 : 姬赓",
    "time2": 2.3,
    "text2": "作曲 : 董亚千",
    "time3": 1.3,
    "text3": "自然赠予你",
    "time4": 6.1,
    "text4": "树冠 微风 肩头的暴雨",
    "time5": 1.9,
    "text5": "片刻后生成",
    "time6": 6.6,
    "text6": "平衡 忠诚 不息的身体",
    "time7": 4.1,
    "text7": "捕食饮水",
    "time8": 3.9,
    "text8": "清早眉间白云生",
    "time9": 3.9,
    "text9": "跳跃漫游",
    "time10": 21.3,
    "text10": "晚来拂面渤海风",
    "time11": 1.4,
    "text11": "朝霞化精灵",
    "time12": 6.1,
    "text12": "轻快 明亮 恒温的伴侣",
    "time13": 2,
    "text13": "她与你共存",
    "time14": 6.4,
    "text14": "违背 对抗 相同的命运",
    "time15": 4.2,
    "text15": "爱与疼痛",
    "time16": 3.8,
    "text16": "不觉茫茫道路长",
    "time17": 4.2,
    "text17": "生活历险",
    "time18": 34.6,
    "text18": "并肩莽莽原野荒",
    "time19": 1.7,
    "text19": "山崖复远望",
    "time20": 6.2,
    "text20": "仓皇 无告 不回的河流",
    "time21": 1.5,
    "text21": "平原不可见",
    "time22": 6.8,
    "text22": "晦暗 无声 未知的存亡",
    "time23": 4.1,
    "text23": "大雾重重",
    "time24": 3.8,
    "text24": "时代喧哗造物忙",
    "time25": 4.1,
    "text25": "火光忷忷",
    "time26": 35.1,
    "text26": "指引盗寇入太行",
    "time27": 4.1,
    "text27": "大雾重重",
    "time28": 4.1,
    "text28": "时代喧哗造物忙",
    "time29": 3.8,
    "text29": "火光忷忷",
    "time30": 7.6,
    "text30": "指引盗寇入太行",
}
let lyricsProgress = 0;
let slpeepTime = 100;
const lyricsText = document.getElementById('lyrics-txet');

function updateLyrics() {
    if (isPlaying) {
        lyricsProgress++;
        if (lyricsProgress > Object.keys(lyrics).length/2) {
            lyricsProgress = 1;
        }
        lyricsText.innerText = lyrics['text' + lyricsProgress.toString()]
        slpeepTime = parseFloat(lyrics['time' + lyricsProgress.toString()])*1000;
    } else {
        slpeepTime = 100;
    }
    setTimeout(updateLyrics, slpeepTime)
}
updateLyrics()


// 最终函数
function playSong() {
    if (isPlaying) {
        music.pause();
        isPlaying = false;
        songIcons.src = 'assets/play.svg';
        lyricsBG.style.animation = 'fade 1s forwards';
    } else {
        music.play().then(() => {});
        isPlaying = true;
        songIcons.src = 'assets/pause.svg';
        lyricsBG.style.animation = 'brighten 1s forwards';
    }
}