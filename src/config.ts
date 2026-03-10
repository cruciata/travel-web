// Site-wide configuration
export interface SiteConfig {
  language: string;
  siteName: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "zh-CN",
  siteName: "晶晶旅社",
  siteDescription: "晶晶旅社 - 专业哈尔滨冰雪旅游服务，提供接送机、冰雪大世界、雪乡等特色旅游体验",
};

// Hero Section
export interface HeroConfig {
  backgroundImage: string;
  backgroundAlt: string;
  title: string;
  subtitle: string;
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-bg.jpg",
  backgroundAlt: "哈尔滨冰雪大世界夜景",
  title: "晶晶旅社",
  subtitle: "探索冰雪奇缘 · 邂逅北国风光",
};

// Narrative Text Section
export interface NarrativeTextConfig {
  line1: string;
  line2: string;
  line3: string;
}

export const narrativeTextConfig: NarrativeTextConfig = {
  line1: "让每一次旅行都成为难忘的回忆",
  line2: "专业接送机服务，贴心管家式体验",
  line3: "晶晶旅社深耕哈尔滨冰雪旅游十余年，为您提供从机场接送、酒店预订到景点游览的一站式服务。无论是冰雪大世界的璀璨灯光，还是雪乡的童话世界，我们都能为您打造专属的冰雪之旅。",
};

// ZigZag Grid Section
export interface ZigZagGridItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
}

export interface ZigZagGridConfig {
  sectionLabel: string;
  sectionTitle: string;
  items: ZigZagGridItem[];
}

export const zigZagGridConfig: ZigZagGridConfig = {
  sectionLabel: "精选行程",
  sectionTitle: "探索冰雪哈尔滨",
  items: [
    {
      id: "ice-world",
      title: "冰雪大世界",
      subtitle: "世界级冰雪艺术殿堂",
      description: "全球最大的冰雪主题公园，每年冬季用数万立方米冰雪雕琢出梦幻般的城堡、雕塑和灯光秀。夜幕降临，五彩斑斓的冰灯将整个园区装点得如梦似幻，仿佛置身童话世界。",
      image: "/grid-ice-world.jpg",
      imageAlt: "冰雪大世界冰雕",
      reverse: false,
    },
    {
      id: "snow-town",
      title: "中国雪乡",
      subtitle: "童话般的雪国仙境",
      description: "被誉为「中国最美雪乡」的双峰林场，积雪期长达七个月。独特的「雪蘑菇」房屋、袅袅炊烟、红灯笼点缀，构成一幅绝美的东北民俗画卷。体验马拉爬犁、雪地摩托，感受原汁原味的东北风情。",
      image: "/grid-snow-town.jpg",
      imageAlt: "雪乡雪景",
      reverse: true,
    },
    {
      id: "central-street",
      title: "中央大街",
      subtitle: "东方莫斯科的浪漫",
      description: "亚洲最长的步行街，汇集了文艺复兴、巴洛克、折衷主义等多种欧式建筑。漫步面包石街道，品尝马迭尔冰棍、红肠、格瓦斯，感受百年老街的历史韵味与异域风情。",
      image: "/grid-central-street.jpg",
      imageAlt: "中央大街",
      reverse: false,
    },
    {
      id: "transfer",
      title: "专业接送机",
      subtitle: "贴心服务全程无忧",
      description: "提供24小时机场接送服务，专业司机团队熟悉哈尔滨各条道路。无论航班早晚，我们都会在机场等候。舒适的商务车辆，让您的旅途从一开始就安心舒心。",
      image: "/grid-transfer.jpg",
      imageAlt: "接送机服务",
      reverse: true,
    },
  ],
};

// Breath Section
export interface BreathSectionConfig {
  backgroundImage: string;
  backgroundAlt: string;
  title: string;
  subtitle: string;
  description: string;
}

export const breathSectionConfig: BreathSectionConfig = {
  backgroundImage: "/breath-bg.jpg",
  backgroundAlt: "松花江冰雪风光",
  title: "冰雪奇缘",
  subtitle: "北国风光 · 千里冰封",
  description: "哈尔滨，这座被誉为「东方莫斯科」的城市，每年冬季都会化身为一座冰雪王国。松花江上的冰雪活动、太阳岛的雪雕艺术、索菲亚教堂的庄严神圣，每一处都值得您驻足流连。让晶晶旅社带您领略这片银装素裹的北国大地。",
};

// Card Stack Section
export interface CardStackItem {
  id: number;
  image: string;
  title: string;
  description: string;
  rotation: number;
}

export interface CardStackConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  cards: CardStackItem[];
}

export const cardStackConfig: CardStackConfig = {
  sectionTitle: "特色体验",
  sectionSubtitle: "不可错过的冰雪活动",
  cards: [
    {
      id: 1,
      image: "/card-skiing.jpg",
      title: "滑雪体验",
      description: "亚布力滑雪场，亚洲最大的滑雪场之一，适合各级滑雪爱好者",
      rotation: -2,
    },
    {
      id: 2,
      image: "/card-hot-spring.jpg",
      title: "雪地温泉",
      description: "在零下二十度的雪地里泡温泉，冰火两重天的极致体验",
      rotation: 1,
    },
    {
      id: 3,
      image: "/card-lantern.jpg",
      title: "冰灯游园",
      description: "兆麟公园冰灯艺术游园会，欣赏传统与现代结合的冰雕艺术",
      rotation: -1,
    },
  ],
};

// Footer Section
export interface FooterContactItem {
  type: "email" | "phone";
  label: string;
  value: string;
  href: string;
}

export interface FooterSocialItem {
  platform: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  description: string;
  ctaText: string;
  contact: FooterContactItem[];
  locationLabel: string;
  address: string[];
  socialLabel: string;
  socials: FooterSocialItem[];
  logoText: string;
  copyright: string;
  links: { label: string; href: string }[];
}

export const footerConfig: FooterConfig = {
  heading: "开启您的冰雪之旅",
  description: "无论是家庭出游、情侣度假还是团队旅行，晶晶旅社都能为您量身定制完美的哈尔滨冰雪之旅。立即联系我们，让这个冬天不再寒冷。",
  ctaText: "立即咨询",
  contact: [
    {
      type: "phone",
      label: "0451-8888-9999",
      value: "0451-8888-9999",
      href: "tel:045188889999",
    },
    {
      type: "email",
      label: "booking@jingjingtravel.com",
      value: "booking@jingjingtravel.com",
      href: "mailto:booking@jingjingtravel.com",
    },
  ],
  locationLabel: "公司地址",
  address: ["黑龙江省哈尔滨市道里区", "中央大街123号晶晶旅社大厦"],
  socialLabel: "关注我们",
  socials: [
    {
      platform: "instagram",
      href: "https://instagram.com/jingjingtravel",
    },
    {
      platform: "facebook",
      href: "https://facebook.com/jingjingtravel",
    },
  ],
  logoText: "晶晶旅社",
  copyright: "2025 晶晶旅社 版权所有",
  links: [
    { label: "隐私政策", href: "#" },
    { label: "服务条款", href: "#" },
    { label: "关于我们", href: "#" },
  ],
};
