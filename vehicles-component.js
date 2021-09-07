import { LitElement, html, css } from "lit-element";

class VehiclesComponent extends LitElement {
  static get properties() {
    return {
      vehiclesUrl: { type: String },
      vehicles: { type: Object },
    };
  }

  async firstUpdated() {
    if (this.vehiclesUrl === "") return;
    try {
      const res = await fetch(`${this.vehiclesUrl}`);
      const data = await res.json();
      this.vehicles = data;
    } catch (error) {
      throw error;
    }
  }

  render() {
    return html`
      <section>
        ${this.vehicles !== undefined
          ? html`<div class="colspan-3 title">${this.vehicles.name}</div>
              <div class="colspan-2">name</div>
              <div>${this.vehicles.name}</div>
              <div class="colspan-2">model</div>
              <div>${this.vehicles.model}</div>
              <div class="colspan-2">manufacturer</div>
              <div>${this.vehicles.manufacturer}</div>
              <div class="colspan-2">cost_in_credits</div>
              <div>${this.vehicles.cost_in_credits}</div>
              <div class="colspan-2">length</div>
              <div>${this.vehicles.length}</div>
              <div class="colspan-2">max_atmosphering_speed</div>
              <div>${this.vehicles.max_atmosphering_speed}</div>
              <div class="colspan-2">crew</div>
              <div>${this.vehicles.crew}</div>
              <div class="colspan-2">passengers</div>
              <div>${this.vehicles.passengers}</div>
              <div class="colspan-2">cargo_capacity</div>
              <div>${this.vehicles.cargo_capacity}</div>
              <div class="colspan-2">consumables</div>
              <div>${this.vehicles.consumables}</div>
              <div class="colspan-2">vehicle_class</div>
              <div>${this.vehicles.vehicle_class}</div> `
          : this.vehiclesUrl === ""
          ? html`<p class="text-center">This person has no vehicle</p>`
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

customElements.define("vehicles-component", VehiclesComponent);
