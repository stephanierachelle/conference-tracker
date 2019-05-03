const m = require("mithril");

import ConferenceField from "./ConferenceField.jsx";

export default class CountDownField {
    constructor(vnode) {
        this.deadline = vnode.attrs.fieldValue;
        this.countDownDate = new Date(this.deadline).getTime();
        this.timeLeft = this.getTimeLeft();
        this.distance = this.countDownDate - new Date().getTime();
    }

    view() { //RETURNS TEMPLATE RENDERED BY DOM
        return <ConferenceField fieldValue={this.timeLeft} />;
    }

    getTimeLeft() { //CALCULATES TIME LEFT - NOW TO DEADLINE
        const now = new Date().getTime();
        this.distance = this.countDownDate - now;

        const days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
                (this.distance % (1000 * 60 * 60 * 24)) / (100 * 60 * 60)
            );
            const minutes = Math.floor(
                (this.distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor(
                (this.distance % (1000 * 60)) /1000);

            return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }

    countdown() { 
        const countDownInterval = setInterval(() => { //THE ENGINE OF THE COUNTDOWN TIMER
            this.timeLeft = this.getTimeLeft(); //TO UPDATE THE VIEW MUST CALL M.REDRAW()

            m.redraw();

            if (this.distance < 0) {
                clearInterval(countDownInterval);
                this.timeLeft = "EXPIRED";
            }
        }, 1000);
    }
    
    oninit(vnode) { //LIFE CYYCLE METHOD - CALLS COUNTDOWN() TO START 
        this.countdown(vnode.attrs.fieldValue);

        if (this.distance < 0) {
            this.timeLeft = "EXPIRED"; //IF THE DEADLINE HAS PASSED
        }
    }
}
 

