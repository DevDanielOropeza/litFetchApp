import { LitElement, html, css } from "lit-element";
import "./homeworld-component";
import "./species-component";
import "./vehicles-component";
import "./starships-component";
import "./person-component";

class PeopleComponent extends LitElement {
  static get properties() {
    return {
      people: { type: Array },
      activePerson: { type: Object },
      activeTab: { type: String },
    };
  }

  async firstUpdated() {
    try {
      const res = await fetch("https://swapi.dev/api/people");
      const data = await res.json();
      this.people = data.results;
      this.activePerson = this.people[0];
    } catch (error) {
      throw error;
    }
  }

  _changeTab(e) {
    e.preventDefault();
    this.shadowRoot.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    this.activeTab = e.target.id;
  }

  render() {
    return html`${this.people.length === 0
      ? html`<div class="flex-row">Loading People...</div>`
      : html`
          <div class="flex-row">
            <ul class="list list-vertical">
              ${this.people.length > 0
                ? this.people.map(
                    (person) =>
                      html`<li
                        @click="${() => {
                          this.activePerson = person;
                        }}"
                      >
                        ${person.name}
                      </li>`
                  )
                : html``}
            </ul>
            <div class="container">
              <div class="tab">
                <div class="active" id="personal" @click="${this._changeTab}">
                  Personal
                </div>
                <div id="homeworld" @click="${this._changeTab}">Homeworld</div>
                <div id="species" @click="${this._changeTab}">Species</div>
                <div id="vehicles" @click="${this._changeTab}">Vehicles</div>
                <div id="starships" @click="${this._changeTab}">Starships</div>
              </div>

              ${this.activePerson !== undefined &&
              (this.activeTab === "personal"
                ? html`<person-component
                    .person=${this.activePerson}
                  ></person-component>`
                : this.activeTab === "homeworld"
                ? html`<homeworld-component
                    .homeworldUrl=${this.activePerson.homeworld}
                  ></homeworld-component>`
                : this.activeTab === "species"
                ? html`<species-component
                    .speciesUrl=${this.activePerson.species.length !== 0
                      ? this.activePerson.species
                      : "https://swapi.dev/api/species/1"}
                  ></species-component>`
                : this.activeTab === "vehicles"
                ? html`<vehicles-component
                    .vehiclesUrl=${this.activePerson.vehicles.length !== 0
                      ? this.activePerson.vehicles[0]
                      : ""}
                  ></vehicles-component>`
                : this.activeTab === "starships"
                ? html`<starships-component
                    .starshipsUrl=${this.activePerson.starships.length !== 0
                      ? this.activePerson.starships[0]
                      : ""}
                  ></starships-component>`
                : html`Loading...`)}
            </div>
          </div>
        `}`;
  }

  constructor() {
    super();
    this.people = [];
    this.activeTab = "personal";
  }

  static getStyles() {
    return css`
      :host {
        font-family: "Ubuntu";
      }
      div {
        font-size: 1rem;
      }

      .list {
        list-style: none;
        list-style-type: none;
        display: flex;
        padding: 1rem;
        align-items: center;
        justify-content: center;
      }

      .list-vertical {
        flex-direction: column;
        gap: 0.5rem;
      }

      .list li {
        background: orange;
        padding: 0.5rem;
        width: 100%;
        text-align: center;
      }

      .list li:hover {
        background: rgba(255, 165, 0, 0.5);
        cursor: pointer;
      }

      .container {
        margin-top: 2rem;
      }

      .flex-row {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: center;
      }

      .tab {
        background: rgba(255, 165, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .tab div {
        padding: 0.5rem;
        text-align: center;
        width: 100%;
        cursor: pointer;
      }

      .tab div.active {
        background: orange;
        border-bottom: 1px solid white;
      }

      .tab div:hover {
        background: rgba(255, 165, 0, 0.5);
      }
    `;
  }
}

customElements.define("people-component", PeopleComponent);
