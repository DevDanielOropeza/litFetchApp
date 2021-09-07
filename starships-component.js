import { LitElement, html, css } from "lit-element";

class StarshipsComponent extends LitElement {
  static get properties() {
    return {
      starshipsUrl: { type: String },
      starships: { type: Object },
    };
  }

  async firstUpdated() {
    if (this.starshipsUrl === "") return;
    try {
      const res = await fetch(`${this.starshipsUrl}`);
      const data = await res.json();
      this.starships = data;
    } catch (error) {
      throw error;
    }
  }

  render() {
    return html`
      <section>
        ${this.starships !== undefined
          ? html`<div class="colspan-3 title">${this.starships.name}</div>
              <div class="colspan-2">name</div>
              <div>${this.starships.name}</div>
              <div class="colspan-2">model</div>
              <div>${this.starships.model}</div>
              <div class="colspan-2">manufacturer</div>
              <div>${this.starships.manufacturer}</div>
              <div class="colspan-2">cost_in_credits</div>
              <div>${this.starships.cost_in_credits}</div>
              <div class="colspan-2">length</div>
              <div>${this.starships.length}</div>
              <div class="colspan-2">max_atmosphering_speed</div>
              <div>${this.starships.max_atmosphering_speed}</div>
              <div class="colspan-2">crew</div>
              <div>${this.starships.crew}</div>
              <div class="colspan-2">passengers</div>
              <div>${this.starships.passengers}</div>
              <div class="colspan-2">cargo_capacity</div>
              <div>${this.starships.cargo_capacity}</div>
              <div class="colspan-2">consumables</div>
              <div>${this.starships.consumables}</div>
              <div class="colspan-2">hyperdrive_rating</div>
              <div>${this.starships.hyperdrive_rating}</div>
              <div class="colspan-2">MGLT</div>
              <div>${this.starships.MGLT}</div>
              <div class="colspan-2">starship_class</div>
              <div>${this.starships.starship_class}</div> `
          : this.starshipsUrl === ""
          ? html`<p class="text-center">This person has no starship</p>`
          : html`Loading...`}
      </section>
    `;
  }

  constructor() {
    super();
  }

  static getStyles() {
    return css`
      section {
        background: orange !important;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5px;
        padding-bottom: 1rem;
        max-width: 500px;
      }
      div {
        padding: 0 1rem;
      }
      div:nth-child(odd) {
        text-align: end;
      }
      .title {
        padding: 0 0.5rem;
        font-size: 2rem;
        color: white;
        text-align: start !important;
      }

      .colspan-3 {
        grid-column: 1 / span 3;
      }
      .colspan-2 {
        grid-column: 1 / span 2;
      }

      .text-center {
        text-align: center;
      }
    `;
  }
}

customElements.define("starships-component", StarshipsComponent);
