const navLinks = document.querySelectorAll('.nav a'); // 选择所有导航链接
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseenter', function () {
        this.style.fontSize = '25px';
        this.style.transition = 'all 0.5s ease';
        this.style.color = 'white';
        this.style.backgroundColor = 'lab(87.98% -26.24 60.69)'; // 添加背景色
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // 添加阴影


    });
    navLinks[i].addEventListener('mouseleave', function () {
        this.style.fontSize = '20px';
        this.style.transition = 'all 0.5s ease';
        this.style.color = 'white';
        this.style.backgroundColor = ''; // 移除背景色
        this.style.boxShadow = ''; // 移除阴影

    });
}




// 轮播图
const images = [
    'images/p1.jpg',
    'images/p2.jpg',
    'images/p3.jpg',
    'images/p4.jpg',
    'images/p5.jpg',
    'images/p6.jpg',
    'images/p7.jpg',
    'images/p8.jpg'

]
const btn = document.querySelector('.prev');
const btn1 = document.querySelector('.next');
const img = document.querySelector('.banner1');
let i = 0;
btn1.addEventListener('click', function () {
    i++;
    if (i > images.length - 1) {
        i = 0; // 重置索引
    }
    img.style.backgroundImage = `url('${images[i]}')`;

});
btn.addEventListener('click', function () {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    img.style.backgroundImage = `url('${images[i]}')`;
});


//自动播放

let timeId = setInterval(function () {
    btn1.click()  //自动调用点击事件
}, 2000)

// 鼠标经过大盒子停止计时器
const banner1 = document.querySelector('.banner1');
banner1.addEventListener('mouseenter', function () {

    clearInterval(timeId)
})

// 鼠标离开大盒子继续计时器
banner1.addEventListener('mouseleave', function () {
    clearInterval(timeId)
    timeId = setInterval(function () {
        btn1.click()  //自动调用点击事件
    }, 2000)
})



// 推荐部分插背景图并设置其样式
const intruction = [
    'images/p1.jpg',
    'images/p2.jpg',
    'images/p3.jpg',
    'images/p4.jpg',
    'images/p5.jpg'
]
const Divs = document.querySelectorAll('.container5 > div'); // 选择所有的div元素
for (let j = 0; j < intruction.length; j++) {
    const pic = document.querySelector(`.pic${j + 1}`); // item1到item8
    if (pic) {
        const SecondDiv = pic;
        SecondDiv.style.backgroundImage = `url('${intruction[j]}')`;
        SecondDiv.style.backgroundSize = 'cover';
        SecondDiv.style.backgroundRepeat = 'no-repeat';
        SecondDiv.style.backgroundPosition = 'center';
    }
    // 调用函数，给每个div添加鼠标事件，当鼠标经过时变大、添加阴影
    Divs[j].addEventListener('mouseenter', function (e) {
        addshadow.apply(Divs[j]);

    })
    Divs[j].addEventListener('mouseleave', function (e) {
        removeshadow.apply(Divs[j]);
    });
}


// 美食
const food = [
    'images/p9.jpg',
    'images/p10.jpg',
    'images/p11.jpg',
    'images/p12.jpg',
    'images/p13.jpg',
    'images/p14.jpg',
    'images/p15.jpg',
    'images/p16.jpg'

]
// 插入背景图
for (let j = 0; j < food.length; j++) {
    const item = document.querySelector(`.item${j + 1}`); // item1到item8
    if (item) {
        const FirstDiv = item.querySelector('div:first-child');
        FirstDiv.style.backgroundImage = `url('${food[j]}')`;
        FirstDiv.style.backgroundSize = 'cover';
        FirstDiv.style.backgroundRepeat = 'no-repeat';
        // FirstDiv.style.backgroundPosition = 'left';
    }
    // 调用函数，给每个div添加鼠标事件，当鼠标经过时变大、添加阴影
    item.addEventListener('mouseenter', function (e) {
        addshadow.apply(item);
    });
    item.addEventListener('mouseleave', function (e) {
        removeshadow.apply(item);

    });
}

// 定义函数：添加、移除阴影
function addshadow() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'all 0.5s ease';
    this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // 添加阴影

}
function removeshadow() {
    this.style.transform = 'scale(1)';
    this.style.transition = 'all 0.5s ease';
    this.style.boxShadow = ''; // 移除阴影
}



// 返回顶部按钮
const backToTopBtn = document.getElementById('backToTop');

// 监听滚动事件，显示/隐藏按钮
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// 点击按钮平滑滚动到顶部
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
});