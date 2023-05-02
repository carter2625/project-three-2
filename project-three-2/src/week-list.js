import { LitElement, html, css } from 'lit';
import "./project-three-2.js"

export class WeekList extends LitElement {
    static get tag() {
        return 'week-list';
    }
    static get properties() {
        return {
            weeks: { type: Array },
            list: { type: String },
        }
    }

    constructor() {
        super();
        this.weeks = [
            {
                "weekDate" : "1",
                "completionTime" : "2",
                "title" : "Introduction",
                "info" : "Why take this course?",
                "videos" : "4",
                "courses" : "some stuff",
                "readings" : "11",
                "quizzes" : "0",
                "opened" : false
            },
            {
                "weekDate" : "2",
                "completionTime" : "3",
                "title" : "Body 1",
                "info" : "What is this course",
                "videos" : "3",
                "courses" : "more stuff",
                "readings" : "2",
                "quizzes" : "1",
                "opened" : false
            },
            {
                "weekDate" : "3",
                "completionTime" : "4",
                "title" : "Body 2",
                "info" : "Whats next",
                "videos" : "2",
                "courses" : "a lot of stuff",
                "readings" : "4",
                "quizzes" : "1",
                "opened" : false
            }
        ];
        this.list = 'Weeks';
        
    }

    

    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
    `;
    }

    render() {
        return html`
        <h2>${this.list}</h2>
        <div class="wrapper">
            ${this.weeks.map(week => html`
            <div class="item">
                <project-three-2 title="${week.title}" info="${week.info}" weekDate="${week.weekDate}" completionTime="${week.completionTime}" courses="${week.course}" videos = "${week.videos}" readings="${week.readings}" quizzes="${week.quizzes}" opened="${week.opened}"></project-three-2>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(WeekList.tag, WeekList);