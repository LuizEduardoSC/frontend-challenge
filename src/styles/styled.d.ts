import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
        cardBg: string;
        border: string;
    };
    fonts: {
        body: string;
        heading: string;
    };
    spacing: {
        small: string;
        medium: string;
        large: string;
    };
    radius: {
        small: string;
        medium: string;
        large: string;
    };
    }
}
