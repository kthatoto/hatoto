export interface Activity {
  length: number
  type: string
  content: string
  links?: { link: string, description: string }[]
  github?: string
  image?: string
}

export interface Skill {
  name: string
  levels: { [year: number]: number[] }
  activities?: {
    [year: number]: {
      [month: number]: Activity
    }
  }
}

const vueHandsOn = {
  length: 1,
  type: "activity",
  content: "【ゼロから作る！Vue.js x vue-cliハンズオン】で講義内容の作成から当日の講師まで行いました。jQueryとVue.js両方で簡易的な機能を作ってみてVue.jsのメリットを理解しやすいような講義を意識しました。",
  links: [
    { link: "https://cloudpayment-sys.connpass.com/event/91212/", description: "イベントページ" }
  ],
  github: "https://github.com/kthatoto/jquery-vue-comparison",
  image: require("@/assets/about/vue-handson.jpg")
}
const trunkDemoDay = {
  length: 1,
  type: "activity",
  content: "【TRUNK CREATOR'S DEMO DAY】で製作物を発表しました。React x RailsでCLIライクな操作ができるタスク管理Webアプリを作りました。",
  links: [
    { link: "https://room.trunk.school/campus-life/9023", description: "イベント記事" }
  ],
  github: "https://github.com/kthatoto/basenote",
  image: require("@/assets/about/trunk-demo-day.jpg")
}
const heiseiLastHackathon = {
  length: 1,
  type: "activity",
  content: "サイバーエージェント主催【平成最後のハッカソン】で優勝しました。「平成を振り返る」というテーマに対して、平成初期から末期にかけてのゲームハードの進化を追いながら世界がともに進化していくスーパーマリオをVue.js x Vuexのみで実装しました。",
  links: [
    { link: "https://buchio.ever.jp/ca-last-heisei-hackathon/", description: "チームメイトのブログ" },
    { link: "https://super-heisei-mario.netlify.app/", description: "成果物" }
  ],
  github: "https://github.com/team-aluminum/super-heisei-mario",
  image: require("@/assets/about/heisei-last-hackathon.jpeg")
}
const drecomLT = {
  length: 1,
  type: "activity",
  content: "ドリコム主催【夏のエンジニア総選挙】というLT会で発表し、投票で「総帥」賞をもらいました。内容はGitHubのissuesをCMSに見立ててGitHubが公開しているGraphQL APIを叩きブログシステムを手間をかけずに作るというものです。",
  links: [
    { link: "https://www.wantedly.com/companies/drecom/post_articles/132124", description: "イベント記事" },
    { link: "https://speakerdeck.com/kthatoto/bokufalsekangaetasaikiyoufalseburogusisutemu", description: "発表資料" }
  ],
  github: "https://github.com/kthatoto/hatotology",
  image: require("@/assets/about/drecom-lt.jpg")
}

export const frontendSkills: Skill[] = [
  {
    name: "JavaScript",
    levels: {
      2016: [0, 0, 0, 1, 2, 2, 3, 3, 4, 4, 4, 4],
      2017: [4, 4, 4, 4, 3, 1, 1, 1, 2, 3, 3, 4],
      2018: [3, 3, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4],
      2019: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2020: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2021: [4, 4, 4, 4],
    }
  },
  {
    name: "jQuery",
    levels: {
      2016: [0, 0, 0, 0, 0, 0, 1, 3, 4, 4, 4, 4],
      2017: [4, 4, 4, 4, 3, 1],
      2018: [0, 0, 0, 0, 0, 1, 2]
    }
  },
  {
    name: "React",
    levels: {
      2017: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 4],
      2018: [2, 3]
    },
    activities: {
      2017: {
        12: trunkDemoDay
      }
    }
  },
  {
    name: "Angular",
    levels: {
      2017: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2],
      2018: [2, 1, 0, 0, 0, 0, 0, 0, 2, 3, 3]
    }
  },
  {
    name: "Vue",
    levels: {
      2018: [0, 1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4],
      2019: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2020: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2021: [4, 4, 4, 4],
    },
    activities: {
      2018: {
        7: vueHandsOn
      },
      2019: {
        4: heiseiLastHackathon
      }
    }
  },
  {
    name: "Nuxt",
    levels: {
      2018: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2],
      2019: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      2020: [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3],
      2021: [3, 3, 3, 3],
    },
    activities: {
      2018: {
        8: drecomLT
      }
    }
  },
  {
    name: "Vue Native",
    levels: {
      2018: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      2019: [1, 1, 1]
    }
  },
  {
    name: "React Native",
    levels: {
      2019: [0, 0, 0, 0, 1, 3]
    }
  },
  {
    name: "TypeScript",
    levels: {
      2020: [0, 1, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4],
      2021: [4, 4, 4, 4],
    }
  }
]

