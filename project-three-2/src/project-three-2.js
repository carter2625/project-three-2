import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";



class ProjectThree2 extends LitElement {
  static properties = {
    header: { type: String },
    weekDate: { type: String},
    completionTime: { type: Number },
    title: { type: String},
    info: { type: String },
    courses: { type: String }, 
    opened: {type: Boolean, reflect: true, attribute: 'opened-if'},
    activityArray: { type: Array },
    videos: { type: String },
    readings: { type: String },
    quizzes: { type: String }
  }

  static styles = css` 
      
      .calender {
        display: flex;
        flex-direction: row;
        gap: 10rem;
        padding: 20px;
      }
      .week {
        text-align: center;
        line-height: -8.5rem;
        text-transform: uppercase
        line-height: 1.5rem;
        letter-spacing: 5px; 
      }
      .week-date {
        font-size: 2.25rem;
        line-height: 3rem;
      }
      .time {
        letter-spacing: 0;
        font-size: 1rem;
        line-height: -8.5rem;
        color: #1f1f1f;
      }
      
      .title {
        font-size: 20px;
        line-height: 24px;
      }
      .info {
        font-size: 14px;
        line-height: 21px;
        color: #1f1f1f;
      }
      .courses {
        font-size: 0.875rem;
        line-height: 1.5rem;
        font-weight: normal;
        color: #373a3c;
      }      
      .collapse {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding-top: 20px;
      } 
      
      @media only screen and (max-width: 400px) {
        .wrapper {
          text-transform: var;
          width: var;
          font-size: 4vw;
        }
      }

      @media only screen and (min-width: 401px) and (max-width: 800px) {
        /* CSS styles here */
      }

      @media only screen and (min-width: 801px) {
        /* CSS styles here */
      }
  `;

  constructor() {
    super();
    this.weekDate = '0';
    this.completionTime = 0;
    this.title = 'Write week title here';
    this.info = 'info goes here';
    this.courses = 'course content goes here';
    this.opened = false;
    this.videos = [];
    this.readings = [];
    this.quizzes = [];
    this.text = 'text';
    this.length = '';
    this.meme = 'https://i.imgflip.com/3qzub2.jpg?a467376';
  }

  collapseStatusChange() {
    const status = this.shadowRoot.querySelector("a11y-collapse");
    if (status.hasAttribute("expanded")) {
      this.opened = "See less";
    } else {
      this.opened = "See all";
    }
  }


  render() {
    return html`
<div class="calender">
    <div class="week"> 
        <p>week</p> 
        <p class="week-date">${this.weekDate}</p>
      </div>
        <div class="description">
          <p class="time"><simple-icon icon="watch-later"></simple-icon>${this.completionTime} hours to complete</p>
          <p class="title">${this.title}</p>
          <p class="info">${this.info}</p>
        <div class="collapse">
          <p class="courses"><simple-icon icon="communication:import-contacts"></simple-icon>${this.courses}</p>
          <a11y-collapse heading-button @expand="${this.collapseStatusChange}"
              @collapse="${this.collapseStatusChange}">
            <p slot="heading" class="show-title">${this.opened}</p>
            <div class="wrapper">
          <div class="video-text"><simple-icon class="video-icon" icon="av:slow-motion-video"></simple-icon>Videos</div>
            <div class="video-items">
              <ul>
                ${this.videos.map(activity => html`
                <a href="${this.meme}"><li>${activity.text} : ${activity.length} minutes</li></a>
                `)}
              </ul>
          </div>
            <hr>
          <div class="reading-text"><simple-icon class="reading-icon" icon="chrome-reader-mode"></simple-icon>Readings</div>
            <div class="reading-items">
              <ul>
                ${this.readings.map(activity => html`
                <li>${activity.text} : ${activity.length} minutes</li>
                `)}
              </ul>
            </div>
            <hr>
          <div class="quiz-text"><simple-icon class="quiz-icon" icon="assignment"></simple-icon>Quizzes</div>
          <div class="quiz-items">
              <ul>
                ${this.quizzes.map(activity => html`
                <li>${activity.text} : ${activity.length} minutes</li>
                `)}
              </ul>
          </div>
        </div>
      </a11y-collapse>
      </div>
          <hr>
        </div>
      </div>
  
    `;
  }
}

customElements.define('project-three-2', ProjectThree2);