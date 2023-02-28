import renderer from "react-test-renderer";
import HomePage from "./scenes/homePage/index.jsx";

test("snapshot of login page", () => {
    const tree = renderer.create(<HomePage />).toJSON();
    Experimental_CssVarsProvider(tree).toMatchSnapshot();
});