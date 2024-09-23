import {
    RouterProvider,
    createBrowserRouter,
  } from "react-router-dom";
  
import Ligi from "../block/ligi";
import Teams from "../block/teams";
import LigiMatch from "../block/ligiMatch";
import TeamsMatch from "../block/teamsMatch";
import Header from "../block/header";

  export function AppRoute() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: ( <><Header/><Ligi/></> ),
      },
      {
        path: "/ligi",
        element: ( <><Header/><Ligi/></> ),
      },
      {
        path: "/ligi/:id",
        element: ( <><Header/><LigiMatch/></> ),
      },
      {
        path: "/teams",
        element: ( <><Header/><Teams/></> ),
      },
      {
        path: "/teams/:id",
        element: ( <><Header/><TeamsMatch/></> ),
      }
    ]);
    return <RouterProvider router={router} />;

  }