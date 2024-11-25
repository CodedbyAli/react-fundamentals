import { Provider } from "react-redux";
import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it('Should render Header Component with 0 Cart Items', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItem = screen.getByText('Cart-(0 Items)');

    expect(cartItem).toBeInTheDocument();
})

it('Should render Header Component with Cart', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/);
    
    expect(cart).toBeInTheDocument();
})

it('Should change Login button to Logout on Click', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button',{name: 'Login'});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole('button',{name: 'Logout'});

    expect(logoutButton).toBeInTheDocument();
})