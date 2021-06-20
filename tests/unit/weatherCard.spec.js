import { mount } from "@vue/test-utils";
import WeatherCard from "@/components/WeatherCard.vue";

const card = {
  id: "123",
  img: "Clouds",
  temp: 275,
  formattedDate: `24˚`
};

// This section tests the weather card component only and serves as an example only.
// Tests for additional components are required.

describe("WeathreCard.vue", () => {
  it("weather card is rendered", () => {
    const wrapper = mount(WeatherCard);
    expect(wrapper.find(`.v-card`).exists()).toBeTruthy();
  });

  it('card "id" is set', () => {
    const wrapper = mount(WeatherCard, {
      propsData: { ...card }
    });
    expect(wrapper.attributes("id")).toBe(card.id);
  });

  it("event is emitted", () => {
    const wrapper = mount(WeatherCard);
    wrapper.find(".v-card").trigger("click");
    const emitted = wrapper.emitted();
    expect(Object.keys(emitted)).toContain("click");
  });
});
