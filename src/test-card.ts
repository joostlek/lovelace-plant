import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import pjson from "../package.json";
import { customElement } from "lit-element";

@customElement("test-card")
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TestCard extends LitElement {
  @property() hass;
  @property() config;


  setConfig(config) {
    this.config = config;
  }

  getCardSize() {
    return 5;
  }

  render() {

    return html`
      <ha-card>
        yes
      </ha-card>
    `;
  }
}

console.info(
  `%cMORE-INFO-CARD ${pjson.version} IS INSTALLED`,
  "color: green; font-weight: bold",
  ""
);
