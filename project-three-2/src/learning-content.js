import { LitElement, html, css } from 'lit';

class LearningContent extends LitElement {
    static properties = {
            allVideos: { type: Array },
            allReadings: { type: Array },
            allQuizzes: { type: Array },
        }

    static styles = css`
        * {
            color: blue,
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .content {
            display: flex;
            flex-direction: column;
            border-top: 1px solid black;
            justify-content: space-between;
        }
        .videos, .readings, .exercises {
            display: flex;
            flex-direction: column;
        }
        .content-item {
            padding: 8px;
            display: flex;
            flex-direction: row;
        }
        .content-divider {
            border-bottom: 1px solid black;
        }
        .content-title {
            flex: 1;
        }
    `;

    constructor() {
        super();
        this.allVideos = [];
        this.allReadings = [];
        this.allExercises = [];
    }


    render() {
        return html`
            <div class="content">
                <div class="videos content-divider">
                ${this.allVideos.map((video) => html`
                    <div class="content-item">
                        <div class="content-title">${video.Title}</div>
                        <div class="duration">${video.Duration} minutes</div>
                    </div>
                `)}
                </div>
                <div class="readings content-divider">
                ${this.allReadings.map((reading) => html`
                    <div class="content-item">
                        <div class="content-title">${reading.Title}</div>
                        <div class="duration">${reading.Duration} minutes</div>  
                    </div>
                `)}
                </div>
                <div class="exercises content-divider">
                ${this.allQuizzes.map((quiz) => html`
                    <div class="content-item">
                        <div class="content-title">${quiz.Title}</div>
                        <div class="duration">${quiz.Duration} minutes</div>
                    </div>
                `)}
                </div>
            </div>
        `;
    }
}

customElements.define('learning-content', LearningContent);