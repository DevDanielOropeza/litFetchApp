import { LitElement, html, css } from "lit-element";

class SpeciesComponent extends LitElement {
  static get properties() {
    return {
      speciesUrl: { type: String },
      species: { type: Object },
    };
  }

  async firstUpdated() {
    try {
      const res = await fetch(`${this.speciesUrl}`);
      const data = await res.json();
      this.species = data;
    } catch (error) {
      throw error;
    }
  }

  render() {
    return html`
      <section>
        ${this.species !== undefined
          ? html`<div class="colspan-3 title">${this.species.name}</div>
              <div class="colspan-2">name</div>
              <div>${this.species.name}</div>
              <div class="colspan-2">classification</div>
              <div>${this.species.classification}</div>
              <div class="colspan-2">designation</div>
              <div>${this.species.designation}</div>
              <div class="colspan-2">average_height</div>
              <div>${this.species.average_height}</div>
              <div class="colspan-2">skin_colors</div>
              <div>${this.species.skin_colors}</div>
              <div class="colspan-2">hair_colors</div>
              <div>${this.species.hair_colors}</div>
              <div class="colspan-2">eye_colors</div>
              <div>${this.species.eye_colors}</div>
              <div class="colspan-2">average_lifespan</div>
              <div>${this.species.average_lifespan}</div>
              <div class="colspan-2">homeworld</div>
              <div>${this.species.homeworld}</div>
              <div class="colspan-2">language</div>
              <div>${this.species.language}</div>`
          : this.species !== undefined && this.species.length === 0
          ? html`<p>This person has no species</p>`
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
    `;
  }
}

customElements.define("species-component", SpeciesComponent);
