import React from "react";

import { IButtonProps } from "./Button.type";

export const Button = ({ children }: IButtonProps): JSX.Element => {
    return <button type="button">{children}</button>;
};
