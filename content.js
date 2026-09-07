/*
  这里是网站的可编辑内容。
  想改标题、信件、相册、小花园人物、关于农场文案时，优先改这个文件。
*/

const SITE_CONTENT = {
  title: "666号小小农场",
  subtitle: "欢迎来到我们的秘密花园",
  slogan: "每长大一岁，农场就多一个故事。",

  music: {
    src: "assets/music/bg.mp3",
    playText: "背景音乐",
    pauseText: "暂停音乐",
    missingText: "请放入音乐"
  },

  about: {
    title: "关于农场",
    text: [
      "欢迎来到666号小小农场。",
      "这里住着阿噗、嘀咕、茄茄，也收藏着我们的回忆、祝福和爱。",
      "每长大一岁，农场就会多一个故事。"
    ]
  },

  characters: [
    {
      name: "阿噗",
      image: "assets/characters/apu-crop.png",
      message: "嘀嗒，欢迎回家！今天也有好多回忆呢。"
    },
    {
      name: "嘀咕",
      image: "assets/characters/digu-crop.png",
      message: "愿你永远被爱包围，也永远拥有自己的小小光芒。"
    },
    {
      name: "茄茄",
      image: "assets/characters/qieqie.png",
      message: "菜园里的每一朵小花，都在悄悄祝你生日快乐。"
    },
    {
      name: "666",
      image: "assets/characters/girl.png",
      message: "十六岁的你，正在写下新的、亮晶晶的一章。"
    }
  ],

  letter: {
    chapter: "Chapter 16",
    title: "写给16岁的你",
    intro: "写给16岁的你，来自妈妈最真挚的心里话。",
    pages: [
      "亲爱的宝贝，十六岁啦。",
      "这是一个新的开始，也是我们故事的新一章。一路看着你长大，看到你有自己的喜欢、自己的坚持、自己的小世界，妈妈心里有说不出的骄傲。",
      "愿你永远保有自己的光，也永远知道，妈妈在这里爱你。你可以慢慢来，可以勇敢试，也可以在累的时候回到家里，安心休息。",
      "希望新的一岁里，你的心像小农场一样柔软又丰盛，有花、有风、有阳光，也有很多很多被爱包围的日子。生日快乐，我的宝贝。"
    ]
  },

  album: [
    {
      image: "assets/photos/photo1.jpg",
      title: "阿噗和嘀咕",
      date: "珍贵的一天",
      description: "他们安安静静坐在一起，好像替我们守着很多温柔的回忆。"
    },
    {
      image: "assets/photos/photo2.png",
      title: "小小农场的样子",
      date: "2026",
      description: "这是农场的第一张灵感图，粉粉的、软软的，像一本会发光的故事书。"
    },
    {
      image: "assets/photos/photo3.jpg",
      title: "花田里的风",
      date: "未来可以替换",
      description: "这里先放一张占位照片。以后把新照片放进 assets/photos/，再来这里更新文字。"
    }
  ],

  garden: [
    {
      name: "丁程鑫",
      quality: "真诚",
      image: "assets/garden/dingchengxin.png",
      description: "谢谢你让我看到，真诚本身就很有力量。"
    },
    {
      name: "乔治·拉塞尔",
      quality: "幽默",
      image: "assets/garden/george-russell.png",
      description: "谢谢你让我看到，幽默可以让人轻盈地面对世界。"
    },
    {
      name: "斯瓦泰克",
      quality: "努力，坚韧不拔",
      image: "assets/garden/iga-swiatek.png",
      description: "谢谢你让我看到，努力和坚韧会让人越来越强大。"
    }
  ],

  sections: [
    {
      id: "letter",
      number: "1",
      title: "一封信",
      subtitle: "Chapter 16",
      description: "写给16岁的你，来自妈妈最真挚的心里话。",
      button: "打开信件"
    },
    {
      id: "album",
      number: "2",
      title: "阿噗和嘀咕",
      subtitle: "我们的回忆相册",
      description: "那些一起走过的日子，都是最珍贵的宝藏。",
      button: "进入相册"
    },
    {
      id: "garden",
      number: "3",
      title: "小花园",
      subtitle: "他们教会我的",
      description: "谢谢他们的存在，成为我成长路上的光。",
      button: "进入小花园"
    }
  ]
};