const goAWS = {
  length: 1,
  type: "work",
  content: "GoのAWS SDKを使ってGitHub PRに特定のラベルをつけるごとにそのPRの検証環境を自動で立ち上げる機能を実装しました。"
}
const rakutenNode = {
  length: 3,
  type: "work",
  content: "Sails,Express,AngularでサーバーサイドからフロントエンドまでJavaScriptでAPI基盤開発に携わりました。"
}
const bunguEC = {
  length: 8,
  type: "work",
  content: "EC2,RDS,S3,Lambda,CloudFront,Route53,CodeDeployなどを使用してECサービスのインフラを構築しました。"
}
const chatbotAnagma = {
  length: 2,
  type: "work",
  content: "自社サービスのチャットボットSlackアプリケーションを作成しました。"
}
const azureIsaoFunctions = {
  length: 3,
  type: "work",
  content: "Functionsを用いて自社向けに簡単に出社退社ができるシステムの設計,構築,打刻システムとの連携機能実装を行いました。"
}

export const serversideSkills: Skill[] = [
  {
    name: "PHP",
    levels: {
      2016: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3],
      2017: [4, 4, 4, 4, 0, 0, 0, 3, 3, 4, 4, 4],
      2018: [4, 4, 4, 4, 4, 4, 3]
    }
  },
  {
    name: "Symfony",
    levels: {
      2016: [0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2],
      2017: [3, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    }
  },
  {
    name: "Ruby",
    levels: {
      2016: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3],
      2017: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2018: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2019: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2020: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2021: [4, 4, 4, 4]
    }
  },
  {
    name: "Ruby on Rails",
    levels: {
      2016: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      2017: [3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2018: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2019: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2020: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2021: [4, 4, 4, 4]
    }
  },
  {
    name: "Laravel",
    levels: {
      2017: [0, 0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 4],
      2018: [4, 4, 4, 4, 4, 4, 3]
    }
  },
  {
    name: "Python",
    levels: {
      2017: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3]
    },
    activities: {
      2017: {
        11: chatbotAnagma
      }
    }
  },
  {
    name: "Go",
    levels: {
      2018: [0, 0, 0, 0, 0, 0, 0, 3],
      2020: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
      2021: [3, 3]
    },
    activities: {
      2018: {
        8: goAWS
      }
    }
  },
  {
    name: "Node",
    levels: {
      2018: [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 0],
      2021: [2, 2, 2]
    },
    activities: {
      2018: {
        9: rakutenNode
      }
    }
  }
]

export const otherSkills: Skill[] = [
  {
    name: "MySQL",
    levels: {
      2016: [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3],
      2017: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      2018: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2019: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2020: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2021: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    }
  },
  {
    name: "PostgreSQL",
    levels: {
      2017: [2, 2, 3, 3, 2, 0, 0, 2, 3, 4, 4, 4],
      2018: [4, 4, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    }
  },
  {
    name: "AWS",
    levels: {
      2017: [0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 4, 4],
      2018: [4, 4, 4, 0, 0, 0, 0, 4, 3, 0, 4, 4],
      2019: [4, 4]
    },
    activities: {
      2017: {
        8: bunguEC
      },
      2018: {
        8: goAWS
      }
    }
  },
  {
    name: "Ansible",
    levels: {
      2017: [0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 4, 3],
      2018: [3]
    }
  },
  {
    name: "Docker",
    levels: {
      2017: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4],
      2018: [3, 4, 4, 3, 1, 1, 1, 4, 3, 1, 1, 1],
      2019: [1, 4, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1],
      2020: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      2021: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    }
  },
  {
    name: "Azure",
    levels: {
      2017: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      2018: [2, 2, 2, 3, 3, 3, 3]
    },
    activities: {
      2018: {
        5: azureIsaoFunctions
      }
    }
  },
  {
    name: "Firebase",
    levels: {
      2018: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      2019: [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2],
      2020: [0, 0, 3, 4, 3, 3]
    }
  },
  {
    name: "GCP",
    levels: {
      2019: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      2020: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      2021: [1, 1, 1, 1]
    }
  }
]
