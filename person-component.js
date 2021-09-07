import { LitElement, html, css } from "lit-element";

class PersonComponent extends LitElement {
  static get properties() {
    return {
      person: { type: Object },
    };
  }

  render() {
    const {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
    } = this.person;
    return html`
      <section>
        <div class="colspan-3 title">${name}</div>
        <div class="colspan-2">name</div>
        <div>${name}</div>
        <div class="colspan-2">height</div>
        <div>${height}</div>
        <div class="colspan-2">mass</div>
        <div>${mass}</div>
        <div class="colspan-2">hair_color</div>
        <div>${hair_color}</div>
        <div class="colspan-2">skin_color</div>
        <div>${skin_color}</div>
        <div class="colspan-2">eye_color</div>
        <div>${eye_color}</div>
        <div class="colspan-2">birth_year</div>
        <div>${birth_year}</div>
        <div class="colspan-2">gender</div>
        <div>${gender}</div>
      </section>
    `;
  }

  constructor(person) {
    super();
    this.person = person;
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

customElements.define("person-component", PersonComponent);
