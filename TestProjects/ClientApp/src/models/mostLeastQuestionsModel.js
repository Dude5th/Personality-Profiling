import { DiscEnum } from './discEnum';

export default class MostLeastQuestionsModel {
    constructor(id, m1, l1, q1, m2, l2, q2, m3, l3, q3, m4, l4, q4){
        this.id = id;
        this.question1 = q1;
        this.question2 = q2;
        this.question3 = q3;
        this.question4 = q4;

        this.most1 = m1;
        this.most2 = m2;
        this.most3 = m3;
        this.most4 = m4;

        this.least1 = l1;
        this.least2 = l2;
        this.least3 = l3;
        this.least4 = l4;
    
        this.mostValue = DiscEnum.None;
        this.leastValue = DiscEnum.None;
    };
}