import { LitElement, html, css } from "lit-element";

class HomeWorldComponent extends LitElement {
  static get properties() {
    return {
      homeworldUrl: { type: String },
      homeworld: { type: Object },
    };
  }

  async firstUpdated() {
    try {
      const res = await fetch(`${this.homeworldUrl}`);
      const data = await res.json();
      this.homeworld = data;
    } catch (error) {
      throw error;
    }
  }

  // updated(changedProperties) {
  //   if (changedProperties.has("homeworldUrl")) {
  //     console.log(this.homeworldUrl);
  //   }
  // }

  render() {
    return html`
      <section>
        ${this.homeworld !== undefined
          ? html`<div class="colspan-3 title">${this.homeworld.name}</div>
              <div class="colspan-2">rotation_period</div>
              <div>${this.homeworld.rotation_period}</div>
              <div class="colspan-2">orbital_period</div>
              <div>${this.homeworld.orbital_period}</div>
              <div class="colspan-2">diameter</div>
              <div>${this.homeworld.diameter}</div>
              <div class="colspan-2">climate</div>
              <div>${this.homeworld.climate}</div>
              <div class="colspan-2">gravity</div>
              <div>${this.homeworld.gravity}</div>
              <div class="colspan-2">terrain</div>
              <div>${this.homeworld.terrain}</div>
              <div class="colspan-2">surface_water</div>
              <div>${this.homeworld.surface_water}</div>
              <div class="colspan-2">population</div>
              <div>${this.homeworld.population}</div>`
          : html`Loading...`}
      </section>
    `;
  }

  constructor(homeworldUrl) {
    super();
    this.homeworldUrl = homeworldUrl;
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
    `;
  }
}

customElements.define("homeworld-component", HomeWorldComponent);
