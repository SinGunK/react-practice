export const characters = [
    {
        id: 1,
        name: "렌",
        job: "렌",
        level: 0,
        stats: { str: 20, dex: 4, int: 4, luk:4 },
        power: 0,
        exp: 0,
        MaxExp: 100,
        attack: 1
    },
    {
        id: 2,
        name: "보마",
        job: "보우마스터",
        level: 0,
        stats: { str: 4, dex: 20, int: 4, luk: 4},
        power: 0,
        exp: 0,
        MaxExp: 100,
        attack: 1
    },
    {
        id: 3,
        name: "썬콜",
        job: "썬콜",
        level: 0,
        stats: { str: 4, dex: 4, int: 20, luk: 4},
        power: 0,
        exp: 0,
        MaxExp: 100,
        attack: 1
    },
    {
        id: 4,
        name: "듀블",
        job: "듀얼블레이더",
        level: 0,
        stats: { str: 4, dex: 4, int: 4, luk: 20},
        power: 0,
        exp: 0,
        MaxExp: 100,
        attack: 1
    },
]
/*  exp, MaxExp, attack -> 현재 경험치량, 경험치 최대치통, 공격력
    exp는 일단 사냥 시작버튼을 통해 초당 랜덤(레벨,공격력,스텟에 따라 다르게)한 경험치 획득
    MaxExp에 도달 시 레벨 +1, 주스탯 +5, 부스탯 +1, attack +5 상승
*/