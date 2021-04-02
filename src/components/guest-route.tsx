import React, { FC, ComponentProps } from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";
import {useMyAccount} from './hooks/use-my-account';

export const GuestRoute: FC<ComponentProps<typeof Route>> = ({ children, ...rest }) => {
  const {myAccount} = useMyAccount();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !myAccount ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
