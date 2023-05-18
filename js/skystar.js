// poem
var words = [
  "愿得一人心,白手不分离",
  "在天愿作比翼鸟,在地愿为连理枝",
  "金风玉露一相逢,便胜却人间无数",
  "两情若是长久时又岂在朝朝暮暮",
  "衣带渐宽终不悔,为伊消得人憔悴",
  "身无彩凤双飞翼,心有灵犀一点通",
  "曾经沧海难为水,除却巫山不是云",
  "问世间情为何物,直教生死相许",
  "试问闲愁都几许？一川烟草，满城风絮，梅子黄时雨",
  "玲珑骰子安红豆,入骨相思知不知",
  "日日思君不见君,共饮长江水",
  "欲把相思说似谁,浅情人不知",
  "天涯海角有穷时,只有相思无尽处",
  "情人怨遥夜,竟夕起相思",
  "相思相见知何日？此时此夜难为情",
  "愿为西南风,长逝入君怀",
  "执子之手,与子偕老",
  "一日不见兮,思之如狂",
  "取次花丛懒回顾,半缘修道半缘君",
  "生当复来归,死当长相思",
  "结发为夫妻,恩爱两不疑",
  "但愿人长久,千里共婵娟",
  "天地合,乃敢与君绝",
  "春心莫共花争发,一寸相思一寸灰",
  "今夕何夕,见此良人",
  "人似玉,柳如眉，正相思",
  "蒹葭苍苍,白露为霜。所谓伊人,在水一方",
];
function randomNum(min, max) {
  var num = (Math.random() * (max - min + 1) + min).toFixed(2);
  return num;
}
function init() {
  // 文档对象模型Document引用的 querySelector() 方法返回文档中与指定选择器或选择器组匹配的第一个 Element对象。
  // 如果找不到匹配项，则返回null
  let container = document.querySelector(".container");
  let f = document.createDocumentFragment(); //创建一个新的空白的文档片段

  words.forEach((w) => {
    let word_box = document.createElement("div");
    let word = document.createElement("div");
    word.innerText = w;
    word.classList.add("word");
    word.style.color = "#FFFF93";
    word.style.fontFamily = "楷体";
    word.style.fontSize = "23px";
    word.style.width = "10px";
    word_box.classList.add("word-box");
    //margin-top:CSS 属性用于设置元素的顶部外边距外边距区域。正值使它离相邻元素更远，而负值使它更靠近相邻元素。
    word_box.style.setProperty("--margin-top", randomNum(-30, 20) + "vh"); //视口的初始包含块的高度的 1%。
    // margin-left:设置与元素相关联的盒子模型的左外边距。这个值可以为负值。
    word_box.style.setProperty("--margin-left", randomNum(6, 40) + "vw"); //视口的初始包含块的宽度的 1%。
    // animation-duration:CSS 属性设置动画完成一个动画周期所需的时间
    word_box.style.setProperty("--animation-duration", randomNum(10, 30) + "s");
    // animation-delay CSS 属性指定从应用动画到元素开始执行动画之前等待的时间量。动画可以稍后开始、立即从开头开始或立即开始并在动画中途播放。
    word_box.style.setProperty("--animation-delay", randomNum(-20, 0) + "s");

    word_box.appendChild(word);
    f.appendChild(word_box);
  });
  container.appendChild(f);
}

window.addEventListener("load", init);
