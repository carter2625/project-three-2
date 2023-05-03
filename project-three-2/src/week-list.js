import { LitElement, html, css } from 'lit';
import "./project-three-2.js"
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";

export class WeekList extends IntersectionObserverMixin(LitElement) {
    static get tag() {
        return 'week-list';
    }
    static get properties() {
        let props = {};
        if (super.properties) {
            props = super.properties;
        }
        return {
            ...props,
            weeks: { type: Array },
    }
}

    constructor() {
        super();
        this.weeks = [];
        this.updateCalendar();
    }

    updateCalendar() {
        fetch(new URL('../assets/content.json', import.meta.url).href).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.weeks = data;
        });
    }

    

    static get styles() {
        return css`
        
    `;
    }

    render() {
        return html`
        ${this.elementVisible ? 
            html`
        <div class="wrapper">
            ${this.weeks.map(week => html`
            <div class="item">
                <project-three-2 
                title="${week.title}" 
                info="${week.info}" 
                weekDate="${week.weekDate}" 
                completionTime="${week.completionTime}" 
                courses="${week.courses}" 
                videoLabel="${week.videoLabel}" 
                readingLabel="${week.readingLabel}" 
                quizLabel="${week.quizLabel}" 
                opened="${week.opened}"
                .videos="${week.videos}"
                .readings="${week.readings}"
                .quizzes="${week.quizzes}"></project-three-2>
            </div>
            `)}
        </div>
        ` : ``};
        `;
    }
}
customElements.define(WeekList.tag, WeekList);