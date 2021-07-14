
const video = document.getElementById("video");   // 動画の取得
const btnPlay = document.getElementById("play");  // 再生ボタンの取得
btnPlay.addEventListener("click", (e) => {        // クリックされたら
    video.play();                                   // 動画を再生
});
const btnStop = document.getElementById("stop");  // 停止ボタンの取得
btnStop.addEventListener("click", (e) => {        // クリックされたら
    video.pause();                                  // 動画を停止
});

function toLink1() {
    window.location.href = "https://19j5126.github.io/rei3/"
}
AFRAME.registerComponent('linkbox1', {
    init: function () {  //aframeのコンポーネントの考え方
        console.log(this);　//aframeのコンポーネントの考え方
        const element = this.el;　　//aframeのコンポーネントの考え方
        element.addEventListener('mouseenter', function () {　//マウスの代わりに視線でクリック
            console.log('mouseenter');
            setTimeout(toLink1, 2000); //toLink関数を実行

        });
    }
});

function toLink2() {
    window.location.href = "https://19j5126.github.io/rei5/"
}
AFRAME.registerComponent('linkbox2', {
    init: function () {  //aframeのコンポーネントの考え方
        console.log(this);　//aframeのコンポーネントの考え方
        const element = this.el;　　//aframeのコンポーネントの考え方
        element.addEventListener('mouseenter', function () {　//マウスの代わりに視線でクリック
            console.log('mouseenter');
            setTimeout(toLink2, 2000); //toLink関数を実行

        });
    }
});


function toLink3() {
    window.location.href = "https://19j5126.github.io/rei4/"
}
AFRAME.registerComponent('linkbox3', {
    init: function () {  //aframeのコンポーネントの考え方
        console.log(this);　//aframeのコンポーネントの考え方
        const element = this.el;　　//aframeのコンポーネントの考え方
        element.addEventListener('mouseenter', function () {　//マウスの代わりに視線でクリック
            console.log('mouseenter');
            setTimeout(toLink3, 2000); //toLink関数を実行

        });
    }
});


window.setTimeout(
    function ()　{
        const sceneElement = document.getElementById('scene');
        const sphereElement = document.createElement('a-sphere');
        sphereElement.setAttribute('id', 'link1');
        sphereElement.setAttribute('position', '0 3 -4');
        sphereElement.setAttribute('scale', '1 1 1');
        sphereElement.setAttribute('src', '360VRGG.png');
        sphereElement.setAttribute('linkBox1', '');

    
        sceneElement.appendChild(sphereElement);
        const sphereElement2 = document.createElement('a-sphere');
        sphereElement2.setAttribute('id', 'link2');
        sphereElement2.setAttribute('position', '7 3 3');
        sphereElement2.setAttribute('scale', '1 1 1');
        sphereElement2.setAttribute('src', 'wine.png');
        sphereElement2.setAttribute('linkBox2', '');
        sceneElement.appendChild(sphereElement2);

        sceneElement.appendChild(sphereElement);
        const sphereElement3 = document.createElement('a-sphere');
        sphereElement3.setAttribute('id', 'link3');
        sphereElement3.setAttribute('position', '-7 3 3');
        sphereElement3.setAttribute('scale', '1 1 1');
        sphereElement3.setAttribute('src', 'city.png');
        sphereElement3.setAttribute('linkBox3', '');
        sceneElement.appendChild(sphereElement3);
    },
    28000
    
);

