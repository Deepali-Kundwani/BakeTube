import React from "react";
import "../css/nav.css";
import { useUrl } from "../context/useVideoPlaylistId";
import requests from "./requests";

export default function Nav() {
  const { setPlaylistId } = useUrl();

  return (
    <>
      <nav className="nav-container">
        <ul className="left">
          <li onClick={() => setPlaylistId(requests.fetchJava)}>bake</li>
          <li onClick={() => setPlaylistId(requests.fetchjavaScript)}>
            choco
          </li>
          <li onClick={() => setPlaylistId(requests.fetchNeog)}>caramel</li>
          <li onClick={() => setPlaylistId(requests.fetchReact)}>sweets</li>
        </ul>
      </nav>
    </>
  );
}
