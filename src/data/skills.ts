export interface Activity {
  length: number
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
  length: 2,
  content: "【ゼロから作る！Vue.js x vue-cliハンズオン】で講義内容の作成から当日の講師まで行いました。jQueryとVue.js両方でTodoアプリを作ってみてVue.jsのメリットを理解しやすいような講義を意識しました。",
  links: [
    { link: "https://cloudpayment-sys.connpass.com/event/91212/", description: "イベントページ" }
  ],
  image: require("@/assets/about/vue-handson.jpg")
}
const trunkDemoDay = {
  length: 1,
  content: "【TRUNK CREATOR'S DEMO DAY】で製作物を発表しました。React x RailsでCLIライクな操作ができるタスク管理Webアプリを作りました。",
  links: [
    { link: "https://room.trunk.school/campus-life/9023", description: "イベントページ" }
  ],
  github: "https://github.com/kthatoto/basenote",
  image: require("@/assets/about/trunk-demo-day.jpg")
}
const heiseiLastHackathon = {
  length: 1,
  content: "サイバーエージェント主催【平成最後のハッカソン】で優勝しました。「平成を振り返る」というテーマに対して、平成初期から末期にかけてのゲームハードの進化を追いながら世界がともに進化していくスーパーマリオをVue.js x Vuexのみで実装しました。",
  links: [
    { link: "https://buchio.ever.jp/ca-last-heisei-hackathon/", description: "チームメイトのブログ" },
    { link: "https://super-heisei-mario.netlify.app/", description: "成果物" }
  ],
  github: "https://github.com/team-aluminum/super-heisei-mario",
  image: require("@/assets/about/heisei-last-hackathon.jpeg")
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    levels: {
      2016: [0, 0, 0, 1, 2, 2, 3, 3, 4, 4, 4, 4],
      2017: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2018: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
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
    },
    activities: {
      2018: {
        6: vueHandsOn
      }
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
    name: "Vue",
    levels: {
      2018: [0, 1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4],
      2019: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2020: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2021: [4, 4, 4, 4],
    },
    activities: {
      2018: {
        6: vueHandsOn
      },
      2019: {
        4: heiseiLastHackathon
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
    name: "Nuxt",
    levels: {
      2019: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
      2020: [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3],
      2021: [3, 3, 3, 3],
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
