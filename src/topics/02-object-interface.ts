const skills: string[] = ['Bash','Counter','Healing'];

/* skills = ["otra cosa"]; */


interface Character{
    name: string;
    hp:number;
    skills:string[];
    hometown?:string;
}
const suir: Character = {
    name: 'Suir',
    hp: 100,
    skills: ['Bash', 'Counter'],
    
}

suir.hometown = 'Rivendell';

console.table(suir);
export{}