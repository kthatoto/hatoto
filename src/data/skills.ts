export interface Activity {
  length: number
  title: string
  link: string
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

const handsOnActivity = {
  length: 2,
  title: "ゼロから作る！Vue.js x vue-cliハンズオン",
  link: "https://cloudpayment-sys.connpass.com/event/91212/"
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
        6: handsOnActivity
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
        12: {
          length: 1,
          title: "TRUNK CREATOR'S DEMO DAYで製作物発表",
          link: "https://images.app.goo.gl/m2RfvRpbBkZ1PMVK8"
        }
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
        6: handsOnActivity
      }
    }
  }
]
