import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";
import './learning-content.js';


class ProjectThree2 extends LitElement {
  static properties = {
    header: { type: String },
    weekDate: { type: String},
    completionTime: { type: Number },
    title: { type: String},
    info: { type: String },
    courses: { type: String }, 
    opened: {type: Boolean, reflect: true, attribute: 'opened-if'},
    content: { type: Object },
    allVideos: { type: Array },
    allReadings: { type: Array },
    allQuizzes: { type: Array }
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
    this.weekDate = '1';
    this.completionTime = 2;
    this.title = 'Misconceptions about happiness';
    this.info = 'In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.';
    this.courses = '9 videos (Total 55 min), 3 readings, 1 quiz';
    this.videoLabel = "9";
    this.readingLabel = "3";
    this.quizLabel = "1";
    this.opened = false;
    this.allVideos = [];
    this.allReadings = [];
    this.allQuizzes = [];
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
        <div class="show-wrapper">
          <div class="show-video-text"><simple-icon class="video-logo" icon="av:slow-motion-video"></simple-icon>${this.videoLabel} Videos</div>
            <div class="show-video-items">
            </div>
            <hr>
          <div class="show-reading"><simple-icon class="reading-logo" icon="chrome-reader-mode"></simple-icon>${this.readingLabel} Readings</div>
            <div class="show-reading-items">
              ${this.allReadings}
            </div>
            <hr>
          <div class="show-quizzes"><simple-icon class="quiz-logo" icon="assignment"></simple-icon>${this.quizLabel} Quizzes</div>
          <div class="show-quiz-items">
            ${this.allQuizzes}
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