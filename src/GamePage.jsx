import { useLocation } from "react-router-dom";
import { useState } from "react";
import { dungeons } from "./dungeons";
/*      이 페이지의 기능(예정)
레벨, 이름, 직업, 주스탯, 공격력 display
    사냥 시작 button -> 사냥터 종류(레벨/전투력에 맞춰 확률) 
    경험치 bar display -> gauge 
    MaxExp에 도달 시(레벨업) level +1, mainStat +10, power +5 상승
    MaxExp 초기값(100)에서 0.5 배수만큼 증가*/

const GamePage = () => {

    const loc = useLocation();
    const [char, setChar] = useState(loc.state.char);
    const [exp, setExp] = useState(char.exp);
    const stats = char.stats;
    const mainStat = Object.entries(stats).reduce((max, cur) => cur[1] > max[1] ? cur : max);
    const pow = char.power * (mainStat[1] * char.level);
    const expPercentage = (char.exp / char.MaxExp) * 100;
    const [selectedDungeon, setselectedDungeon] = useState(null);
    const [huntRes, setHuntRes] = useState(null);

    const startHunt = (dungeon) => {
        setselectedDungeon(dungeon);
        setHuntRes(null);
        const huntTime = Math.max(3, 
        10 - (pow / dungeon.reqPower * 2) - ((char.level - dungeon.level) * 0.5)
        ) * 1000;
        
        setTimeout(() => {
            const successRate = 50 
                + ((pow - dungeon.reqPower) / dungeon.reqPower * 100)
                - ((dungeon.level - char.level) * 5);
            const isSuccess = Math.random() * 100 < successRate;
            setHuntRes(isSuccess ? 'success' : 'fail');
        }, huntTime);
    }
    
    return(
        <div>
            <h2>LV. {char.level}</h2>
            <h4>
                {char.name} |
                직업: {char.job} | {mainStat[0]} : {mainStat[1]} |
                전투력: {pow}
                </h4>
                <p>EXP: {exp} / {char.MaxExp} | ({expPercentage.toFixed(1)}%)</p>
                {dungeons.map((dungeon) => (
                    <div key={dungeon.id}>
                        <p>{dungeon.name}</p>
                        <p>권장 전투력: {dungeon.reqPower}</p>
                        <button onClick={() => {startHunt(dungeon)}}>사냥 시작</button>
                    </div>
                ))}
                {selectedDungeon && (
                    <div>
                        <p>{selectedDungeon.name} 사냥 진행중...</p>
                        {huntRes === 'success' && <p>사냥 성공! 경험치 {selectedDungeon.expReward} 획득</p>}
                        {huntRes === 'fail' && <p>사냥 실패...</p>}
                        <button onClick={() => setselectedDungeon(null)}>사냥 종료</button>
                    </div>
                )}
                
        </div>
    );
}

export default GamePage;