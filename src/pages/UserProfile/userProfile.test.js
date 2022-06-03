import {render, screen} from "@testing-library/react";
import UserProfile from "./index";
import store from "../../Redux/store";
import {Provider} from "react-redux";
import '@testing-library/jest-dom'


describe('user profile', () => {

    test('renders heading', () => {
        render(<Provider store={store}><UserProfile/></Provider>);
        const headerTitle = screen.getByText('My Profile');
        expect(headerTitle).toBeInTheDocument()
    })
})