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

export const skills: Skill[] = [
  {
    name: "JavaScript",
    levels: {
      2016: [0, 0, 0, 1, 2, 2, 3, 3, 4, 4, 4, 4],
      2017: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2018: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2019: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      2020: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
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
        6: {
          length: 2,
          title: "ゼロから作る！Vue.js x vue-cliハンズオン",
          link: "https://cloudpayment-sys.connpass.com/event/91212/"
        }
      }
    }
  },
  {
    name: "React"
  }
]
