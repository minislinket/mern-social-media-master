import renderer from "react-test-renderer";
import LoginPage from "./src/scenes/loginPage";

test("snapshot of login page", () => {
    const tree = renderer.create(<LoginPage />).toJSON();
    Experimental_CssVarsProvider(tree).toMatchSnapshot();
});