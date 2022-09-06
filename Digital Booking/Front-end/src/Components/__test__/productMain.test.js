import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import HeaderBlock from "../Product/HeaderBlock";
import Place from "../Product/Place";
import PolicyBlock from "../Product/PolicyBlock";
import Ubication from "../Product/Ubication";
import FeatureBlock from "../Product/FeatureBlock";
import DescriptionBlock from "../Product/DescriptionBlock";
import ProductMain from "../Product/ProductMain";
import Ratings from "../Product/Ratings";
import AceptDates from "../Product/AceptDates";
import FeatureListProduct from "../Product/FeatureListProduct";

/*Test para Productmain*/
describe("productMain", () => {
  test("classCategory", async () => {
    const view = render(
      <BrowserRouter>
        <HeaderBlock />
      </BrowserRouter>
    );
    const classCategory = view.screen.getByRole(
      ".category-product"
    );
    expect(classCategory).toBeInTheDocument();
  });

  test("className", async () => {
    const view = render(
      <BrowserRouter>
        <HeaderBlock />
      </BrowserRouter>
    );
    const className = view.screen.getByRole(".name-product");
    expect(className).toBeInTheDocument();
  });

  /*Test para Place*/
  test("place", async () => {
    const view = render(
      <BrowserRouter>
        <Place />
      </BrowserRouter>
    );
    const place = view.screen.getByRole("div");
    expect(place).toBeInTheDocument();
  });

  /*Test para Policy*/
  test("policy", async () => {
    const view = render(
      <BrowserRouter>
        <PolicyBlock />
      </BrowserRouter>
    );
    const policy = view.screen.getByRole(".container-policy");
    expect(policy).toBeInTheDocument();
  });

  /*Test para Rating*/
  test("rating", async () => {
    const view = render(
      <BrowserRouter>
        <Ratings />
      </BrowserRouter>
    );
    const rating = view.screen.getByRole(".container-rating-jsx");
    expect(rating).toBeInTheDocument();
  });

  /*Test para Ubication*/
  test("ubication", async () => {
    const view = render(
      <BrowserRouter>
        <Ubication />
      </BrowserRouter>
    );
    const ubication = view.screen.getByRole(".container-ubication");
    expect(ubication).toBeInTheDocument();
  });

  /*Test para Feature*/
  test("feature", async () => {
    const view = render(
      <BrowserRouter>
        <FeatureBlock />
      </BrowserRouter>
    );
    const feature = view.screen.getByRole(".container-feature");
    expect(feature).toBeInTheDocument();
  });

  /*Test para Description*/
  test("description", async () => {
    const view = render(
      <BrowserRouter>
        <DescriptionBlock />
      </BrowserRouter>
    );
    const description = view.screen.getByRole(
      ".container-description"
    );
    expect(description).toBeInTheDocument();
  });

  /*Test para Description*/
  test("productMain", async () => {
    const view = render(
      <BrowserRouter>
        <ProductMain />
      </BrowserRouter>
    );
    const product = view.screen.getByRole("Header");
    expect(product).toBeInTheDocument();
  });

    /*Test para AceptDates*/
    test("AceptDates", async () => {
        const view = render(
          <BrowserRouter>
            <AceptDates />
          </BrowserRouter>
        );
        const c = view.screen.getByRole(".c");
        expect(c).toBeInTheDocument();
      });

      
    /*Test para featuresListProduct*/
    test("featuresListProduct", async () => {
        const view = render(
          <BrowserRouter>
            <FeatureListProduct />
          </BrowserRouter>
        );
        const container = view.screen.getByRole(".feature-products-container");
        expect(container).toBeInTheDocument();
      });

});



/*
describe('stringMatching in arrayContaining', () => {
    const expected = [
      expect.stringMatching("Bad-"),
      expect.stringMatching("Bad"),
      expect.stringMatching("Ok"),
      expect.stringMatching("Good"),
      expect.stringMatching("Good+"),
      expect.stringMatching("Excellent"),
      

    ];

/*
    expect.extend({
        async fraseClick(received) {
          const externalValue = await getExternalValueFromRemoteSource();
          const pass = received !== null;

          if (pass) {
            return {
              message: () =>
                `expected ${received} not to be divisible by ${externalValue}`,
              pass: true,
            };

          } else {
            return {
              message: () =>
                `expected ${received} to be divisible by ${externalValue}`,
              pass: false,
            };
          }
        },
      });


    test('stringMatching in arrayContaining', async () => {
       /* const view = render(
            <BrowserRouter>
                <Ratings />
            </BrowserRouter>
        )
        const rating = view.screen.getByRole('p')

      expect(rating).toEqual(
        expect.arrayContaining(expected),
      );
    });

  });*/
