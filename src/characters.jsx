export const characters = [
    {
        id: 1,
        name: "렌",
        job: "렌",
        level: 1,
        stats: { STR: 20, DEX: 4, INT: 4, LUK: 4 },
        power: 5,
        exp: 0,
        MaxExp: 100,
    },
    {
        id: 2,
        name: "보마",
        job: "보우마스터",
        level: 1,
        stats: { STR: 4, DEX: 20, INT: 4, LUK: 4 },
        power: 5,
        exp: 0,
        MaxExp: 100,
    },
    {
        id: 3,
        name: "썬콜",
        job: "썬콜",
        level: 1,
        stats: { STR: 4, DEX: 4, INT: 20, LUK: 4 },
        power: 5,
        exp: 0,
        MaxExp: 100,
    },
    {
        id: 4,
        name: "듀블",
        job: "듀얼블레이더",
        level: 1,
        stats: { STR: 4, DEX: 4, INT: 4, LUK: 20 },
        power: 5,
        exp: 0,
        MaxExp: 100,
    },
]
/*  exp, MaxExp, attack -> 현재 경험치량, 경험치 최대치통, 공격력
    exp는 일단 사냥 시작버튼을 통해 사냥, 확률은 레벨,전투력에따라 확률변동
    MaxExp에 도달 시(레벨업) level +1, mainStat +10, power +5 상승
*/